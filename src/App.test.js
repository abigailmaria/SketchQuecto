// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchQuecto title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchQuecto/i);
    expect(titleElement).toBeInTheDocument();
});
