import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

interface genericModalProps {
	open: boolean;
	handleClose: () => void;
	children: ReactNode;
	title?: string;
	description?: string;
}

export const GenericModal = ({
	open,
	handleClose,
	children,
	title = '',
	description = ''
}: genericModalProps) => (
	<Modal
		open={open}
		onClose={handleClose}
		aria-labelledby={`modal-modal-${title}`}
		aria-describedby={`modal-modal-${description}`}>
		<Box sx={{ width: '100%', height: '100%' }}>{children}</Box>
	</Modal>
);
