import { render, screen, waitFor, act } from '@testing-library/react';
import CardList from './CardList';
import { server } from '../../../../mocks/server';
import { rest } from 'msw';
import { User } from '@/type/User';
import { error } from 'console';

const sampleUsers: User[] = [
    { id: 1, name: 'User1', email: 'user1@example.com' },
    { id: 2, name: 'User2', email: 'user2@example.com' },
];

describe('Card component - rendering', () => {
    test('renders a list of Card components', () => {
        render(<CardList users={sampleUsers} error='Loading...' />);

        const cards = screen.getAllByTestId('card');

        expect(cards).toHaveLength(sampleUsers.length);

        sampleUsers.forEach((user, index) => {
            const card = cards[index];
            const { name, email } = user;

            expect(card).toHaveTextContent(name);
            expect(card).toHaveTextContent(email);
        });
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

        render(<CardList users={sampleUsers} error='loading' />);

        const error = await screen.findByText(/loading/i);
        expect(error).toBeInTheDocument();
    });
});
