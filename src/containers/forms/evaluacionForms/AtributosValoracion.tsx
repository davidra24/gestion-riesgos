import { useEffect, useMemo, useState } from 'react';
import { IndependentInputField } from '../../../components/formFields/IdependentInputField';
import { IndependentSelectField } from '../../../components/formFields/IndependentSelectField';
import { atriburosModel, atributoKey } from '../../../types/riesgo.model';
import {
	IMPACTO,
	PROBABILDAD,
	FIFTEEN,
	ONE,
	TEN,
	TWENTY_FIVE,
	TWO,
	ZERO,
	FORTY,
	THIRTY,
	FIFTY,
	THIRTY_FIVE
} from '../../../utils/constants';
import {
	atributosAfectacion,
	atributosDocumentacion,
	atributosEvidencia,
	atributosFrecuencia,
	atributosImplementacion
} from '../../../utils/listas';

interface atributosValoracionProps {
	atributos: atriburosModel;
	agregarAtributo: Function;
	bulkAgregarAtributos: Function;
}

export const AtributosValoracion = ({
	atributos,
	agregarAtributo,
	bulkAgregarAtributos
}: atributosValoracionProps) => {
	const { afectacion, implementacion } = atributos;
	const [defaultValueTipo, setDefaultValueTipo] = useState<string>(PROBABILDAD);
	const [porcentajeValueTipo, setPorcentajeValueTipo] =
		useState<number>(FIFTEEN);
	const [porcentajeImplementacion, setPorcentajeImplementacion] =
		useState(TWENTY_FIVE);
	const [calificacionValue, setCalificacionValue] = useState<number>(ZERO);

	useEffect(() => {
		let calificacion = FORTY;
		switch (afectacion) {
			case ZERO:
				calificacion = implementacion === ZERO ? FORTY : THIRTY;
				break;
			case ONE:
				calificacion = implementacion === ZERO ? FIFTY : FORTY;
				break;
			default:
				calificacion = implementacion === ZERO ? THIRTY_FIVE : TWENTY_FIVE;
				break;
		}
		setCalificacionValue(calificacion);
		agregarAtributo('calificacion', calificacion);
	}, [afectacion, implementacion]);

	return (
		<>
			<div className='modalFormItem'>
				<IndependentSelectField
					name='afectacion'
					changeField={async (key: atributoKey, value: number) => {
						const tipo = value !== TWO ? PROBABILDAD : IMPACTO;
						const porcentaje =
							value === ZERO ? FIFTEEN : value === ONE ? TWENTY_FIVE : TEN;
						setDefaultValueTipo(tipo);
						setPorcentajeValueTipo(porcentaje);
						bulkAgregarAtributos({
							porcentaje,
							tipo,
							[key]: value
						});
					}}
					labelId='select-controles-afectacion'
					label='Afectación'
					options={atributosAfectacion}
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Tipo de atributo'
					name='tipo'
					defaultValue={defaultValueTipo}
					disabled
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Porcentaje tipo %'
					name='porcentaje'
					defaultValue={porcentajeValueTipo}
					disabled
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentSelectField
					name='implementacion'
					changeField={(key: atributoKey, value: number) => {
						agregarAtributo(key, value);
						const porcentaje = value === 0 ? TWENTY_FIVE : FIFTEEN;
						setPorcentajeImplementacion(porcentaje);
					}}
					labelId='select-controles-implementacion'
					label='Implementacion'
					options={atributosImplementacion}
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Porcentaje implementación %'
					name='porcentajeImplementacion'
					defaultValue={porcentajeImplementacion}
					disabled
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentInputField
					label='Calificación %'
					name='calificacion'
					defaultValue={calificacionValue}
					disabled
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentSelectField
					name='documentacion'
					changeField={agregarAtributo}
					labelId='select-controles-documentacion'
					label='Documentacion'
					options={atributosDocumentacion}
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentSelectField
					name='frecuencia'
					changeField={agregarAtributo}
					labelId='select-controles-frecuencia'
					label='Frecuencia'
					options={atributosFrecuencia}
				/>
			</div>
			<div className='modalFormItem'>
				<IndependentSelectField
					name='evidencia'
					changeField={agregarAtributo}
					labelId='select-controles-evidencia'
					label='Evidencia'
					options={atributosEvidencia}
				/>
			</div>
		</>
	);
};
