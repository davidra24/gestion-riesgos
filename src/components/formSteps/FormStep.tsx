import React, { cloneElement, ReactElement } from 'react';
import { OptionalObjectSchema } from 'yup/lib/object';
import { riesgoModel } from '../../types/riesgo.model';

interface formStepProps {
	name: string;
	children: ReactElement;
	validationSchema: OptionalObjectSchema<any>;
	onSubmit?: Function;
}

export const FormStep = ({ name = '', children }: formStepProps) => children;
