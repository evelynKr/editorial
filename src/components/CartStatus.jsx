import React from 'react';
import useCart from '../hooks/useCart';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className='flex relative'>
      <AiOutlineShoppingCart className='text-3xl' />
      {products && (
        <p className='flex place-content-center items-center w-5 h-5 text-center text-sm bg-brand text-white font-bold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
