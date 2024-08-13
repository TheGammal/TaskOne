import React from 'react'

export default function About() {
    return (
        <div className='bg-[#1abc9c] min-h-screen text-white flex justify-center items-center'>
            <div className="container mx-auto px-24">
                <div className='text-center'>
                    <h2 className='text-4xl font-bold mb-4'>ABOUT COMPONENT</h2>
                    <div className='flex justify-center items-center mb-4'>
                        <div className='w-20 border-t-4 border-white'></div>
                        <i className='fa-solid fa-star mx-2 text-white'></i>
                        <div className='w-20 border-t-4 border-white'></div>
                    </div>
                </div>
                <div className='flex text-left px-12'>
                    <p className='pl-12 pr-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='pl-12 pr-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    )
}