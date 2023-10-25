import { render, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import { server } from '../../../../mocks/server';
import { rest } from 'msw';

describe('CardList component - rendering', () => {
    test('check have loading... text', () => {
        render(<CardList />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders a list of card components', async () => {
        render(<CardList />);

        setTimeout(() => {
            expect(screen.getByText('user1')).toBeInTheDocument();
        }, 1000);
    });

    test('renders error', async () => {
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users',
                (req, res, ctx) => {
                    return res(ctx.status(500));
                }
            )
        );

        render(<CardList />);

        const error = await screen.findByText(/loading/i);
        expect(error).toBeInTheDocument();
    });
});
