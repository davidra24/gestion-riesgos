import { Card, CardContent, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { controlModel, riesgoModel } from '../../types/riesgo.model';
import {
	ALTA,
	BAJA,
	EMPTY_STRING,
	MEDIA,
	MUY_ALTA,
	MUY_BAJA,
	ONE,
	ZERO
} from '../../utils/constants';

interface probabilidadResidualProps {
	controles: Array<controlModel>;
	controlActual: controlModel;
	indexControl: number;
	porcentajeInherente: number;
}

export const CardProbabilidadResudial = ({
	controlActual,
	indexControl,
	porcentajeInherente
}: probabilidadResidualProps) => {
	const { values, setFieldValue } = useFormikContext<riesgoModel>();

	const { probabilidades } = values?.evaluacionRiesgo.riesgoResidual!!;

	const [valueProbabilidadResidual, setValueProbabilidadResidual] =
		useState(ZERO);
	const [valueProbabilidadResidualFinal, setValueProbabilidadResidualFinal] =
		useState(EMPTY_STRING);

	/** TODO - FALTA ALMACENAR EL PORCENTAJE BASE ANTERIOR */
	useEffect(() => {
		console.log('Probabilidades{index-one}', probabilidades[indexControl - ONE]);
		console.log('Probabilidades', probabilidades);
		const porcentajeBase =
			indexControl === 0 ? porcentajeInherente : porcentajeInherente; //probabilidades[indexControl - ONE]
		const { calificacion: calificacionActual } = controlActual.atributos!!;

		const probabilidadResidual = Math.abs(
			(porcentajeBase!! - porcentajeBase!! * calificacionActual!!) / 100
		);

		const probabilidadResidualFinal =
			probabilidadResidual === 0
				? EMPTY_STRING
				: probabilidadResidual <= 20
				? MUY_BAJA
				: probabilidadResidual <= 40
				? BAJA
				: probabilidadResidual <= 60
				? MEDIA
				: probabilidadResidual <= 80
				? ALTA
				: MUY_ALTA;

		const probabilidadResidualArray = [
			...values.evaluacionRiesgo.riesgoResidual.probabilidades
		];

		if (probabilidadResidualArray.length === 0) {
			probabilidadResidualArray.push({
				probabilidadResidual,
				probabilidadResidualFinal
			});
		} else {
			if (probabilidadResidualArray[indexControl] !== undefined) {
				probabilidadResidualArray[indexControl] = {
					probabilidadResidual,
					probabilidadResidualFinal
				};
			} else {
				probabilidadResidualArray.push({
					probabilidadResidual,
					probabilidadResidualFinal
				});
			}
		}
		setFieldValue(
			'evaluacionRiesgo.riesgoResidual.probabilidades',
			probabilidadResidualArray
		);
		setValueProbabilidadResidual(probabilidadResidual);
		setValueProbabilidadResidualFinal(probabilidadResidualFinal);
	}, []);

	return (
		<Card sx={{ width: 300 }}>
			<CardContent>
				<Typography>
					<strong>Probabilidad Residual: </strong>
					{valueProbabilidadResidual} %
				</Typography>
				<Typography>
					<strong>Probabilidad Residual final: </strong>
					{valueProbabilidadResidualFinal}
				</Typography>
			</CardContent>
		</Card>
	);
};
