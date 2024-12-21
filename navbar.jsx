import React, { useState, useEffect } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { VscMenu } from 'react-icons/vsc';

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`fixed top-0 w-full z-10 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="navbar flex justify-between items-center h-24 px-6 md:px-20">
        <div>
          <div className="uppercase">
            <a className="text-2xl font-bold font-heading" href="/">
              <img className="" src="" alt="" />
              <span className='tracking-wide font-sans text-orange-600'>Dhiraj Sharma</span>
            </a>
          </div>
        </div>
        <div className='flex'>
          <div className="hidden lg:flex">
            <ul className="navbar px-4 flex items-center justify-center font-semibold font-heading uppercase cursor-pointer" id="navbar-links">
              <li><a className="hover:text-orange-600 font-bold text-base p-5 hover:border-2 hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border-b-orange-600" href="/#home">Home</a></li>
              <li><a className="hover:text-orange-600 font-bold text-base p-5 hover:border-2 hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border-b-orange-600" href="/#about">About</a></li>
              <li><a className="hover:text-orange-600 font-bold text-base p-5 hover:border-2 hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border-b-orange-600" href="/#project">Project</a></li>
              <li><a className="hover:text-orange-600 font-bold text-base p-5 hover:border-2 hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border-b-orange-600" href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div className='flex gap-4'>
            <span className='flex items-center justify-center'>
              <MdDarkMode 
                className='font-bold text-xl flex cursor-pointer' 
                onClick={toggleDarkMode} 
              />
            </span>
            <span className='lg:hidden' onClick={toggleNavbar}>
              <VscMenu className='text-3xl font-extrabold cursor-pointer' />
            </span>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isNavbarVisible ? '' : 'hidden'} transition-all duration-200`}>
        <ul className="navbar px-4 text-center flex flex-col gap-2 lg:flex font-semibold font-heading uppercase pb-4" id="navbar-links">
          <li><a className="hover:text-orange-600 font-bold text-base p-5 " href="/#home">Home</a></li>
          <li><a className="hover:text-orange-600 font-bold text-base p-5 " href="/#about">About</a></li>
          <li><a className="hover:text-orange-600 font-bold text-base p-5 " href="/#project">Project</a></li>
          <li><a className="hover:text-orange-600 font-bold text-base p-5 " href="/#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
