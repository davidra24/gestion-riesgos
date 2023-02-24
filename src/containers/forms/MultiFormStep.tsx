import React, { cloneElement, ReactElement, ReactNode, useState } from 'react';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { riesgoModel } from '../../types/riesgo.model';
import { FormNavigation } from './FormNavigation';
import { RiskStepper } from '../../components/formSteps/RiskStepper';
import {
	ONE,
	THIRTY,
	THREE,
	ZERO
} from '../../utils/constants/numbers.constants';

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
	const [stepNumber, setStepNumber] = useState<number>(ZERO);
	const [snapshot, setSnapshot] = useState<FormikValues>(initialValues);

	const steps = React.Children.toArray(children) as Array<ReactElement>;

	const step = steps[stepNumber];
	const totalSteps = steps.length;
	const isLastStep = stepNumber === totalSteps - ONE;

	const next = (values: FormikValues) => {
		setSnapshot(values);
		if (!isLastStep) setStepNumber(stepNumber + ONE);
	};

	const previous = (values: FormikValues) => {
		setSnapshot(values);
		setStepNumber(stepNumber - ONE);
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
				<Form style={{ marginTop: THIRTY }}>
					<RiskStepper
						stepNumber={stepNumber}
						steps={steps}
						style={{ marginBottom: `${THREE}rem` }}
					/>
					{step}
					<FormNavigation
						isLastStep={isLastStep}
						hasPrevious={stepNumber > ZERO}
						onBackClick={() => previous(formik.values)}></FormNavigation>
				</Form>
			)}
		</Formik>
	);
};
