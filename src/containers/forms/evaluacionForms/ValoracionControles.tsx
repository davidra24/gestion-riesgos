import { useState } from 'react';
import { IndependentInputField } from '../../../components/formFields/IdependentInputField';
import { IndependentSelectField } from '../../../components/formFields/IndependentSelectField';
import { controlKey } from '../../../types/riesgo.model';
import { listaTratamientos } from '../../../utils/listas';

export const ValoracionControles = ({
	agregarControl
}: {
	agregarControl: Function;
}) => {
	return (
		<>
			<div className='modalFormItem'>
				<IndependentSelectField
					name='tratamiento'
					changeField={agregarControl}
					labelId='select-controles-tratamiento'
					label='Tratamiento'
					options={listaTratamientos}
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Responsable del control'
					name='responsableControl'
					changeField={agregarControl}
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Acción'
					name='accion'
					changeField={agregarControl}
					multiline
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Complemento'
					name='complementoControl'
					changeField={agregarControl}
					multiline
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Descripción del control'
					name='descripcionControl'
					changeField={agregarControl}
					multiline
				/>
			</div>
		</>
	);
};
