import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-14'>
        <div className='font-bold cursor-pointer'>Creatora</div>
        <ul className='flex gap-10 cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
