import React, { useEffect, useState } from 'react'

import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
const Hero = () => {
    const imageData = [
        {
            url: "/src/assets/pexels-jane-doan-1099680.jpg"
        },
        {
            url: "src/assets/zomato1.avif"
        },
        {
            url: "/src/assets/ram.jpeg"
        }
    ]

    const [slider, setSlider] = useState(0)

    const handelminus = () => {
        setSlider(slider === 0 ? imageData.length - 1 : slider - 1)
    }
    const handelplus = () => {
        setSlider(slider === imageData.length - 1 ? 0 : slider + 1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            handelplus();
        }, 2000)
        return () => {
            clearInterval(timer)
        }
    }, [slider])
    return (
        <div className='mt-[100px]'>
            <div className='w-[90%] mx-auto h-[80vh] my-5 relative' >
                {
                    imageData.map((item, i) => (
                        <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
                            <img
                                src={item.url}
                                className='w-full h-[80vh] rounded-2xl object-cover '
                            />
                        </div>
                    ))}

                <div className='w-full mx-auto h-[80vh] bg-black opacity-10 absolute top-0 left-0 rounded-2xl' ></div>
                <div className=' flex justify-center w-full text-[20px] md:text-[30px] absolute top-[50%] text-white  text-center font-semibold'>
                    <p className=' '>Welcome to the World of Testy & Fresh Food My<span className='text-[#e67e22]'>Hotel</span></p>
                </div>

                <div className='flex justify-between w-full px-5  absolute top-[50%] text-white' >
                    <FaAngleDoubleLeft size={30} className='cursor-pointer ' onClick={handelminus} />
                    <FaAngleDoubleRight size={30} className='cursor-pointer' onClick={handelplus} />

                </div>
            </div>
        </div>
    )
}

export default Hero