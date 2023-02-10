import React, { useEffect, useMemo, useState } from 'react';
import { InputField } from '../../components/form-fields/InputField';
import { SelectField } from '../../components/form-fields/SelectField';
import { riesgoModel, riesgoProps } from '../../types/riesgo.model';

const optionsCriteriosImpacto = [
	{ value: 0, label: 'Afectación menor a 10 SMLMV' },
	{ value: 1, label: 'Entre 10 y 50 SMLMV' },
	{ value: 2, label: 'Entre 50 y 100 SMLMV' },
	{ value: 3, label: 'Entre 100 y 500 SMLMV' },
	{ value: 4, label: 'Mayor a 500 SMLMV' },
	{
		value: 5,
		label: 'El riesgo afecta la imagen de algun área de la organización'
	},
	{
		value: 6,
		label:
			'El riesgo afecta la imagen de la entidad internamente, de conocimiento general nivel interno, de Junta Directiva y Acciconistas y/o Proveedores'
	},
	{
		value: 7,
		label:
			'El riesgo afecta la imagen de la entidad con algunos usuarios de relevancia frente al logro de los objetivos'
	},
	{
		value: 8,
		label:
			'El riesgo afecta la imagen de la entidad con efecto publicitario sostenido a nivel de Sector Administrativo, Nivel Departamental o Municipal'
	},
	{
		value: 9,
		label:
			'El riesgo afecta la imagen de la entidad a Nivel Nacional, con Efecto publicitario sostenido a Nivel País'
	}
];

