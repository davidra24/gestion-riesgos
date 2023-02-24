import React from 'react';
import '../styles/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavBar } from '../containers/navigation/Navbar';
import { Navigator } from './Navigator';

const theme = createTheme({
	palette: {
		lightGreen: {
			main: '#95d5b2',
			contrastText: '#000'
		},
		green: {
			main: '#74c69d',
			contrastText: '#000'
		},
		yellow: {
			main: '#ffc300',
			contrastText: '#000'
		},
		orange: {
			main: '#ee9b00',
			contrastText: '#fff'
		},
		red: {
			main: '#e63946',
			contrastText: '#fff'
		},
		darkRed: {
			main: '#9b2226',
			contrastText: '#fff'
		}
	}
});

declare module '@mui/material/styles' {
	interface Palette {
		lightGreen: Palette['primary'];
		green: Palette['primary'];
		yellow: Palette['primary'];
		orange: Palette['primary'];
		red: Palette['primary'];
		darkRed: Palette['primary'];
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		lightGreen?: PaletteOptions['primary'];
		green?: PaletteOptions['primary'];
		yellow?: PaletteOptions['primary'];
		orange?: PaletteOptions['primary'];
		red?: PaletteOptions['primary'];
		darkRed?: PaletteOptions['primary'];
	}
}

declare module '@mui/material/TextField' {
	interface TextFieldPropsColorOverrides {
		lightGreen: true;
		green: true;
		yellow: true;
		orange: true;
		red: true;
		darkRed: true;
	}
}

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<NavBar children={<Navigator />} />
			</ThemeProvider>
		</div>
	);
}

export default App;
