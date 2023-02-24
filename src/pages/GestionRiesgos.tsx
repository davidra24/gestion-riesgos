import React from 'react';
import { IdentificacionDeRiesgo } from '../containers/useCases/IdentificacionDeRiesgo';
import { MultiFormStep } from '../containers/forms/MultiFormStep';
import { FormStep } from '../components/formSteps/FormStep';
import * as yup from 'yup';
import { ValoracionDeRiesgoInherente } from '../containers/useCases/ValoracionDeRiesgoInherente';
import { EvaluacionRiesgo } from '../containers/useCases/EvaluacionRiesgo';
import { INITIAL_VALUES } from '../utils/constants';
import '../styles/formSteps.css';

export const GestionRiesgos: React.FC = () => {
	return (
		<MultiFormStep
			initialValues={INITIAL_VALUES}
			onSubmit={(values: any) => {
				console.log(JSON.stringify(values, null, 2));
			}}>
			<FormStep
				name='Identificacion del riesgo'
				validationSchema={yup.object({
					identificacionRiesgo: yup.object().shape({
						consecutivo: yup.number()
					})
				})}>
				<IdentificacionDeRiesgo />
			</FormStep>
			<FormStep
				name='Valoración de Riesgo Inherente'
				validationSchema={yup.object({})}>
				<ValoracionDeRiesgoInherente />
			</FormStep>
			<FormStep
				name='Evaluación del riesgo'
				validationSchema={yup.object({
					identificacionRiesgo: yup.object().shape({})
				})}>
				<EvaluacionRiesgo />
			</FormStep>
		</MultiFormStep>
	);
};
