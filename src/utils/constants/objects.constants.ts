import { atriburosModel, riesgoModel } from '../../types/riesgo.model';
import { FIFTEEN, FORTY, ZERO } from './numbers.constants';
import { PROBABILDAD } from './strings.constants';

export const DEFAULT_ATTRIBUTES: atriburosModel = {
	afectacion: ZERO,
	tipo: PROBABILDAD,
	porcentaje: FIFTEEN,
	implementacion: ZERO,
	porcentajeImplementacion: FIFTEEN,
	documentacion: ZERO,
	frecuencia: ZERO,
	evidencia: ZERO,
	calificacion: FORTY
};

export const INITIAL_VALUES: riesgoModel = {
	identificacionRiesgo: {
		consecutivo: 0,
		impacto: 0,
		consecuenciaInmediata: '',
		causaRaiz: '',
		descripcionRiesgo: '',
		clasificacionRiesgo: 0
	},
	valoracionRiesgoInherente: {
		probabilidadActividad: 0,
		probabilidadInherente: '',
		porcentajeProbabilidadInherente: 0,
		criteriosImpacto: 0,
		impactoInherente: '',
		porcentajeImpactoInherente: 0,
		zonaRiesgoInherente: ''
	},
	evaluacionRiesgo: {
		valoracionControles: {
			controles: [],
			responsableControl: '',
			dependencia: ''
		},
		riesgoResidual: {
			probabilidades: [],
			porcentajeProbabilidadResidualFinal: 0,
			nivelProbabilidadFinal: '',
			porcentajeImpactoResidualFinal: 0,
			nivelImpactoFinal: '',
			zonaRiesgoFinal: ''
		}
	},
	planDeAccion: {
		tratamiento: [],
		planAccion: '',
		responsable: '',
		fechaImplementacion: new Date(),
		fechaSeguimiento: new Date(),
		seguimiento: '',
		indicador: '',
		estado: ''
	},
	monitoreoSeguimientoControles: {
		monitoreoSegundaLinea: '',
		seguimientoControlTerceraLinea: '',
		soportes: ''
	}
};
