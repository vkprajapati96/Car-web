import React from 'react'
import { SlCalender } from "react-icons/sl";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearboxFilled } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";



function DetailHeader({ carDetail }) {

    return (
        <div>
            {carDetail?.listingTitle ? 
           <div>
                <h2 className='font-bold text-3xl'>{carDetail?.listingTitle}</h2>
                <p className='text-sm'>{carDetail?.tagline}</p>

                <div className='flex gap-3 mt-4'>
                    <div className='flex gap-3 items-center bg-blue-50 px-2 p-1 rounded-full'>
                        <SlCalender className='h-5 w-5 text-primary' />
                        <h2 className='text-primary'>{carDetail?.year}</h2>
                    </div>

                    <div className='flex gap-3 items-center bg-blue-50 px-2 p-1 rounded-full'>
                        <SlSpeedometer className='h-5 w-5 text-primary' />
                        <h2 className='text-primary'>{carDetail?.mileage}</h2>
                    </div>

                    <div className='flex gap-3 items-center bg-blue-50 px-2 p-1 rounded-full'>
                        <TbManualGearboxFilled className='h-5 w-5 text-primary' />
                        <h2 className='text-primary'>{carDetail?.transmission}</h2>
                    </div>

                    <div className='flex gap-3 items-center bg-blue-50 px-2 p-1 rounded-full'>
                        <BsFillFuelPumpFill className='h-5 w-5 text-primary' />
                        <h2 className='text-primary'>{carDetail?.fuelType}</h2>
                    </div>
                </div>
           </div>:
           <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse mt-7'></div>
            }
        </div>

    )
}

export default DetailHeader