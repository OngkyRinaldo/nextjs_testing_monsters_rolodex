import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Home Page - Rendering', () => {
    test('home page should render and have text "Monsters Rolodex"', async () => {
        render(<Home />);

        expect(
            await screen.findByText(/Monsters Rolodex/i)
        ).toBeInTheDocument();
    });
});
