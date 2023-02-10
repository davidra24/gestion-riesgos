import React, { cloneElement, ReactElement, ReactNode, useState } from 'react';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { riesgoModel } from '../../types/riesgo.model';
import { FormNavigation } from './FormNavigation';
import { RiskStepper } from '../../components/form-steps/RiskStepper';

interface multiFormProps {
	children: Array<ReactNode> | ReactNode;
	initialValues: riesgoModel;
	onSubmit: Function;
}

export const MultiFormStep = ({
	children,
	initialValues,
	onSubmit
}: multiFormProps) => {
	const [stepNumber, setStepNumber] = useState<number>(0);
	const [snapshot, setSnapshot] = useState<FormikValues>(initialValues);

	const steps = React.Children.toArray(children) as Array<ReactElement>;

	const step = steps[stepNumber];
	const totalSteps = steps.length;
	const isLastStep = stepNumber === totalSteps - 1;

	const next = (values: FormikValues) => {
		setSnapshot(values);
		if (!isLastStep) setStepNumber(stepNumber + 1);
	};

	const previous = (values: FormikValues) => {
		setSnapshot(values);
		setStepNumber(stepNumber - 1);
	};

	const handleSubmit = async (
		values: FormikValues,
		actions: FormikHelpers<FormikValues>
	) => {
		if (step.props.onSubmit) {
			await step.props.onSubmit(values);
		}
		if (isLastStep) {
			return onSubmit(values, actions);
		} else {
			actions.setTouched({});
			next(values);
		}
	};

	return (
		<Formik
			initialValues={snapshot}
			onSubmit={handleSubmit}
			validationSchema={step.props.validationSchema}>
			{(formik) => (
				<Form style={{ marginTop: 30 }}>
					<RiskStepper
						stepNumber={stepNumber}
						steps={steps}
						style={{ marginBottom: '3rem' }}
					/>
					{cloneElement(step, { values: formik.values })}
					<FormNavigation
						isLastStep={isLastStep}
						hasPrevious={stepNumber > 0}
						onBackClick={() => previous(formik.values)}></FormNavigation>
				</Form>
			)}
		</Formik>
	);
};