export const ValoracionDeRiesgoInherente: React.FC<riesgoProps> = ({
	values
}: riesgoProps) => {
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
		useState<string>('white');
	const [porcentajeProbabilidad, setPorcentajeProbabilidad] = useState<number>(
		porcentajeProbabilidadInherente
	);
	const [stateImpactoInherente, setStateImpactoInherente] =
		useState(impactoInherente);
	const [colorImpactoInherente, setColorImpactoInherente] = useState('white');
	const [statePorcentajeImpactoInherente, setStatePorcentajeImpactoInherente] =
		useState<number>(porcentajeImpactoInherente);
	const [stateZonaRiesgoInherente, setStateZonaRiesgoInherente] =
		useState<string>(zonaRiesgoInherente);
	const [colorZonaRiesgoInherente, setColorZonaRiesgoInherente] =
		useState<string>('white');

	useMemo(() => {
		const probabilidad = probabilidadActividad;
		if (probabilidad <= 0) {
			setStateProbabilidadInherente('');
			setColorStateProbabilidadInherente('white');
			setPorcentajeProbabilidad(0);
		} else if (probabilidad <= 2) {
			setStateProbabilidadInherente('Muy baja');
			setColorStateProbabilidadInherente('green');
			setPorcentajeProbabilidad(20);
		} else if (probabilidad <= 24) {
			setStateProbabilidadInherente('Baja');
			setColorStateProbabilidadInherente('green');
			setPorcentajeProbabilidad(40);
		} else if (probabilidad <= 500) {
			setStateProbabilidadInherente('Media');
			setColorStateProbabilidadInherente('orange');
			setPorcentajeProbabilidad(60);
		} else if (probabilidad <= 5000) {
			setStateProbabilidadInherente('Alta');
			setColorStateProbabilidadInherente('red');
			setPorcentajeProbabilidad(80);
		} else {
			setStateProbabilidadInherente('Muy alta');
			setColorStateProbabilidadInherente('red');
			setPorcentajeProbabilidad(100);
		}
	}, [probabilidadActividad]);

	useMemo(() => {
		const criterios = criteriosImpacto;
		if (criterios === 0 || criterios === 5) {
			setStateImpactoInherente('Leve');
			setStatePorcentajeImpactoInherente(20);
			setColorImpactoInherente('green');
		} else if (criterios === 1 || criterios === 6) {
			setStateImpactoInherente('Menor');
			setStatePorcentajeImpactoInherente(40);
			setColorImpactoInherente('green');
		} else if (criterios === 2 || criterios === 7) {
			setStateImpactoInherente('Moderado');
			setStatePorcentajeImpactoInherente(60);
			setColorImpactoInherente('yellow');
		} else if (criterios === 3 || criterios === 8) {
			setStateImpactoInherente('Mayor');
			setStatePorcentajeImpactoInherente(80);
			setColorImpactoInherente('orange');
		} else {
			setStateImpactoInherente('Catastrofico');
			setStatePorcentajeImpactoInherente(100);
			setColorImpactoInherente('red');
		}
	}, [criteriosImpacto]);

	useMemo(() => {
		const probabilidadInherente = stateProbabilidadInherente;
		const impactoInherente = stateImpactoInherente;

		switch (probabilidadInherente) {
			case 'Muy baja': {
				if (impactoInherente === 'Leve' || impactoInherente === 'Menor') {
					setStateZonaRiesgoInherente('Bajo');
					setColorZonaRiesgoInherente('green');
				} else if (impactoInherente === 'Moderado') {
					setStateZonaRiesgoInherente('Moderado');
					setColorZonaRiesgoInherente('yellow');
				} else if (impactoInherente === 'Mayor') {
					setStateZonaRiesgoInherente('Alta');
					setColorZonaRiesgoInherente('orange');
				} else if (impactoInherente === 'Catastrofico') {
					setStateZonaRiesgoInherente('Extremo');
					setColorZonaRiesgoInherente('red');
				}
				break;
			}
			case 'Baja': {
				if (impactoInherente === 'Leve') {
					setStateZonaRiesgoInherente('Bajo');
					setColorZonaRiesgoInherente('green');
				} else if (
					impactoInherente === 'Menor' ||
					impactoInherente === 'Moderado'
				) {
					setStateZonaRiesgoInherente('Moderado');
					setColorZonaRiesgoInherente('yellow');
				} else if (impactoInherente === 'Mayor') {
					setStateZonaRiesgoInherente('Alta');
					setColorZonaRiesgoInherente('orange');
				} else if (impactoInherente === 'Catastrofico') {
					setStateZonaRiesgoInherente('Extremo');
					setColorZonaRiesgoInherente('red');
				}
				break;
			}
			case 'Media': {
				if (
					impactoInherente === 'Leve' ||
					impactoInherente === 'Menor' ||
					impactoInherente === 'Moderado'
				) {
					setStateZonaRiesgoInherente('Moderado');
					setColorZonaRiesgoInherente('yellow');
				} else if (impactoInherente === 'Mayor') {
					setStateZonaRiesgoInherente('Alta');
					setColorZonaRiesgoInherente('orange');
				} else if (impactoInherente === 'Catastrofico') {
					setStateZonaRiesgoInherente('Extremo');
					setColorZonaRiesgoInherente('red');
				}
				break;
			}
			case 'Alta': {
				if (impactoInherente === 'Leve' || impactoInherente === 'Menor') {
					setStateZonaRiesgoInherente('Moderado');
					setColorZonaRiesgoInherente('yellow');
				} else if (
					impactoInherente === 'Moderado' ||
					impactoInherente === 'Mayor'
				) {
					setStateZonaRiesgoInherente('Alta');
					setColorZonaRiesgoInherente('orange');
				} else if (impactoInherente === 'Catastrofico') {
					setStateZonaRiesgoInherente('Extremo');
					setColorZonaRiesgoInherente('red');
				}
				break;
			}
			case 'Muy alta': {
				if (impactoInherente !== 'Catastrofico') {
					setStateZonaRiesgoInherente('Alta');
					setColorZonaRiesgoInherente('orange');
				} else {
					setStateZonaRiesgoInherente('Extremo');
					setColorZonaRiesgoInherente('red');
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
					disabled
					value={stateProbabilidadInherente}
					style={{
						borderRadius: 5,
						border: `1px solid ${colorStateProbabilidadInherente}`
					}}
				/>
			</div>
			<div className='formItem'>
				<InputField
					className='formTextArea'
					name='valoracionRiesgoInherente.porcentajeProbabilidadInherente'
					label='Probabilidad Inherente %'
					type='text'
					value={porcentajeProbabilidad}
				/>
			</div>
			<div className='formItem'>
				<SelectField
					labelId='select-impacto'
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
					disabled
					style={{
						borderRadius: 5,
						border: `1px solid ${colorImpactoInherente}`
					}}
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
					style={{
						borderRadius: 5,
						border: `1px solid ${colorZonaRiesgoInherente}`
					}}
					disabled
				/>
			</div>
		</>
	);
};
