import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export const VARIANT = 'outlined';
export const MIN_WIDTH_ICON = 48;
export const DRAWER_WIDTH = 240;
export const PRINCPAL_MENU: Array<{ name: string; url: string; icon: any }> = [
	{
		name: 'Evaluación de riegos',
		url: '/',
		icon: ReportProblemIcon
	},
	{
		name: 'Plan de acción ',
		url: '/plan-accion',
		icon: FactCheckIcon
	}
];
