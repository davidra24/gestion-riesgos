import React, { CSSProperties, ReactElement } from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

interface riskStepperProps {
	stepNumber: number;
	steps: Array<ReactElement>;
	style: CSSProperties;
}

export const RiskStepper = ({ stepNumber, steps, style }: riskStepperProps) => (
	<Stepper activeStep={stepNumber} style={style} alternativeLabel>
		{steps.map((currentStep, index) => (
			<Step key={index}>
				<StepLabel>{currentStep.props.name}</StepLabel>
			</Step>
		))}
	</Stepper>
);
