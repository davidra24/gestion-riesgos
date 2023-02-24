import React, { CSSProperties, useEffect, useMemo } from 'react';
import { TextField } from '@mui/material';
import { FieldConfig, useField, useFormikContext } from 'formik';
import styled from '@emotion/styled';
import { CustomizeTextField } from '../../utils/customization';
import { VARIANT } from '../../utils/constants';

interface Props<T> extends FieldConfig {
	label: string;
	className?: string;
	multiline?: boolean;
	disabled?: boolean;
	value?: T;
	style?: CSSProperties;
	color?: any;
}

export const InputField = <T extends string | number>({
	label,
	className,
	multiline,
	disabled,
	value,
	style,
	color,
	...props
}: Props<T>) => {
	const [field, meta] = useField({ name: props.name, value });
	const { setFieldValue } = useFormikContext();
	const CssTextField = CustomizeTextField(color);

	useEffect(() => {
		if (value) {
			setFieldValue(props.name, value);
		}
	}, [value]);

	return (
		<>
			{color ? (
				<CssTextField
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
					variant={VARIANT}
				/>
			) : (
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
					variant={VARIANT}
				/>
			)}
		</>
	);
};
