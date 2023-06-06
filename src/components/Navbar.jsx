import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    
    <div  className = "border flex items-center space-x-2  pl-12 py-2">
    <img src={Logo} className='w-[70px] h-[50px]' alt='q'/>
    <h3 className='font-bold  text-xl   text-blue-400'> Movies </h3>
    <h3 className='font-bold   text-xl   text-blue-400'> Favorites</h3>
    </div>
  );
};

export default Navbar ; 