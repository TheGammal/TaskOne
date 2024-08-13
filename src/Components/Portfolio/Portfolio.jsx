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
        <div className='bg-white pt-16 text-[#2c3e50] flex flex-col items-center min-h-screen'>
            <div className='container mx-auto text-center pt-20'>
                <h2 className='text-4xl font-bold mb-4'>PORTFOLIO COMPONENT</h2>
                <div className='flex justify-center items-center'>
                    <div className='w-20 border-t-4 border-[#2c3e50]'></div>
                    <i className='fa-solid fa-star mx-2 text-[#2c3e50]'></i>
                    <div className='w-20 border-t-4 border-[#2c3e50]'></div>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-3 py-3 lg:px-12' onClick={handleIsOpen}>
                {/* {images.map((images, index) => (
                    <div key={index} className='flex items-center justify-center p-3'>
                        <img src={images.src} className=' rounded-lg' />
                    </div>

                ))} */}
                {allImg.map((ele, index) => (
                    <div key={index} className='p-3'>
                        <img src={ele} className=' rounded-lg' />
                    </div>

                ))}
            </div>
            {/* هونيييييك */}
            {isOpen && (
                <div className='fixed inset-0 bg-slate-400 flex items-center justify-center'>
                    <div className='bg-transparent p-3 flex justify-center'>
                        <button onClick={handlePrevious}>⏪</button>
                        <img src={allImg[currentIndex]} alt="" className='w-2/3 ' />
                        <button onClick={handleNext}>⏩</button>
                    </div>
                    <button onClick={closeModal} className='absolute start-3 top-28 rounded-full bg-fuchsia-700 w-6'>X</button>
                    
                </div>
            )}

            
        </div>
    )
}