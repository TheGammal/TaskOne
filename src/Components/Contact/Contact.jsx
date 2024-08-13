import React, { useState } from 'react'
import style from './contact.module.css' /*هونيييييك */
import SectionHeader from '../SectionHeader/SectionHeader';

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
        <div className='bg-white pt-16 text-[#2c3e50] min-h-screen'>
            <div className='container mx-auto text-center pt-20'>
                {/* With Props */}
            {/* <SectionHeader title="CONTACT SECTION" /> /*DYR/ */}
                {/* With Children */}
            {/* <SectionHeader>CONTACT SECTION</SectionHeader> /*DYR/ */}

                <h2 className='text-4xl font-bold mb-4'>CONTACT SECTION</h2>
                
                <div className='flex justify-center items-center mb-4'>
                    <div className='w-20 border-t-4 border-[#2c3e50]'></div>
                    <i className='fa-solid fa-star mx-2 text-[#2c3e50]'></i>
                    <div className='w-20 border-t-4 border-[#2c3e50]'></div>
                </div>
            
                <div className="flex justify-center">
                    <form className="bg-white p-6 rounded w-1/2 text-start">
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
        </div>
    )
}