import { SearchBoxProps } from '@/type/SearchBoxProps';

const SearchBox = ({ onChangeHandler }: SearchBoxProps) => {
    return (
        <section className=' text-center mb-10'>
            <input
                type='search'
                placeholder='search monsters...'
                className='search-box py-5 px-5 rounded-full'
                onChange={onChangeHandler}
            />
        </section>
    );
};

export default SearchBox;
