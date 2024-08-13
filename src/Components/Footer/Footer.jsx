import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className='bg-[#2c3e50] text-white'>
            <div className='container mx-auto'>
                <div className='flex justify-between p-8'>
                    <div className='w-1/3 text-center space-y-2'>
                        <h3 className='text-lg font-bold'>LOCATION</h3>
                        <div>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className='w-1/3 text-center space-y-2'>
                        <h3 className='text-lg font-bold'>AROUND THE WEB</h3>
                        <div className='space-x-4'>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-linkedin-in'></i>
                            <i className='fas fa-globe'></i>
                        </div>
                    </div>
                    <div className='w-1/3 text-center space-y-2'>
                        <h3 className='text-lg font-bold'>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div> 
            </div>
            <div className='bg-[#1a252f]'>
                <div className='container mx-auto py-4 text-center'>
                    Copyright © Your Website 2021
                </div>
            </div>
        </footer>
        </>
    )
}