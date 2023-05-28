import { FC, ReactNode, useState } from 'react';
import { createContext } from "react";
import { IUser, IUsersContext } from '../types/IUser';
import { API_USERS, API_TOKEN } from '../API/api';
import axios from 'axios';

export const UsersContext = createContext<IUsersContext | null>(null);

const UserProvider:FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [token, setToken] = useState<string>('');
    const usersCount = 6;

    const getUsers = async (page: number, collapse: boolean) => {
        try {
            setLoading(true);
            const responce = await axios.get(API_USERS + `?page=${page}&count=${usersCount}`);
            if(responce.status === 200) {
                if(collapse) {
                    setUsers(responce.data.users);
                } else {
                    setUsers(prev => [...prev, ...responce.data.users]); 
                }
                setTotalPages(responce.data.total_pages);
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const getToken = async () => {
        try {
            const responce = await axios.get(API_TOKEN);
            setToken(responce.data.token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UsersContext.Provider 
            value={{ 
                users, 
                loading, 
                getUsers, 
                totalPages, 
                token, 
                getToken 
            }}
        >
          {children}
        </UsersContext.Provider>
      );
}

export default UserProvider;