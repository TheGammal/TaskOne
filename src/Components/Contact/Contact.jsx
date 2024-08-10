import React, { useState } from 'react'
import style from './contact.module.css' /*هونيييييك */

export default function Contact() {
    const [isFocus, setIsFocus] = useState({
        name: false,
        age: false,
        email: false,
        pass: false,
    })
    function change (e) {
        setIsFocus({...isFocus, [e.target.name]: true});
        console.log(e.target.name);
        
    }
    return (
        <div className='bg-white p-6 absolute top-[68px] z-0 left-0 w-full flex flex-col justify-center items-center text-[#2c3e50] min-h-screen'>
            <div className='container text-center mt-20'>
                <h2 className='text-4xl font-bold mb-4'>CONTACT SECTION</h2>
                <div className='flex justify-center items-center w-full mb-4'>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                    <i className='fa-solid fa-star mx-2 text-[#2c3e50]'></i>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <form className="bg-white p-6 rounded w-2/3 text-start mb-72">
                    <div className='relative'>
                        <input type="text" id='name' name='name' onInput={change} placeholder='userName' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                        <label htmlFor="name" className={`${style.label} ${isFocus.name ? style.goUp : ''}`}>userName :</label>
                    </div>
                    <div className='relative'>
                        <input type="number" id='age' name='age' onInput={change} placeholder='userAge' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                        <label htmlFor="age" className={`${style.label} ${isFocus.age ? style.goUp : ''}`}>userAge :</label>
                    </div>
                    <div className='relative'>
                        <input type="email" id='email' name='email' onInput={change} placeholder='userEmail' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                        <label htmlFor="email" className={`${style.label} ${isFocus.email ? style.goUp : ''}`}>userEmail :</label>
                    </div>
                    <div className='relative'>
                        <input type="password" id='password' name='pass' onInput={change} placeholder='userPassword' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                        <label htmlFor="password" className={`${style.label} ${isFocus.pass ? style.goUp : ''}`}>userPassword :</label>
                    </div>                    

                    <button type="submit" onClick={(e) => e.preventDefault()} className='py-2 px-4 bg-[#1abc9c] text-white font-light rounded-md shadow-sm'>send Message</button>
                </form>
            </div>
        </div>
    )
}