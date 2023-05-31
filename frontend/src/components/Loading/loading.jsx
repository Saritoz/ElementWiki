import React from 'react'

const Loading = () => {
  return (
    <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center z-[100] bg-blue-4 bg-opacity-50 text-white'>
      <div className='relative w-[125px] h-[100px]'>
        <i className="fa-solid fa-gear absolute top-[30px] left-[35px] text-3xl animate-spin"></i>
        <i className="fa-solid fa-gear absolute top-[50px] right-[35px] text-3xl animate-spin"></i>
        <p className='text-center text-xl'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading