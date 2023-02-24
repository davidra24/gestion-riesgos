import React from 'react';
import { ValoracionModalContainer } from '../containers/useCases/ValoracionModalContainer';
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
			<ValoracionModalContainer closeModal={handleClose} />
		</GenericModal>
	);
};
