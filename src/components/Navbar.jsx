import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import { GrMenu, GrClose } from 'react-icons/gr';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);

  return (
    <nav className="relative flex items-center justify-between bg-white px-6 pt-12 pb-6 md:gap-10 lg:px-24">
      <div>
        <img src={Logo} alt="Shortly Logo" />
      </div>
      {/* Navigation Links Desktop */}
      <ul className="mr-auto hidden  items-center gap-6 md:flex">
        <li className="cursor-pointer font-semibold text-grayishViolet transition-all duration-200 ease-in-out hover:text-black">
          Features
        </li>
        <li className="cursor-pointer font-semibold text-grayishViolet transition-all duration-200 ease-in-out hover:text-black">
          Pricing
        </li>
        <li className="cursor-pointer font-semibold text-grayishViolet transition-all duration-200 ease-in-out hover:text-black">
          Resources
        </li>
      </ul>
      <ul className="hidden items-center gap-6 md:flex">
        <li className="cursor-pointer font-semibold text-grayishViolet transition-all duration-200 ease-in-out hover:text-black">
          Login
        </li>
        <li>
          <button className="my-4 cursor-pointer rounded-full bg-cyanClr px-6 py-2 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-btnHover">
            Sign Up
          </button>
        </li>
      </ul>
      {/* Navigation Links Mobile */}
      {openMenu && (
        <ul className="absolute top-[100px] left-0 right-0 mx-6 flex flex-col items-center justify-between gap-6 rounded-xl bg-darkViolet px-10 py-12 text-white">
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-cyanClr">
            Features
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-cyanClr">
            Pricing
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-cyanClr">
            Resources
          </li>
          <li className="h-1 w-full border-b border-grayClr opacity-40"></li>
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-cyanClr">
            Login
          </li>
          <li className="w-full">
            <button className="w-full cursor-pointer rounded-full bg-cyanClr py-3 text-white transition-all duration-200 ease-in-out hover:bg-btnHover">
              Sign Up
            </button>
          </li>
        </ul>
      )}
      {/* Hamburger Menu */}
      <div
        onClick={handleClick}
        className="cursor-pointer md:hidden md:bg-cyan-600"
      >
        {!openMenu ? <GrMenu size={32} /> : <GrClose size={32} />}
      </div>
    </nav>
  );
}

export default Navbar;
