'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import CardList from './components/card/CardList';
import { User } from '@/type/User';
import axios from 'axios';
import SearchBox from './components/serachBox/SearchBox';

const Home = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchField, setSearchField] = useState('');
    const [filteredUsers, setFilterUsers] = useState(users);

    const getData = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            return setUsers(response.data);
        } catch (error) {
            setError('Loading...');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const newFilteredUsers = users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchField);
        });

        setFilterUsers(newFilteredUsers);
    }, [users, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };
    return (
        <main className='bg-gradient-to-l from-rose-100 to-teal-100 w-screen min-h-screen  font-Bigelow pb-10 '>
            <h1 className='text-center text-5xl pt-20 mb-12 text-main'>
                Monsters Rolodex
            </h1>

            <SearchBox onChangeHandler={onSearchChange} />

            <CardList users={filteredUsers} error={error} />
        </main>
    );
};

export default Home;
