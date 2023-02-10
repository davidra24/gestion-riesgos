import React from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { FieldConfig, useField } from 'formik';

interface Props extends FieldConfig {
	label: string;
	className?: string;
	options: Array<{ value: number | string; label: string }>;
	labelId: string;
}

export const SelectField = ({
	label,
	className,
	options,
	labelId,
	...props
}: Props) => {
	const [field, meta] = useField({ name: props.name });

	return (
		<>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select
				labelId={labelId}
				{...field}
				fullWidth
				className={className}
				label={label}
				name={props.name}
				type={props.type}
				value={field.value}
				onChange={field.onChange}
				variant='standard'
				error={meta.touched && Boolean(meta.error)}>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</>
	);
};
