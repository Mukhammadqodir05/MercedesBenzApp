import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '/src/assets/logo.png';
import { FaBars, FaTimes  } from 'react-icons/fa';

const Navbar = () => {
  const [isClickOpen, setIsClickOpen] = useState(false);

  const handleMenuClick = () => {
    setIsClickOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    window.location.reload();
    window.location.href = '/';
  };

  return (
    <nav className='fixed flex justify-between items-center w-full h-[100px] px-4 md:px-8'>
      <div onClick={handleLogoClick}>
        <img src={logo} alt='Tesla Logo' className='h-20 cursor-pointer' />
      </div>

        <ul className='hidden md:flex space-x-6'>
            <li className='font-medium font-serif cursor-pointer'>
                <Link to='main'>C Class Sedan</Link>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <Link to='eClass'>E Class Sedan</Link>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <Link to='eClassWagon'>E Class Wagon</Link>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <Link to='EQS'>EQS Sedan</Link>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <Link to='maybach'>Maybach Sedan</Link>
            </li>
        </ul>

      <div className='flex items-center mt-[-20px]'>
          <button className='hidden md:flex'>Pricing</button>
        
        <div
          className='md:hidden cursor-pointer text-4xl'
          onClick={handleMenuClick}
        >
          {!isClickOpen ? <FaBars className='text-3xl text-white' /> : ''}
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
                <li className='font-medium font-serif cursor-pointer'>
                    <Link onClick={handleMenuClick} to='main'>C Class Sedan</Link>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <Link onClick={handleMenuClick} to='eClass'>E Class Sedan</Link>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <Link onClick={handleMenuClick} to='eClassWagon'>E Class Wagon</Link>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <Link onClick={handleMenuClick} to='EQS'>EQS Sedan</Link>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <Link onClick={handleMenuClick} to='maybach'>Maybach Sedan</Link>
                </li>

                <li className='font-medium font-serif cursor-pointer'>Pricing</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
