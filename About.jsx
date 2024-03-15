import React from 'react'
import img1 from '../assets/ram.jpeg'

const About = () => {
  return (
    <div className='mt-[100px]'>
    <div className='text-gray-600 body-font w-[80%] mc-auto mt-[100px]'>
      <div className='px-[16px]'>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8 '>
          Driving the <span className='text-[red]' >force</span> of <span className='text-[#fbc531]' >assortment</span> </h2>
        <p className='mb-8 leading-relaxed text-[20px]'>
          For over a decade now, we’ve been empowering our customers in discovering new
          tastes and experiences across countries. By putting together meticulous information for our customers,
          we enable them to make an informed choice.
        </p>
      </div>
      <div className='container mx-auto flex px-5 py-24 md:flex-row  flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center '></div>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Who are we?</h2>
        <p className='mb-8 leading-relaxed text-[25px]'>
          Launched in 2010, Our technology platform connects customers,
          restaurant partners and delivery partners, serving their multiple needs.
          Customers use our platform to search and discover restaurants,
          read and write customer generated reviews and view and upload photos,
          order food delivery, book a table and make payments while dining-out at restaurants.
          On the other hand, we provide restaurant partners with
          industry-specific marketing tools which enable them to engage
          and acquire customers to grow their business while also providing
          a reliable and efficient last mile delivery service.
          We also operate a one-stop procurement solution, Hyperpure,
          which supplies high quality ingredients and kitchen products
          to restaurant partners. We also provide our delivery partners with
          transparent and flexible earning opportunities.
        </p>
      </div>
      <div className='lg:max-w lg:w-full md:w-1/2  w-5/6 mb-[10px] ml-[30px] mt-[0px]' >
        <img className='object-cover object-center rounded-[10px]' src={img1} alt="" />
      </div>
      </div>
    </div>
  )
}

export default About