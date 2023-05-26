import { FC, useState, useEffect, useContext } from 'react';
import { IUsersContext } from '../types/IUser';
import { UsersContext } from '../context/usersContext';

import User from './User';
import Preloader from './Preloader';
import UIButton from './UI/UIButton';

import '../styles/components/user.scss';

const Users:FC = () => {
    const { users, getUsers, loading, totalPages } = useContext(UsersContext) as IUsersContext;
    const [page, setPage] = useState<number>(1);

    const showMore = () => {
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        getUsers(page, false);
    }, [page])

    return (
        <section className="users" id='users'>
            <div className="container">
                <h2 className="title users__title">Working with GET request</h2>
                <ul className="users__list">
                    {users?.map(user => (
                       <User
                            key={user.id}
                            id={user.id} 
                            name={user.name}
                            photo={user.photo}
                            phone={user.phone}
                            email={user.email}
                            position={user.position}
                       />
                    ))}
                </ul>
                {loading && <Preloader />}
                {page < totalPages && <UIButton title='Show more' type='button' href='' handleClick={showMore} />}
            </div>
        </section>
    )
}

export default Users;

// const getUsers = async () => {
    //     try {
    //         setLoading(true);
    //         const responce = await axios.get(API_USERS + `?page=${page}&count=${usersPerPage}`);
    //         if(responce.status === 200) {
    //             setPage(prev => prev + 1);
    //             setUsers(prev => [...prev, ...responce.data.users]);
    //             setTotalPages(responce.data.total_pages);
    //         }
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }