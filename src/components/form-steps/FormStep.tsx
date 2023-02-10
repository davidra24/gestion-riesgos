import React, { cloneElement, ReactElement } from 'react';
import { OptionalObjectSchema } from 'yup/lib/object';
import { riesgoModel } from '../../types/riesgo.model';

interface formStepProps {
	name: string;
	children: ReactElement;
	validationSchema: OptionalObjectSchema<any>;
	onSubmit?: Function;
	values?: riesgoModel;
}

export const FormStep = ({ name = '', children, values }: formStepProps) =>
	cloneElement(children, { values });
