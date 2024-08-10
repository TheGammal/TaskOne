import React, { useState } from 'react'
import port1 from '../../assets/images/port1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'

export default function Portfolio() {
    // const [images, setImages] = useState([
    //     { src: port1 },
    //     { src: port2 },
    //     { src: port3 },
    //     { src: port1 },
    //     { src: port2 },
    //     { src: port3 },
    // ]);
    const allImg = [port1, port2, port3, port1, port2, port3]
    // هونيييييك
    const [isOpen, setIsOpen] = useState(false);
    //Handle isOpen
    function handleIsOpen () {
        setIsOpen(true);
    }
    //Close modal
    function closeModal () {
        setIsOpen(false);
    }
    const [currentIndex, setCurrentIndex] = useState(1)
    //Handle Next element
    function handleNext () {
        setCurrentIndex((index) => index < allImg.length - 1 ? index + 1 : 0)
    }
    //Handle Previous element
    function handlePrevious () {
        setCurrentIndex((a) => a > 0 ? a - 1 : allImg.length - 1 /*Or 5*/)
    }
    return (
        <div className='bg-white p-6 absolute top-[68px] z-0 left-0 w-full flex flex-col justify-center items-center text-[#2c3e50] min-h-screen'>
            <div className='container text-center mt-20'>
                <h2 className='text-4xl font-bold mb-4'>PORTFOLIO COMPONENT</h2>
                <div className='flex justify-center items-center w-full mb-4'>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                    <i className='fa-solid fa-star mx-2 text-[#2c3e50]'></i>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                </div>
            </div>
            <div className='container grid grid-cols-3 gap-4 p-14 mb-56' onClick={handleIsOpen}>
                {/* {images.map((images, index) => (
                    <div key={index} className='flex items-center justify-center p-3'>
                        <img src={images.src} className=' rounded-lg' />
                    </div>

                ))} */}
                {allImg.map((ele, index) => (
                    <div key={index} className='flex items-center justify-center p-3'>
                        <img src={ele} className=' rounded-lg' />
                    </div>

                ))}
            </div>
            {/* هونيييييك */}
            {isOpen && (
                <div className='fixed inset-0 bg-slate-400 flex items-center justify-center'>
                    <div className='bg-red-700 p-3 flex'>
                        <button onClick={handlePrevious}>⏪</button>
                        <img src={allImg[currentIndex]} alt="" />
                        <button onClick={handleNext}>⏩</button>
                    </div>
                    <button onClick={closeModal} className='absolute start-3 top-28 rounded-full bg-fuchsia-700'>
                    x
                    </button>
                    
                </div>
            )}

            
        </div>
    )
}