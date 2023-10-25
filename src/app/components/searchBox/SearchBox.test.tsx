import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox components - rendering', () => {
    test('should have element input and placeholder have text search monsters...', () => {
        render(<SearchBox />);
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/search monsters.../i)
        ).toBeInTheDocument();
    });
    test('SearchBox onChange event', () => {
        render(<SearchBox />);

        const inputElement = screen.getByPlaceholderText(
            'search monsters...'
        ) as HTMLInputElement;

        fireEvent.change(inputElement, { target: { value: 'user1' } });

        expect(inputElement.value).toBe('user1');
    });
});
