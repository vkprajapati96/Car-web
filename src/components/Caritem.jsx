import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';




function Caritem({ car }) {
  return (
    <Link to={'/listing-details/'+car?.id}>
    <div className='rounded-xl bg-white border hover:shadow-xl cursor-pointer mt-5'>
      <h2 className='bg-green-500 absolute px-2 rounded-full text-sm pb-1 m-2 text-white'>New</h2>
      <img src={car?.images[0]?.imageUrl} width={"100%"} height={250} alt="" className='rounded-t-xl h-[150px] w-full object-cover' />
      <div className='p-4'>
        <h2 className='font-bold text-black text-lg mb-2'>{car.listingTitle}</h2>
        <div className='w-full h-[1px] bg-[gray] mb-[5px] '></div>

        <div className='grid grid-cols-3 mt-5'>
          <div className='flex flex-col items-center overflow-cover'>
            <BsFillFuelPumpFill className='text-lg' />
            <h2 className='text-sm'>{car.mileage} Miles</h2>
          </div>
          <div className='flex flex-col items-center'>
            <IoSpeedometerSharp className='text-lg' />
            <h2>{car.fuelType}</h2>
          </div>
          <div className='flex flex-col items-center'>
            <GiGearStickPattern className='text-lg' />
            <h2>{car.transmission}</h2>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[gray] mb-[5px] '></div>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl '>₹ {car.sellingPrice}</h2>
          <h2 className='text-primary text-sm flex items-center gap-2'>View Details <MdOpenInNew /></h2>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Caritem