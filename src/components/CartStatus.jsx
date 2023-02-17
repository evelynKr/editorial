import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { getCart } from '../api/firebase';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  return (
    <div className='relative text-4xl'>
      CART
      {products && (
        <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
