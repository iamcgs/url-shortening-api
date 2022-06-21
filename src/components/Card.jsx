import React from 'react';

function Card({ children }) {
  return (
    <div className="relative mx-auto h-[250px] max-w-[400px] rounded-lg bg-white p-8 text-center xl:w-[350px] xl:py-12 xl:text-left">
      {children}
    </div>
  );
}

export default Card;
