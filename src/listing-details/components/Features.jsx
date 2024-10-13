import React from 'react'
import { FaCheck } from "react-icons/fa";


function Features({ features }) {
    // console.log(features);
    return (
        <div>
            {features && features.length >= 0 ?
                <div className='p-5 border shadow-md rounded-xl my-7'>
                    <h2 className='font-medium text-2xl'>Features</h2>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
                        {Object.entries(features).map(([features, value, index]) => (
                            <div key={index} className='flex gap-3 items-center mt-1'>
                                <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                                <h2>{features}</h2>
                            </div>
                        ))}
                    </div>
                </div> :
                 
                //  Static Data
                <div className='p-5 border shadow-md rounded-xl my-7'>
                    <h2 className='font-medium text-2xl'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Air Conditioner</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Leather Seats</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Touch  Display</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Child Safety Locks</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Stability Control</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Rain Sensing</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Convenience</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Vanity Mirror</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Air bagh</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Digital Odometer</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Bluetooth</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Moonroof</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Anti-lock Braking</h2>
                        </div>
                        <div className='flex gap-3 items-center mt-1'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>Driver Air Bag</h2>
                        </div>
                   

                    </div>
                </div>
            }
        </div>

    )
}

export default Features