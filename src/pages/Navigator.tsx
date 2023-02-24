import { Route, Routes } from 'react-router';
import { GestionRiesgos } from './GestionRiesgos';
import { PlanAccion } from './PlanAccion';

export const Navigator = () => (
	<>
		<Routes>
			<Route path='/' element={<GestionRiesgos />} />
			<Route path={`/plan-accion`} element={<PlanAccion />} />
		</Routes>
	</>
);
