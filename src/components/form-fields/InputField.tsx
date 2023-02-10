import React, { CSSProperties, FC, useEffect } from 'react';
import { TextField } from '@mui/material';
import {
	FieldConfig,
	useField,
	FieldHookConfig,
	useFormikContext
} from 'formik';

interface Props<T> extends FieldConfig {
	label: string;
	className?: string;
	multiline?: boolean;
	disabled?: boolean;
	value?: T;
	style?: CSSProperties;
}

export const InputField = <T extends string | number>({
	label,
	className,
	multiline,
	disabled,
	value,
	style,
	...props
}: Props<T>) => {
	const [field, meta] = useField({ name: props.name, value });
	const { setFieldValue } = useFormikContext();

	useEffect(() => {
		if (value) {
			setFieldValue(props.name, value);
		}
	}, [value]);

	return (
		<>
			<TextField
				{...field}
				fullWidth
				style={style}
				disabled={disabled}
				multiline={multiline}
				className={className}
				label={label}
				name={props.name}
				type={props.type}
				value={field.value}
				onChange={field.onChange}
				error={meta.touched && Boolean(meta.error)}
				helperText={meta.touched && meta.error}
				variant='standard'
			/>
		</>
	);
};
