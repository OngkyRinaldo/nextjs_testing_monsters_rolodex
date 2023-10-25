import { useContext } from 'react';
import Card from './Card';
import { DataContext } from '@/context/DataContext';

const CardList = () => {
    const { filteredUsers, error, isLoading } = useContext(DataContext);
    return (
        <section>
            {error && (
                <p className='text-red-500 text-center text-lg font-semibold'>
                    {error}
                </p>
            )}

            {isLoading ? (
                <p className='text-center text-lg font-semibold'>Loading...</p>
            ) : (
                <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 '>
                    {filteredUsers.map((user) => {
                        return <Card key={user.id} user={user} />;
                    })}
                </div>
            )}
        </section>
    );
};

export default CardList;
