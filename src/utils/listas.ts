export const optionsImpacto = [
	{ value: 0, label: 'Afectación reputacional' },
	{ value: 1, label: 'Afectación económica' },
	{ value: 2, label: 'Afectación reputacional y económica' }
];

export const optionsClasificacion = [
	{ value: 0, label: 'Daños Activos Físicos' },
	{ value: 1, label: 'Ejecución y Administración de procesos' },
	{ value: 2, label: 'Fallas tecnológicas' },
	{ value: 3, label: 'Fraude Externo' },
	{ value: 4, label: 'Fraude Interno' },
	{ value: 5, label: 'Relaciones laborales' }
];

export const optionsCriteriosImpacto = [
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

export const listaTratamientos = [
	{ value: 0, label: 'Aceptar' },
	{ value: 1, label: 'Evitar' },
	{ value: 2, label: 'Compartir' },
	{ value: 3, label: 'Reducir (Mitigar)' }
];

export const atributosAfectacion = [
	{ value: 0, label: 'Detectivo' },
	{ value: 1, label: 'Preventivo' },
	{ value: 2, label: 'Correctivo' }
];

export const atributosImplementacion = [
	{ value: 0, label: 'Automático' },
	{ value: 1, label: 'Manual' }
];

export const atributosDocumentacion = [
	{ value: 0, label: 'Documentado' },
	{ value: 1, label: 'Sin documentar' }
];

export const atributosFrecuencia = [
	{ value: 0, label: 'Aleatorio' },
	{ value: 1, label: 'Continúo' }
];

export const atributosEvidencia = [
	{ value: 0, label: 'Con registro' },
	{ value: 1, label: 'Sin registro' }
];
