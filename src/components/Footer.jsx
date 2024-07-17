import React from 'react'

const Footer = () => {
  return (
    <div className='w-full p-10 h-72 bg-black text-white'>
      <div className='flex space-x-32 place-content-around'>
            <ul className='flex space-x-10 text-xl cursor-pointer'>
                <li className='hover:text-green'>Home</li>
                <li className='hover:text-green'>About Us</li>
                <li className='hover:text-green'>Initiatives</li>
                <li className='hover:text-green'>Contact</li>
            </ul>
      </div>
    </div>
  )
}

export default Footer
