import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Header = ({num}) => {
    const [sidenav, setSidenav] = useState(false)
    console.log(sidenav)

 
    // Iska ek or method hai or nicha hai mtlb hm isko ek trike se or likh skte hai
    //  const handelchange =()=>{
    //     setSidenav(!sidenav)
    //     console.log(sidenav)
    //  }


    return (
        <div className='fixed z-50 w-full bg-white top-0 left-0'  >
            <div className=' flex justify-between py-[15px] px-[20px] text-[18px] font-semibold border-b relative  '>
                <div className='cursur-pointer'>
                    {/* <Link to='/'> */}
                        <p>Rohilla<span className='text-[#e67e22]'>Hotel</span></p>
                    {/* </Link> */}
                </div>

                <div>
                    <ul className='sm:flex gap-4 hidden cursor-pointer '>
                        <Link to='/'>
                            <li className='hover:text-[#e67e22]' >Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='hover:text-[#e67e22]' >About Us</li>
                        </Link>
                        <Link to='/ourfood'>
                            <li className='hover:text-[#e67e22]' >Our-Food</li>
                        </Link>
                        <Link to='/signup'>
                            <li className='hover:text-[#e67e22]' >Sign IN</li>
                        </Link>
                    </ul>
                </div>
                {
                    sidenav ? (<div className='bg-[#ecf0f1] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center ' >
                        <RxCross2
                            className='absolute top-[5px] right-3 w-[30px] h-[30px]'
                            onClick={() => setSidenav(!sidenav)}
                        />

                        <ul className='flex gap-12    cursor-pointer flex-col '>

                            <Link to='/'>
                                <li className='hover:text-[#e67e22]' onClick={() => setSidenav(!sidenav)} >Home</li>
                            </Link>
                            <Link to='/about'>
                                <li className='hover:text-[#e67e22]' onClick={() => setSidenav(!sidenav)} >About Us</li>
                            </Link>
                            <Link to='/ourfood'>
                                <li className='hover:text-[#e67e22]' onClick={() => setSidenav(!sidenav)} >Our-Food</li>
                            </Link>
                            <Link to='/signup'>
                                <li className='hover:text-[#e67e22]' onClick={() => setSidenav(!sidenav)}>Sign IN</li>
                            </Link>

                        </ul>
                    </div>) : ("")
                }
                <div className='flex gap-5' >
                    <p>
                        <GiHamburgerMenu
                            size={40}
                            className='cursor-pointer block sm:hidden '
                            onClick={() => setSidenav(!sidenav)}
                        />
                    </p>
                    <p>
                        {num} 
                        <FaCartShopping size={30} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header







