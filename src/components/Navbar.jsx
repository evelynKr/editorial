import React from 'react';
import { Link } from 'react-router-dom';
import { MdExplicit } from 'react-icons/md';
import { MdAddToPhotos } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';

export default function Navbar() {
  return (
    <header className='flex flex-col'>
      <Link
        to='/'
        className='flex items-center text-5xl text-black font-bold my-8 pr-3'
      >
        <MdExplicit />
        <h1>EDITORIAL</h1>
      </Link>
      <nav className='flex justify-between gap-4 bg-black text-white font-semibold p-4 pr-5'>
        <Link to='/products'>Products</Link>
        <div className='flex flex-row gap-4'>
          <Link to='/carts' className='text-2xl flex justify-end'>
            <IoBagHandleOutline />
          </Link>
          <Link to='/products/new' className='text-2xl flex justify-end'>
            <MdAddToPhotos />
          </Link>
          <button>Log in</button>
        </div>
      </nav>
    </header>
  );
}
