import React from 'react'
import { BsBag } from "react-icons/bs";

function Button({children}) {
  return (
    <button className='bg-sky-600 p-3 rounded-md text-white font-bold md:w-[200px] w-full flex items-center justify-center space-x-2'><BsBag/><span>{children}</span></button>
  )
}

export default Button