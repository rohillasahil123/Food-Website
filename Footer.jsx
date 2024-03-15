import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook ,FaWhatsapp ,FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='w-full bg-black text-white'>
            <div className='grid grid-cols-2  md:grid-cols-4 py-10 pl-6 ' >
                <div >
                    <h1 className='font-bold mb-3 text-[20px] md:text-[30px]' >My <span className='text-[#e67e22]'>Hotel</span></h1>
                    <p className='text-[15px] md:text-[20px] text-gray-300' >©2024 food technologies Pvt. Ltd</p>
                    <div className='flex mx-3 gap-3 p-[20px] h-[30px]'>
                    <p className='h-[50] w-[20px]'><FaInstagram /></p>
                    <p className='h-[30px] w-[20px]' ><FaFacebook /></p>
                    <p className='h-[30px] w-[20px]' ><FaWhatsapp /></p>
                    <p className='h-[30px] w-[20px]' ><FaTwitterSquare /></p>
                    </div>  
                </div>
                <div>
                    <h2 className=' mb-3 text-[20px] md:text-[25px]' > Company</h2>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]' >About</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Careers</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]' >Teams</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]' >My Hotel One</p>
                </div>
                <div>
                    <h2  className=' mb-3 text-[20px] md:text-[25px]'>Help and support</h2>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]' >Company</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Partner with Us</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Ride With us</p>
                </div>
                <div>
                    <h2  className=' mb-3 text-[20px] md:text-[25px]'>We deliver to:</h2>
                    <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]'>Bangalore</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Delhi</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Gurugram</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Pune</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Mumbai</p>
                </div>
            </div>
        </div>
    )
}

export default Footer