import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div  className = "border flex items-center space-x-2  pl-12 py-2">
    <img src={Logo} className='w-[70px] h-[50px]' alt='q'/>
    <Link to ="/" className='font-bold  text-xl   text-blue-400'> Movies  </Link>
    <Link to = "/fav" className='font-bold   text-xl   text-blue-400'> Favorites </Link>
    </div>
  );
};

export default Navbar ; 