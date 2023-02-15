import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg-black-900 relative'>
      <div className='w-full h-full bg-cover bg-banner bg-bottom opacity-80' />
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl'>NEW ARRIVALS ADDED</h2>
        <p className='text-2xl'>15% OFF ENTIRE SITE USE CODE FEB15</p>
      </div>
    </section>
  );
}
