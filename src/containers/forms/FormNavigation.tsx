import React from 'react';
import { Button } from '@mui/material';
import { FormikValues } from 'formik';
import SendIcon from '@mui/icons-material/Send';
import Forward from '@mui/icons-material/ArrowForward';
import BackIcon from '@mui/icons-material/ArrowBack';

interface formNavigationProps {
	hasPrevious?: boolean;
	isLastStep?: boolean;
	onBackClick: (values: FormikValues) => void;
}

export const FormNavigation = ({
	hasPrevious,
	isLastStep,
	onBackClick
}: formNavigationProps) => {
	return (
		<div className='steps-button-container'>
			{hasPrevious && (
				<Button
					variant='contained'
					type='button'
					onClick={onBackClick}
					startIcon={<BackIcon />}>
					Anterior
				</Button>
			)}
			<Button
				variant='contained'
				type={'submit'}
				color='primary'
				endIcon={isLastStep ? <SendIcon /> : <Forward />}>
				{isLastStep ? 'Enviar' : 'Siguiente'}
			</Button>
		</div>
	);
};
