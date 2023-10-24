import { render, screen } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox components - rendering', () => {
    test('should have element input and placeholder have text search monsters...', () => {
        render(<SearchBox />);

        expect(screen.getByRole('searchbox')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/search monsters.../i)
        ).toBeInTheDocument();
    });
});
