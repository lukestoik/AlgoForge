// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AlgoForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AlgoForge/i);
    expect(titleElement).toBeInTheDocument();
});
