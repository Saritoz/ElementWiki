import React from "react";

const Subtitle = ({ children }) => {
  return (
    <div className='relative mb-5 w-max text-xl font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-blue-1 after:content-[""] md:text-2xl'>
      {children}
    </div>
  );
};

export default Subtitle;
