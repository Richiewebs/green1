import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex space-x-20 bg-white shadow p-10 text-xl'>
      <div className='flex w-3/4 space-x-48'>
      <ul className='flex space-x-20 cursor-pointer'>
        <li className='hover:text-green'>Home</li>
        <li className='hover:text-green'>About</li>
        <li className='hover:text-green'>Initiatives</li>
      </ul>
      </div>
      <div className='-mt-5 sm:hidden'>
        <Button></Button>
      </div>
    </div>
  )
}

export default Navbar
