import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="item-center justify-center flex font-bold">
            <p className='blue-gradient_text'>HOME</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <a
                href="https://yasithsfonseka.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
                >
                Portfolio
            </a>
            <a
                href="https://nanotechsw.blogspot.com/"
                target="_blank"
                rel="noreferrer"
                className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
                >
                My Blog
            </a>
            
        </nav>
    </header>
  )
}

export default Navbar