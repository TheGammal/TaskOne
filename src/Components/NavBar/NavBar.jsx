import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='bg-[#2c3e50] p-6 fixed z-10 top-0 left-0 w-full'>
            <div className='container mx-auto flex justify-between items-center p-3'>
                <div className='text-white text-lg font-bold'>
                    <NavLink to={'/'} className='text-white text-lg font-bold' >START FRAMEWORK </NavLink>
                </div>
                <div className='space-x-4'>
                    <NavLink to={'About'} className={
                        ({isActive}) => isActive ? 'text-white font-bold bg-teal-500 rounded-md px-1 py-1' : 'text-white font-bold px-1 py-1'} >About</NavLink>
                    <NavLink to={'Portfolio'} className={
                        ({isActive}) => isActive ? 'text-white font-bold bg-teal-500 rounded-md px-1 py-1' : 'text-white font-bold px-1 py-1'}>Portfolio</NavLink>
                    <NavLink to={'Contact'} className={
                        ({isActive}) => isActive ? 'text-white font-bold bg-teal-500 rounded-md px-1 py-1' : 'text-white font-bold px-1 py-1'}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );
}