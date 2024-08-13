import React from 'react'
import image from '../../assets/images/avataaars.svg'

export default function Framwork() {
    return (
        <div className='bg-[#1abc9c] pt-24 min-h-screen text-white'>
            <div className='container mx-auto pt-20 flex flex-col items-center'>
                <img src={image} alt="" className='w-[250px]'/>
                <h2 className='text-4xl font-bold mt-5 mb-4'>START FRAMEWORK</h2>
                <div className='flex items-center'>
                    <div className='w-20 border-t-4 border-white'></div>
                    <i className='fa-solid fa-star mx-2'></i>
                    <div className='w-20 border-t-4 border-white'></div>
                </div>
                <div className='mt-4'>Graphic Artist - Web Designer - Illustrator</div>
                
            </div>
        </div>
    )
}