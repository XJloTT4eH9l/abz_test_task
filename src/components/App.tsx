import { useState } from 'react';
import { IUser } from '../types/IUser';

import UserProvider from '../context/usersContext';


import Header from './Header';
import Hero from './Hero';
import Users from './Users';
import SignUp from './SignUp';

import '../styles/index.scss';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <>
    <UserProvider>
      <Header />
      <main>
        <Hero />
        <Users />
        <SignUp />
      </main>
    </UserProvider>
    </>
  )
}

export default App
