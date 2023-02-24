import { useFormikContext } from 'formik';
import React, { useMemo, useState } from 'react';
import { InputField } from '../../components/formFields/InputField';
import { SelectField } from '../../components/formFields/SelectField';
import { riesgoModel, riesgoProps } from '../../types/riesgo.model';
import {
	ZERO,
	ONE,
	TWO,
	THREE,
	FIVE,
	SIX,
	SEVEN,
	EIGHT,
	EIGHTY,
	FIVE_HUNDRED,
	FIVE_THOUSAND,
	FORTY,
	ONE_HUNDRED,
	SIXTY,
	TWENTY,
	TWENTY_FOUR,
	EMPTY_STRING,
	MUY_BAJA,
	BAJA,
	MEDIA,
	ALTA,
	MUY_ALTA,
	LEVE,
	MENOR,
	MODERADO,
	MAYOR,
	CATASTROFICO,
	VERDE_CLARO,
	VERDE,
	AMARILLO,
	NARANJA,
	ROJO,
	BAJO,
	EXTREMO
} from '../../utils/constants';
import { optionsCriteriosImpacto } from '../../utils/listas';

export const ValoracionDeRiesgoInherente: React.FC<riesgoProps> = () => {
	const { values } = useFormikContext<riesgoModel>();
	const {
		valoracionRiesgoInherente: {
			probabilidadActividad,
			probabilidadInherente,
			porcentajeProbabilidadInherente,
			criteriosImpacto,
			impactoInherente,
			porcentajeImpactoInherente,
			zonaRiesgoInherente
		}
	} = values!!;

	const [stateProbabilidadInherente, setStateProbabilidadInherente] =
		useState<string>(probabilidadInherente);
	const [colorStateProbabilidadInherente, setColorStateProbabilidadInherente] =
		useState<string>(EMPTY_STRING);
	const [porcentajeProbabilidad, setPorcentajeProbabilidad] = useState<number>(
		porcentajeProbabilidadInherente
	);
	const [stateImpactoInherente, setStateImpactoInherente] =
		useState(impactoInherente);
	const [colorImpactoInherente, setColorImpactoInherente] =
		useState(EMPTY_STRING);
	const [statePorcentajeImpactoInherente, setStatePorcentajeImpactoInherente] =
		useState<number>(porcentajeImpactoInherente);
	const [stateZonaRiesgoInherente, setStateZonaRiesgoInherente] =
		useState<string>(zonaRiesgoInherente);
	const [colorZonaRiesgoInherente, setColorZonaRiesgoInherente] =
		useState<string>(EMPTY_STRING);

	useMemo(() => {
		const probabilidad = probabilidadActividad;
		if (probabilidad <= ZERO) {
			setStateProbabilidadInherente(EMPTY_STRING);
			setColorStateProbabilidadInherente(EMPTY_STRING);
			setPorcentajeProbabilidad(ZERO);
		} else if (probabilidad <= TWO) {
			setStateProbabilidadInherente(MUY_BAJA);
			setColorStateProbabilidadInherente(VERDE_CLARO);
			setPorcentajeProbabilidad(TWENTY);
		} else if (probabilidad <= TWENTY_FOUR) {
			setStateProbabilidadInherente(BAJA);
			setColorStateProbabilidadInherente(VERDE);
			setPorcentajeProbabilidad(FORTY);
		} else if (probabilidad <= FIVE_HUNDRED) {
			setStateProbabilidadInherente(MEDIA);
			setColorStateProbabilidadInherente(AMARILLO);
			setPorcentajeProbabilidad(SIXTY);
		} else if (probabilidad <= FIVE_THOUSAND) {
			setStateProbabilidadInherente(ALTA);
			setColorStateProbabilidadInherente(NARANJA);
			setPorcentajeProbabilidad(EIGHTY);
		} else {
			setStateProbabilidadInherente(MUY_ALTA);
			setColorStateProbabilidadInherente(ROJO);
			setPorcentajeProbabilidad(ONE_HUNDRED);
		}
	}, [probabilidadActividad]);

	useMemo(() => {
		const criterios = criteriosImpacto;
		if (criterios === ZERO || criterios === FIVE) {
			setStateImpactoInherente(LEVE);
			setStatePorcentajeImpactoInherente(TWENTY);
			setColorImpactoInherente(VERDE_CLARO);
		} else if (criterios === ONE || criterios === SIX) {
			setStateImpactoInherente(MENOR);
			setStatePorcentajeImpactoInherente(FORTY);
			setColorImpactoInherente(VERDE);
		} else if (criterios === TWO || criterios === SEVEN) {
			setStateImpactoInherente(MODERADO);
			setStatePorcentajeImpactoInherente(SIXTY);
			setColorImpactoInherente(AMARILLO);
		} else if (criterios === THREE || criterios === EIGHT) {
			setStateImpactoInherente(MAYOR);
			setStatePorcentajeImpactoInherente(EIGHTY);
			setColorImpactoInherente(NARANJA);
		} else {
			setStateImpactoInherente(CATASTROFICO);
			setStatePorcentajeImpactoInherente(ONE_HUNDRED);
			setColorImpactoInherente(ROJO);
		}
	}, [criteriosImpacto]);

	useMemo(() => {
		const probabilidadInherente = stateProbabilidadInherente;
		const impactoInherente = stateImpactoInherente;

		switch (probabilidadInherente) {
			case MUY_BAJA: {
				if (impactoInherente === LEVE || impactoInherente === MENOR) {
					setStateZonaRiesgoInherente(BAJO);
					setColorZonaRiesgoInherente(VERDE);
				} else if (impactoInherente === MODERADO) {
					setStateZonaRiesgoInherente(MODERADO);
					setColorZonaRiesgoInherente(AMARILLO);
				} else if (impactoInherente === MAYOR) {
					setStateZonaRiesgoInherente(ALTA);
					setColorZonaRiesgoInherente(NARANJA);
				} else if (impactoInherente === CATASTROFICO) {
					setStateZonaRiesgoInherente(EXTREMO);
					setColorZonaRiesgoInherente(ROJO);
				}
				break;
			}
			case BAJA: {
				if (impactoInherente === LEVE) {
					setStateZonaRiesgoInherente(BAJO);
					setColorZonaRiesgoInherente(VERDE);
				} else if (impactoInherente === MENOR || impactoInherente === MODERADO) {
					setStateZonaRiesgoInherente(MODERADO);
					setColorZonaRiesgoInherente(AMARILLO);
				} else if (impactoInherente === MAYOR) {
					setStateZonaRiesgoInherente(ALTA);
					setColorZonaRiesgoInherente(NARANJA);
				} else if (impactoInherente === CATASTROFICO) {
					setStateZonaRiesgoInherente(EXTREMO);
					setColorZonaRiesgoInherente(ROJO);
				}
				break;
			}
			case MEDIA: {
				if (
					impactoInherente === LEVE ||
					impactoInherente === MENOR ||
					impactoInherente === MODERADO
				) {
					setStateZonaRiesgoInherente(MODERADO);
					setColorZonaRiesgoInherente(AMARILLO);
				} else if (impactoInherente === MAYOR) {
					setStateZonaRiesgoInherente(ALTA);
					setColorZonaRiesgoInherente(NARANJA);
				} else if (impactoInherente === CATASTROFICO) {
					setStateZonaRiesgoInherente(EXTREMO);
					setColorZonaRiesgoInherente(ROJO);
				}
				break;
			}
			case ALTA: {
				if (impactoInherente === LEVE || impactoInherente === MENOR) {
					setStateZonaRiesgoInherente(MODERADO);
					setColorZonaRiesgoInherente(AMARILLO);
				} else if (impactoInherente === MODERADO || impactoInherente === MAYOR) {
					setStateZonaRiesgoInherente(ALTA);
					setColorZonaRiesgoInherente(NARANJA);
				} else if (impactoInherente === CATASTROFICO) {
					setStateZonaRiesgoInherente(EXTREMO);
					setColorZonaRiesgoInherente(ROJO);
				}
				break;
			}
			case MUY_ALTA: {
				if (impactoInherente !== CATASTROFICO) {
					setStateZonaRiesgoInherente(ALTA);
					setColorZonaRiesgoInherente(NARANJA);
				} else {
					setStateZonaRiesgoInherente(EXTREMO);
					setColorZonaRiesgoInherente(ROJO);
				}
				break;
			}
		}
	}, [probabilidadActividad, criteriosImpacto]);

	return (
		<>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.probabilidadActividad'
					label='Probabilidad / Frecuencia con la cuál se realiza la actividad'
					type='number'
				/>
			</div>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.probabilidadInherente'
					label='Probabilidad Inherente'
					type='text'
					value={stateProbabilidadInherente}
					color={colorStateProbabilidadInherente}
					disabled
				/>
			</div>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.porcentajeProbabilidadInherente'
					label='Probabilidad Inherente %'
					type='text'
					value={porcentajeProbabilidad}
					disabled
				/>
			</div>
			<div className='formItem'>
				<SelectField
					labelId='select-criterios-impacto'
					label='Criterios de Impacto'
					name='valoracionRiesgoInherente.criteriosImpacto'
					options={optionsCriteriosImpacto}
				/>
			</div>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.impactoInherente'
					label='Impacto Inherente'
					type='text'
					value={stateImpactoInherente}
					color={colorImpactoInherente}
					disabled
				/>
			</div>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.porcentajeImpactoInherente'
					label='Impacto inherente %'
					type='text'
					value={statePorcentajeImpactoInherente}
					disabled
				/>
			</div>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.zonaRiesgoInherente'
					label='Zona de riesgo inherente'
					type='text'
					value={stateZonaRiesgoInherente}
					color={colorZonaRiesgoInherente}
					disabled
				/>
			</div>
		</>
	);
};
