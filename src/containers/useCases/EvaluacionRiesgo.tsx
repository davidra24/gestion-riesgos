import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useMemo, useState } from 'react';
import { IndependentInputField } from '../../components/formFields/IdependentInputField';
import { InputField } from '../../components/formFields/InputField';
import { ModalEvaluacionRiesgo } from '../../modals/ModalEvaluacionRiesgo';
import { riesgoModel } from '../../types/riesgo.model';
import {
	CATASTROFICO,
	EMPTY_STRING,
	LEVE,
	MAYOR,
	MENOR,
	MODERADO,
	ONE,
	ZERO
} from '../../utils/constants';
import { CardControles } from '../cards/CardControles';
import { CardProbabilidadResudial } from '../cards/CardProbabilidadResidual';

export const EvaluacionRiesgo = () => {
	const { values, setFieldValue } = useFormikContext<riesgoModel>();
	const [showModal, setShowModal] = useState(false);
	const { controles } = values?.evaluacionRiesgo.valoracionControles!!;
	const { porcentajeProbabilidadInherente } = values?.valoracionRiesgoInherente;
	const { probabilidades } = values?.evaluacionRiesgo.riesgoResidual;
	const valuePorcentajeImpactoResidualFinal =
		values.valoracionRiesgoInherente.porcentajeImpactoInherente;

	const [
		valuePorcentajeProbabilidadResidualFinal,
		setValuePorcentajeProbabilidadResidualFinal
	] = useState<number>(ZERO);

	const [valueNivelProbabilidad, setValueNivelProbabilidad] =
		useState<string>(EMPTY_STRING);

	const [valueNivelImpactoFinal, setValueNivelImpactoFinal] =
		useState(EMPTY_STRING);

	const [valueZonaRiesgoFinal, setValueZonaRiesgoFinal] = useState(EMPTY_STRING);

	useMemo(() => {
		const size = probabilidades.length;
		if (size > 0) {
			const residual = probabilidades[size - ONE].probabilidadResidual;
			const residualFinal = probabilidades[size - ONE].probabilidadResidualFinal;

			setValuePorcentajeProbabilidadResidualFinal(residual);
			setValueNivelProbabilidad(residualFinal);
			setFieldValue(
				'evaluacionRiesgo.riesgoResidual.porcentajeProbabilidadResidualFinal',
				residual
			);
			setFieldValue(
				'evaluacionRiesgo.riesgoResidual.nivelProbabilidadFinal',
				residualFinal
			);
		}
	}, [probabilidades.length]);

	useMemo(() => {
		const porcentaje = valuePorcentajeImpactoResidualFinal;
		switch (true) {
			case porcentaje <= 20:
				setValueNivelImpactoFinal(LEVE);
				break;
			case porcentaje <= 40:
				setValueNivelImpactoFinal(MENOR);
				break;
			case porcentaje <= 60:
				setValueNivelImpactoFinal(MODERADO);
				break;
			case porcentaje <= 80:
				setValueNivelImpactoFinal(MAYOR);
				break;
			default:
				setValueNivelImpactoFinal(CATASTROFICO);
				break;
		}
	}, [valuePorcentajeImpactoResidualFinal]);

	useMemo(() => {
		//=SI.ERROR(SI(O(Y(AH13="Muy Baja";AJ13="Leve");Y(AH13="Muy Baja";AJ13="Menor");Y(AH13="Baja";AJ13="Leve"));"Bajo";SI(O(Y(AH13="Muy baja";AJ13="Moderado");Y(AH13="Baja";AJ13="Menor");Y(AH13="Baja";AJ13="Moderado");Y(AH13="Media";AJ13="Leve");Y(AH13="Media";AJ13="Menor");Y(AH13="Media";AJ13="Moderado");Y(AH13="Alta";AJ13="Leve");Y(AH13="Alta";AJ13="Menor"));"Moderado";SI(O(Y(AH13="Muy Baja";AJ13="Mayor");Y(AH13="Baja";AJ13="Mayor");Y(AH13="Media";AJ13="Mayor");Y(AH13="Alta";AJ13="Moderado");Y(AH13="Alta";AJ13="Mayor");Y(AH13="Muy Alta";AJ13="Leve");Y(AH13="Muy Alta";AJ13="Menor");Y(AH13="Muy Alta";AJ13="Moderado");Y(AH13="Muy Alta";AJ13="Mayor"));"Alto";SI(O(Y(AH13="Muy Baja";AJ13="Catastrófico");Y(AF13="Baja";AJ13="Catastrófico");Y(AF13="Media";AJ13="Catastrófico");Y(AF13="Alta";AJ13="Catastrófico");Y(AF13="Muy Alta";AJ13="Catastrófico"));"Extremo";""))));"")
		const porcentaje = valuePorcentajeImpactoResidualFinal;
	}, [valuePorcentajeImpactoResidualFinal]);

	return (
		<>
			<ModalEvaluacionRiesgo open={showModal} setOpen={setShowModal} />
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				{controles &&
					controles?.map((control, index) => (
						<CardControles key={index} {...control} />
					))}
			</div>
			<Button onClick={() => setShowModal(!showModal)}>
				Agregar valoración de los controles
			</Button>
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
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					margin: '1.5rem'
				}}>
				{controles &&
					controles?.map((control, index) => (
						<CardProbabilidadResudial
							key={index}
							controles={controles}
							controlActual={control}
							indexControl={index}
							porcentajeInherente={porcentajeProbabilidadInherente}
						/>
					))}
			</div>
			<div className='formItem'>
				<IndependentInputField
					className='formTextArea'
					name='evaluacionRiesgo.riesgoResidual.porcentajeProbabilidadResidualFinal'
					label='Porcentaje de probabilidad residual final'
					type='number'
					defaultValue={valuePorcentajeProbabilidadResidualFinal}
					disabled
				/>
			</div>
			<div className='formItem'>
				<IndependentInputField
					className='formTextArea'
					name='evaluacionRiesgo.riesgoResidual.nivelProbabilidadFinal'
					label='Nivel de probabilidad final'
					type='text'
					defaultValue={valueNivelProbabilidad}
					disabled
				/>
			</div>
			<div className='formItem'>
				<IndependentInputField
					className='formTextArea'
					name='evaluacionRiesgo.riesgoResidual.porcentajeImpactoResidualFinal'
					label='% de impacto residual'
					type='number'
					defaultValue={valuePorcentajeImpactoResidualFinal}
					disabled
				/>
			</div>
			<div className='formItem'>
				<IndependentInputField
					className='formTextArea'
					name='evaluacionRiesgo.riesgoResidual.nivelImpactoFinal'
					label='Nivel de impacto final'
					type='text'
					defaultValue={valueNivelImpactoFinal}
					disabled
				/>
			</div>
			<div className='formItem'>
				<IndependentInputField
					className='formTextArea'
					name='evaluacionRiesgo.riesgoResidual.zonaRiesgoFinal'
					label='Zona de riesgo final'
					type='text'
					defaultValue={valueZonaRiesgoFinal}
					disabled
				/>
			</div>
		</>
	);
};
