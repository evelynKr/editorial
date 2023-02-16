import React from 'react';
import { Link } from 'react-router-dom';
import { MdExplicit } from 'react-icons/md';
import { MdAddToPhotos } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import User from './User';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
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
          {user && (
            <Link to='/carts' className='text-2xl flex'>
              <IoBagHandleOutline />
            </Link>
          )}
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
