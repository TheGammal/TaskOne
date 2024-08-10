import React from 'react'

export default function About() {
    return (
        <div className='bg-[#1abc9c] p-6 absolute top-[68px] z-0 left-0 w-full flex flex-col justify-center text-white min-h-screen'>
            <div className='text-center -mt-60'>
                <h2 className='text-4xl font-bold mb-4'>ABOUT COMPONENT</h2>
                <div className='flex justify-center items-center w-full mb-4'>
                    <div className='w-1/12 border-t-4 border-white'></div>
                    <i className='fa-solid fa-star mx-2 text-white'></i>
                    <div className='w-1/12 border-t-4 border-white'></div>
                </div>
            </div>
            <div className='flex w-full text-left px-12'>
                <p className='pl-12 pr-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='pl-12 pr-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    )
}