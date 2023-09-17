import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomList from './index';

test('adds a new todo', () => {
    render(<CustomList />);

    const inputElement = screen.getByPlaceholderText('What need to be done?');

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText('New Todo')).toBeInTheDocument();
});
