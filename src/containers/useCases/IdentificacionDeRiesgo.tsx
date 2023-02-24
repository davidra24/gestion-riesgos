import React from 'react';
import { InputField } from '../../components/formFields/InputField';
import { SelectField } from '../../components/formFields/SelectField';
import { optionsClasificacion, optionsImpacto } from '../../utils/listas';

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
