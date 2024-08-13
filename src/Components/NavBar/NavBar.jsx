import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(0)

    function handleNavBar() {
        setIsOpen(!isOpen)
    }

    window.addEventListener("scroll", () => {
        setScroll(window.scrollY)        
    })
    return (
        <nav className={`${scroll > 50 ? "py-3 px-6" : "py-6 px-6"} transition-all duration-300 bg-[#2c3e50] fixed z-10 left-0 right-0`}>
            <div className='container mx-auto flex flex-wrap justify-between items-center p-3'> {/*flex-wrap >> Because The Bar Put w-dvw */}
                <div className='text-white text-lg font-bold'>
                    <NavLink to={'/'} className='text-white text-lg font-bold' >START FRAMEWORK </NavLink>
                </div>
                <button className='sm:hidden' onClick={handleNavBar}>
                    <i className='fa-solid fa-bars'></i>
                </button>
                <div className={`sm:block ${isOpen ? 'w-dvw sm:w-auto flex flex-col items-start' : 'hidden'}`}>
                    <NavLink to={'About'} className={
                        ({isActive}) => isActive ? 'text-white font-bold bg-teal-500 rounded-md px-1 py-1' : 'text-white font-bold px-1 py-1'} >About</NavLink> {/* OR But Active Class In CSS Page */}
                    <NavLink to={'Portfolio'} className={
                        ({isActive}) => isActive ? 'text-white font-bold bg-teal-500 rounded-md px-1 py-1' : 'text-white font-bold px-1 py-1'}>Portfolio</NavLink>
                    <NavLink to={'Contact'} className={
                        ({isActive}) => isActive ? 'text-white font-bold bg-teal-500 rounded-md px-1 py-1' : 'text-white font-bold px-1 py-1'}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );
}