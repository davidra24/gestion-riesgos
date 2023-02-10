import React from 'react';
import { IdentificacionDeRiesgo } from '../use-cases/IdentificacionDeRiesgo';
import { MultiFormStep } from './MultiFormStep';
import { FormStep } from '../../components/form-steps/FormStep';
import * as yup from 'yup';
import '../../styles/formSteps.css';
import { ValoracionDeRiesgoInherente } from '../use-cases/ValoracionDeRiesgoInherente';
import { riesgoModel } from '../../types/riesgo.model';
import { EvaluacionRiesgo } from '../use-cases/EvaluacionRiesgo';

export const PaginatedFormContainer: React.FC = () => {
	const initialValues: riesgoModel = {
		identificacionRiesgo: {
			consecutivo: 0,
			impacto: 0,
			consecuenciaInmediata: '',
			causaRaiz: '',
			descripcionRiesgo: '',
			clasificacionRiesgo: 0
		},
		valoracionRiesgoInherente: {
			probabilidadActividad: 0,
			probabilidadInherente: '',
			porcentajeProbabilidadInherente: 0,
			criteriosImpacto: 0,
			impactoInherente: '',
			porcentajeImpactoInherente: 0,
			zonaRiesgoInherente: ''
		},
		evaluacionRiesgo: {
			valoracionControles: {
				controles: [],
				responsableControl: '',
				dependencia: ''
			},
			riesgoResidual: {
				probabilidades: [],
				porcentajeProbabilidadResidualFinal: 0,
				nivelProbabilidadFinal: '',
				porcentajeImpactoResidualFinal: '',
				nivelImpactoFinal: '',
				zonaRiesgoFinal: ''
			}
		},
		planDeAccion: {
			planAccion: '',
			responsable: '',
			fechaImplementacion: new Date(),
			fechaSeguimiento: new Date(),
			Seguimiento: '',
			estado: ''
		},
		monitoreoSeguimientoControles: {
			monitoreoSegundaLinea: '',
			seguimientoControlTerceraLinea: '',
			soportes: ''
		}
	};

	return (
		<MultiFormStep
			initialValues={initialValues}
			onSubmit={(values: any) => {
				alert(JSON.stringify(values, null, 2));
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
