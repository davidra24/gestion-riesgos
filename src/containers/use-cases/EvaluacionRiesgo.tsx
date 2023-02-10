import { Button } from '@mui/material';
import { InputField } from '../../components/form-fields/InputField';
import { riesgoProps } from '../../types/riesgo.model';

export const EvaluacionRiesgo = ({ values }: riesgoProps) => (
	<>
		<Button>Agregar valoración de los controles</Button>
		<div className='formItem'>
			<InputField
				className='formTextArea'
				name='evaluacionRiesgo.valoracionControles.responsableControl'
				label='Responsable del control'
				type='text'
			/>
		</div>
		<div className='formItem'>
			<InputField
				className='formTextArea'
				name='evaluacionRiesgo.valoracionControles.dependencia'
				label='Dependencia'
				type='text'
			/>
		</div>
	</>
);
