import React from 'react';
import { Link } from 'react-router-dom';
import { MdExplicit } from 'react-icons/md';
import { MdAddToPhotos } from 'react-icons/md';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <MdExplicit />
        <h1>EDITORIAL</h1>
      </Link>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>
          <MdAddToPhotos />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
