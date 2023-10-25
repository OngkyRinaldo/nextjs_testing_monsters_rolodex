'use client';

import CardList from './components/card/CardList';
import SearchBox from './components/searchBox/SearchBox';

const Home = () => {
    return (
        <main className='bg-gradient-to-l from-rose-100 to-teal-100 w-screen min-h-screen  font-Bigelow pb-10 '>
            <h1 className='text-center text-5xl pt-20 mb-12 text-main'>
                Monsters Rolodex
            </h1>

            <SearchBox />

            <CardList />
        </main>
    );
};

export default Home;
