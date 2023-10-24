import { User } from '@/type/User';
import Card from './Card';

type CardListProps = {
    users: User[];
    error: string | null;
};

const CardList = ({ users, error }: CardListProps) => {
    return (
        <section>
            {error && (
                <p className='text-red-500 text-center text-lg font-semibold'>
                    {error}
                </p>
            )}
            <div className='container mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-4 '>
                {users.map((user) => {
                    return <Card key={user.id} user={user} />;
                })}
            </div>
        </section>
    );
};

export default CardList;
