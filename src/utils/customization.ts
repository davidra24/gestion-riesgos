import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const CustomizeTextField = (color: any) =>
	styled(TextField)({
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: `${color} !important`
			},
			'&:hover fieldset': {
				borderColor: `${color} !important`
			},
			'&.Mui-focused fieldset': {
				borderColor: `${color} !important`
			},
			'& .Mui-disabled': {
				borderColor: `${color} !important`
			}
		}
	});
