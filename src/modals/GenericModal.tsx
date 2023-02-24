import { CSSProperties } from '@emotion/serialize';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

interface genericModalProps {
	open: boolean;
	handleClose: () => void;
	children: ReactNode;
	title?: string;
	description?: string;
}

const styleBox = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'white',
	boxShadow: 24,
	p: 4
};

const styleClose: CSSProperties = {
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	cursor: 'pointer'
};

const styleContent: CSSProperties = {
	width: '100%',
	display: 'flex',
	justifyContent: 'center'
};

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
		<Box sx={styleBox}>
			<Typography sx={styleClose} onClick={handleClose}>
				X
			</Typography>
			<Box sx={styleContent}>{children}</Box>
		</Box>
	</Modal>
);
