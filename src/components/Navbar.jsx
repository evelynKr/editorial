import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdExplicit } from 'react-icons/md';
import { MdAddToPhotos } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { login, logout, onUserStateChange } from './../api/firebase';
import User from './User';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);
  return (
    <header className='flex flex-col content-center'>
      <Link
        to='/'
        className='flex items-center content-center text-5xl text-black font-bold my-8 pr-3'
      >
        <MdExplicit />
        <h1>EDITORIAL</h1>
      </Link>
      <nav className='flex justify-between items-center gap-4 bg-black text-white font-semibold p-4 pr-5'>
        <Link to='/products'>Products</Link>
        <div className='flex flex-row gap-4 items-center'>
          <Link to='/carts' className='text-2xl flex'>
            <IoBagHandleOutline />
          </Link>
          <Link to='/products/new' className='text-2xl flex'>
            <MdAddToPhotos />
          </Link>
          {user && <User user={user} />}
          {!user && <button onClick={login}>Log in</button>}
          {user && <button onClick={logout}>Log out</button>}
        </div>
      </nav>
    </header>
  );
}
