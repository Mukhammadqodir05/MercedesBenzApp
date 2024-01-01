import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  return (
    <main className='flex w-full h-[100px] bg-black'>
      <div className='relative flex justify-center items-center'>
        <div>
          <button onMouseEnter={handleHover}>
            Vehicles ⤵️
          </button>
        </div>
        {isOpen && (
          <ul
            className=' dropdown h-[400px] w-[400px]'
            onMouseLeave={handleLeave}
          >
            <li>Sedans & Wagons</li>
            <li>SUVs</li>
            <li>Convertibles & Roadsters</li>
          </ul>
        )}
      </div>
    </main>
  );
};

export default Navbar;
