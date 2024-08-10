import React from 'react'
import image from '../../assets/images/avataaars.svg'

export default function Framwork() {
    return (
        <div className='bg-[#1abc9c] p-6 absolute top-[68px] z-0 left-0 w-full flex justify-center text-white min-h-screen'>
            <div className='text-center mt-16 mb-56 flex flex-col items-center'>
                <img src={image} alt="" className='w-80'/>
                <h2 className='text-4xl font-bold mt-5 mb-4'>START FRAMEWORK</h2>
                <div className='flex justify-center items-center w-full '>
                    <div className='w-1/4 border-t-4 border-white'></div>
                    <i className='fa-solid fa-star mx-2 text-white'></i>
                    <div className='w-1/4 border-t-4 border-white'></div>
                </div>
                <div className='mt-4'>Graphic Artist - Web Designer - Illustrator</div>
                
            </div>
        </div>
    )
}