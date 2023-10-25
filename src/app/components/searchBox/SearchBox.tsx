import { DataContext } from '@/context/DataContext';
import { useContext } from 'react';

const SearchBox = () => {
    const { onSearch } = useContext(DataContext);

    return (
        <section className='text-center mb-10'>
            <input
                type='search'
                placeholder='search monsters...'
                className='search-box py-5 px-5 rounded-full cursor-pointer'
                onChange={onSearch}
            />
        </section>
    );
};

export default SearchBox;
