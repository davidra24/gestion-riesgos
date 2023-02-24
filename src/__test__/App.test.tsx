import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Identificacion del riesgo/i);
	expect(linkElement).toBeInTheDocument();
});
