
import React from 'react'

import { SiFurrynetwork } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full h-16 bg-[#1b1f23] flex items-center justify-center rounded-t-xl mx-2'>
      <div className="text-white text-center text-sm flex items-center justify-center gap-4">
        <SiFurrynetwork className='size-4 animate-spin' />
        <p className='text-base font-medium opacity-75'>Panda Pruductions</p>
      </div>
    </div>
  );
}

export default Footer