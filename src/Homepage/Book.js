import React from 'react'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <div className="max-w-[1350px] px-4 mx-auto">
      <div className='bg-[#578CDA]  md:p-[70px] p-4  lg:rounded-[40px] rounded-xl'>
        <div className='flex flex-wrap items-center justify-between gap-4 '>
          <h2 className='text-white font-sathosi font-bold lg:text-[40px] md:text-[34pxpx] sm:text-[28px] text-[28px] max-w-[600px] lg:leading-[45px] sm:leading-[35px] leading-[34px] '>
            Book Discovery Call Today with  our Lead Technical Writer
          </h2>
          <Link to={'https://calendly.com/begawnit0099/30min'} target="_blank" rel="noopener noreferrer">
            <button className='sm:px-5 sm:py-4 px-4 py-3 font-poppins font-semibold text-[18px] text-[#578CDA] bg-white hover:bg-[#4283DE] hover:text-white hover:border hover:border-white transition-all duration-700  rounded-lg'>Book now</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Book;
