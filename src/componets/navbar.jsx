import React, { useState } from 'react';
import logo from '/src/assets/logo.png';
import { FaBars, FaTimes  } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickOpen, setIsClickOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  const handleMenuClick = () => {
    setIsClickOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    window.location.reload();
    window.location.href = '/';
  };

  return (
    <nav className='fixed flex justify-between  items-center w-full h-[100px] px-4 md:px-8'>
      <div onClick={handleLogoClick}>
        <img src={logo} alt='Tesla Logo' className='h-20 cursor-pointer' />
      </div>

      <div className='flex items-center '>
        <ul className='hidden md:flex  space-x-6 '>
          <li className='hover:text-gray-400'>Vehicles</li>
          <li className='hover:text-gray-400'>Vehicles</li>
          <li className='hover:text-gray-400'>Vehicles</li>
        </ul>
      </div>

      <div className='flex items-center'>
        <ul className='hidden md:flex space-x-6'>
          <li>Shop</li>
          <li>Account</li>
          <li>
            <button className='focus:outline-none ' onClick={handleMenuClick}>
              <FaBars />
            </button>
          </li>
        </ul>

        <div
          className='md:hidden cursor-pointer text-4xl '
          onClick={handleMenuClick}
        >
          {!isClickOpen ? <FaBars className='text-3xl' /> : ''}
        </div>

        {isClickOpen && (
          <div className='menu absolute md:hidden z-20 h-[400px] top-[0px] left-0 w-full navbar text-white py-4'>
            <div
              className='md:hidden cursor-pointer p-2 px-4 absolute z-10 text-4xl'
              onClick={handleMenuClick}
            >
              {isClickOpen ? (
                <FaTimes className='text-3xl text-white' />
              ) : (
                ''
              )}
            </div>

            <ul className='p-12 py-16 space-y-5'>
              <li>Model S</li>
              <li>Model 3</li>
              <li>Model X</li>
              <li>Model Y</li>
              <li>Energy</li>
              <li>Shop</li>
              <li>Account</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
