import React from 'react';

const Skeleton = () => {
  return (
    <main className='flex justify-center items-center gap-4 flex-col w-full h-full'>
      <div className='skeleton-row'></div>
      <div className='skeleton-row'></div>
      <div className='skeleton-row'></div>
      <div className='skeleton-row'></div>
      <div className='skeleton-row'></div>
      <div className='skeleton-row'></div>
    </main>
  );
};

export default Skeleton;
