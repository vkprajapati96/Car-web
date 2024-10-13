import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";


function Pricing({ carDetail }) {
    // console.log(carDetail?.sellingPrice);
  return (
    <div className='p-10 rounded-xl border shadow-lg'>
        <h2>Our Price</h2>
          <h4 className='line-through	'>₹ {carDetail?.originalPrice}</h4>
          <h2 className='font-bold text-4xl'> ₹ {carDetail?.sellingPrice}</h2>
          <Button className="bg-primary text-white rounded-[5px] w-full mt-7 text-md" size="lg"> <MdOutlineLocalOffer className='text-xl mr-2'/> Make an Offer Price</Button>

        {/* <Button>Make an Offer Price</Button> */}
    </div>
  )
}

export default Pricing