import { TextField } from '@mui/material';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { VARIANT } from '../../utils/constants';
import { CustomizeTextField } from '../../utils/customization';

interface Props {
	label: string;
	className?: string;
	multiline?: boolean;
	disabled?: boolean;
	changeField?: Function;
	style?: CSSProperties;
	name: string;
	color?: any;
	type?: string;
	defaultValue?: string | number;
}

export const IndependentInputField = ({
	label,
	className,
	multiline,
	disabled,
	changeField,
	style,
	color,
	name,
	type,
	defaultValue,
	...props
}: Props) => {
	const [value, setValue] = useState<string | number | undefined>(defaultValue);
	const CssTextField = CustomizeTextField(color);

	useMemo(() => {
		if (defaultValue) {
			setValue(defaultValue);
		}
	}, [defaultValue]);

	return (
		<>
			{color ? (
				<CssTextField
					fullWidth
					style={style}
					disabled={disabled}
					multiline={multiline}
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
					variant={VARIANT}
				/>
			) : (
				<TextField
					fullWidth
					style={style}
					disabled={disabled}
					multiline={multiline}
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
					variant={VARIANT}
				/>
			)}
		</>
	);
};
