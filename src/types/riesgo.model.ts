export interface atriburosModel {
	afectacion: string;
	tipo: string;
	porcentaje: number;
	implementacion: string | number;
	porcentajeImplementacion: number;
	calificacion: number;
	documentacion: string;
	frecuencia: string;
	evidencia: string;
}

export interface tratamientoModel {
	tratamiento: string | number;
	numeroControl: number;
	responsableControl: string;
	accion: string;
	cumplimientoControl: string;
	descripcionControl: string;
	atributos: atriburosModel;
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
		porcentajeProbabilidadInherente: 0;
		criteriosImpacto: number;
		impactoInherente: string;
		porcentajeImpactoInherente: 0;
		zonaRiesgoInherente: string;
	};
	evaluacionRiesgo: {
		valoracionControles: {
			controles: Array<tratamientoModel>;
			responsableControl: string;
			dependencia: string;
		};
		riesgoResidual: {
			probabilidades: Array<probabilidadesModel>;
			porcentajeProbabilidadResidualFinal: 0;
			nivelProbabilidadFinal: string;
			porcentajeImpactoResidualFinal: string;
			nivelImpactoFinal: string;
			zonaRiesgoFinal: string;
		};
	};
	planDeAccion: {
		planAccion: string;
		responsable: string;
		fechaImplementacion: Date;
		fechaSeguimiento: Date;
		Seguimiento: string;
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
