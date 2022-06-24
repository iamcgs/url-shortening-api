import React from 'react';
import Navbar from './Navbar';
// import Illustration from '../images/illustration-working.svg';

function Header() {
  return (
    <header className="px-12">
      <Navbar />
      <section className="flex flex-col items-center bg-white lg:flex-row">
        <div className="flex-2 mx-auto h-screen w-full bg-hero bg-cover md:order-2"></div>
        <div className="flex flex-col items-center justify-between gap-4 py-10 px-6 text-center md:order-1">
          <h2 className="text-4xl font-bold text-darkViolet lg:text-left lg:text-5xl">
            More than just shorter links
          </h2>
          <p className="text-lg text-grayishViolet lg:text-left">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn transition-all duration-200 ease-in-out hover:bg-btnHover lg:mr-auto">
            Get Started
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
