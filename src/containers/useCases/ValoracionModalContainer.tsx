import { Button, Tab, Tabs, Box } from '@mui/material';
import { useFormikContext } from 'formik';
import { SyntheticEvent, useState } from 'react';
import {
	atriburosModel,
	atributoKey,
	controlKey,
	controlModel,
	riesgoModel
} from '../../types/riesgo.model';
import '../../styles/modalForm.css';
import { ValoracionControles } from '../forms/evaluacionForms/ValoracionControles';
import { AtributosValoracion } from '../forms/evaluacionForms/AtributosValoracion';
import { TabPanel } from '../../components/TabPanel';
import { ONE, ZERO, DEFAULT_ATTRIBUTES } from '../../utils/constants';

export const ValoracionModalContainer = ({
	closeModal
}: {
	closeModal: Function;
}) => {
	const { values, setFieldValue } = useFormikContext<riesgoModel>();
	const [control, setControl] = useState<controlModel>({});
	const [atributos, setAtributos] = useState<atriburosModel>(DEFAULT_ATTRIBUTES);

	const [tabIndex, setTabIndex] = useState(ZERO);

	const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
		setTabIndex(newValue);
	};

	const agregarControl = (
		key: controlKey,
		value: string | number | atriburosModel
	) => {
		setControl({ ...control, [key]: value });
	};

	const agregarAtributo = (key: atributoKey, value: string | number) => {
		setAtributos({ ...atributos, [key]: value });
	};

	const bulkAgregarAtributos = (newAtributos: atriburosModel) => {
		setAtributos({ ...atributos, ...newAtributos });
	};

	const handleAddControl = () => {
		const controlItem = { ...control, atributos };
		setFieldValue('evaluacionRiesgo.valoracionControles.controles', [
			...values.evaluacionRiesgo.valoracionControles.controles,
			controlItem
		]);
		closeModal();
	};

	return (
		<>
			<div className='modalFormContainer'>
				<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
					<Tabs value={tabIndex} onChange={handleChangeTab} centered>
						<Tab label='Valoración de controles' />
						<Tab label='Atributos de la valoración' />
					</Tabs>
				</Box>
				<Box sx={{ width: '90%' }}>
					<TabPanel value={tabIndex} index={ZERO}>
						<ValoracionControles agregarControl={agregarControl} />
					</TabPanel>
					<TabPanel value={tabIndex} index={ONE}>
						<AtributosValoracion
							atributos={atributos}
							agregarAtributo={agregarAtributo}
							bulkAgregarAtributos={bulkAgregarAtributos}
						/>
					</TabPanel>
				</Box>
				<Button onClick={handleAddControl}>Agregar valoración de controles</Button>
			</div>
		</>
	);
};
