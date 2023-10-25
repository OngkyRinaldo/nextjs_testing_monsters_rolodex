'use client';

import { User } from '@/type/User';
import axios from 'axios';
import {
    ChangeEvent,
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from 'react';

type DataContextType = {
    users: User[];
    error: string | null;
    isLoading: boolean;
    searchField: string;
    setSearchField: Dispatch<SetStateAction<string>>;
    filteredUsers: User[];
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const DataContext = createContext<DataContextType>({
    users: [],
    error: null,
    isLoading: true,
    searchField: '',
    setSearchField: () => {},
    filteredUsers: [],
    onSearch: () => {},
});

type DataProviderProps = {
    children: ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchField, setSearchField] = useState<string>('');
    const [filteredUsers, setFilterUsers] = useState<User[]>([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            return setUsers(response.data);
            setIsLoading(false);
        } catch (error) {
            setError('Loading...');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (users.length > 0) {
            setIsLoading(false);
        } else {
            getData();
        }
    }, [users]);

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    useEffect(() => {
        const newFilteredUsers = users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchField);
        });

        setFilterUsers(newFilteredUsers);
    }, [users, searchField]);

    const value: DataContextType = {
        users,
        error,
        isLoading,
        searchField,
        setSearchField,
        filteredUsers,
        onSearch,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
}
