import React, { useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { FieldConfig, useField } from 'formik';
import { VARIANT } from '../../utils/constants';

interface Props {
	label: string;
	className?: string;
	options: Array<{ value: number | string; label: string }>;
	labelId: string;
	multiline?: boolean;
	disabled?: boolean;
	changeField: Function;
	name: string;
	type?: string;
}

export const IndependentSelectField = ({
	label,
	className,
	options,
	labelId,
	changeField,
	name,
	type
}: Props) => {
	const [value, setValue] = useState<string | number>(0);

	return (
		<>
			<FormControl fullWidth>
				<InputLabel id={labelId}>{label}</InputLabel>
				<Select
					labelId={labelId}
					fullWidth
					className={className}
					label={label}
					name={name}
					type={type}
					value={value}
					onChange={(e) => {
						const { value } = e.target;
						setValue(value);
						changeField && changeField(name, value);
					}}
					variant={VARIANT}>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};
