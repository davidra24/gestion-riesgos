import { EvaluacionRiesgo } from '../containers/use-cases/EvaluacionRiesgo';
import { GenericModal } from './GenericModal';

interface modalEvaluacionRiesgoProps {
	open: boolean;
	setOpen: Function;
}

export const ModalEvaluacionRiesgo = ({
	open,
	setOpen
}: modalEvaluacionRiesgoProps) => {
	const handleClose = () => setOpen(false);
	return (
		<GenericModal open={open} handleClose={handleClose} title='evaluacion-riesgo'>
			<EvaluacionRiesgo />
		</GenericModal>
	);
};
