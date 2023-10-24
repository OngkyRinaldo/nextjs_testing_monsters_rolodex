import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox components - rendering', () => {
    test('should have element input and placeholder have text search monsters...', () => {
        const mockOnChangeHandler = jest.fn();
        render(<SearchBox onChangeHandler={mockOnChangeHandler} />);

        expect(screen.getByRole('searchbox')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/search monsters.../i)
        ).toBeInTheDocument();
    });

    test('SearchBox onChange event', () => {
        const mockOnChangeHandler = jest.fn();

        render(<SearchBox onChangeHandler={mockOnChangeHandler} />);

        const searchInput = screen.getByPlaceholderText(
            'search monsters...'
        ) as HTMLInputElement;

        fireEvent.change(searchInput, { target: { value: 'userInput' } });

        expect(searchInput.value).toBe('userInput');

        expect(mockOnChangeHandler).toHaveBeenCalled();
    });
});
