import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdExplicit } from 'react-icons/md';
import { MdAddToPhotos } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { login, logout, onUserStateChange } from './../api/firebase';
import User from './User';
import Button from './ui/Button';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(user => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <header className='flex flex-col content-center'>
      <Link
        to='/'
        className='flex items-center content-center bg-brand text-5xl text-white font-bold py-8 pr-3'
      >
        <MdExplicit />
        <h1>EDITORIAL</h1>
      </Link>
      <nav className='flex justify-between items-center gap-4 border-b border-brand text-black font-semibold p-4 pr-5'>
        <Link to='/products'>Products</Link>
        <div className='flex flex-row gap-4 items-center'>
          <Link to='/carts' className='text-2xl flex'>
            <IoBagHandleOutline />
          </Link>
          {user && user.isAdmin && (
            <Link to='/products/new' className='text-2xl flex'>
              <MdAddToPhotos />
            </Link>
          )}
          {user && <User user={user} />}
          {!user && <Button text={'Login'} onClick={login} />}
          {user && <Button text={'Logout'} onClick={logout} />}
        </div>
      </nav>
    </header>
  );
}
