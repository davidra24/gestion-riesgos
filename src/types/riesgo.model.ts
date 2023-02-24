export interface atriburosModel {
	afectacion?: number;
	tipo?: string;
	porcentaje?: number;
	implementacion?: string | number;
	porcentajeImplementacion?: number;
	calificacion?: number;
	documentacion?: number;
	frecuencia?: number;
	evidencia?: number;
}

export interface controlModel {
	numeroControl?: number;
	tratamiento?: number;
	responsableControl?: string;
	accion?: string;
	complementoControl?: string;
	descripcionControl?: string;
	atributos?: atriburosModel;
}

export interface probabilidadesModel {
	probabilidadResidual: number;
	probabilidadResidualFinal: string;
}

export interface riesgoModel {
	identificacionRiesgo: {
		consecutivo: number;
		impacto: number;
		consecuenciaInmediata: string;
		causaRaiz: string;
		descripcionRiesgo: string;
		clasificacionRiesgo: number;
	};
	valoracionRiesgoInherente: {
		probabilidadActividad: number;
		probabilidadInherente: string;
		porcentajeProbabilidadInherente: number;
		criteriosImpacto: number;
		impactoInherente: string;
		porcentajeImpactoInherente: number;
		zonaRiesgoInherente: string;
	};
	evaluacionRiesgo: {
		valoracionControles: {
			controles: Array<controlModel>;
			responsableControl: string;
			dependencia: string;
		};
		riesgoResidual: {
			probabilidades: Array<probabilidadesModel>;
			porcentajeProbabilidadResidualFinal: number;
			nivelProbabilidadFinal: string;
			porcentajeImpactoResidualFinal: number;
			nivelImpactoFinal: string;
			zonaRiesgoFinal: string;
		};
	};
	planDeAccion: {
		tratamiento: Array<number>;
		planAccion: string;
		responsable: string;
		fechaImplementacion: Date;
		fechaSeguimiento: Date;
		seguimiento: string;
		indicador: string;
		estado: string;
	};
	monitoreoSeguimientoControles: {
		monitoreoSegundaLinea: string;
		seguimientoControlTerceraLinea: string;
		soportes: string;
	};
}

export interface riesgoProps {
	values?: riesgoModel;
}

export type controlKey =
	| 'numeroControl'
	| 'tratamiento'
	| 'responsableControl'
	| 'accion'
	| 'complementoControl'
	| 'descripcionControl'
	| 'atributos';

export type atributoKey =
	| 'afectacion'
	| 'tipo'
	| 'porcentaje'
	| 'implementacion'
	| 'porcentajeImplementacion'
	| 'calificacion'
	| 'documentacion'
	| 'frecuencia'
	| 'evidencia';
