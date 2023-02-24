import { Card, CardContent, Typography } from '@mui/material';
import { controlModel } from '../../types/riesgo.model';
import { listaTratamientos } from '../../utils/listas';

export const CardControles = ({
	tratamiento,
	responsableControl
}: controlModel) => (
	<Card sx={{ width: 300 }}>
		<CardContent>
			<Typography>
				<strong>Tratamiento: </strong>
				{
					listaTratamientos.find(
						(tratamientoValue) => tratamientoValue.value === tratamiento
					)?.label
				}
			</Typography>
			<Typography>
				<strong>Responsable: </strong>
				{responsableControl}
			</Typography>
		</CardContent>
	</Card>
);
