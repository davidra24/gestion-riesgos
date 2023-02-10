import React from 'react';
import { InputField } from '../../components/form-fields/InputField';
import { SelectField } from '../../components/form-fields/SelectField';

const optionsImpacto = [
	{ value: 1, label: 'Afectación reputacional' },
	{ value: 2, label: 'Afectación económica' },
	{ value: 3, label: 'Afectación reputacional y económica' }
];

const optionsClasificacion = [
	{ value: 0, label: 'Daños Activos Físicos' },
	{ value: 1, label: 'Ejecución y Administración de procesos' },
	{ value: 2, label: 'Fallas tecnológicas' },
	{ value: 3, label: 'Fraude Externo' },
	{ value: 4, label: 'Fraude Interno' },
	{ value: 5, label: 'Relaciones laborales' }
];

export const IdentificacionDeRiesgo: React.FC = () => (
	<>
		<div className='formItem'>
			<InputField
				className='formTextArea'
				name='identificacionRiesgo.consecutivo'
				label='Consecutivo'
				type='number'
			/>
		</div>
		<div className='formItem'>
			<SelectField
				labelId='select-impacto'
				label='Impacto (¿Qué?)'
				name='identificacionRiesgo.impacto'
				options={optionsImpacto}
			/>
		</div>
		<div className='formItem'>
			<InputField
				className='formTextArea'
				name='identificacionRiesgo.consecuenciaInmediata'
				label='Consecuencia Inmediata (¿Cómo?)'
				type='text'
				multiline
			/>
		</div>
		<div className='formItem'>
			<InputField
				className='formTextArea'
				name='identificacionRiesgo.causaRaiz'
				label='Causa Raíz ¿Por qué?'
				type='text'
				multiline
			/>
		</div>
		<div className='formItem'>
			<InputField
				className='formTextArea'
				name='identificacionRiesgo.descripcionRiesgo'
				label='Descripción del Riesgo'
				type='text'
				multiline
			/>
		</div>
		<div className='formItem'>
			<SelectField
				labelId='select-clasificacion-riesgo'
				label='Clasificación del Riesgo'
				name='identificacionRiesgo.clasificacionRiesgo'
				options={optionsClasificacion}
			/>
		</div>
	</>
);
