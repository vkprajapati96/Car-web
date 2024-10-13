import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { db } from './../../../configs/index'
import { CarImages, CarListing } from './../../../configs/schema'
import {eq, desc} from "drizzle-orm"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '@/Shared/Service'
import Caritem from '@/components/Caritem'
import { RiDeleteBin6Fill } from "react-icons/ri";



function MyListing() {
    const { user } = useUser();
    const [carList,setCarList] = useState([])

    useEffect(() =>{
        user&&GetUserCarListing()
    },[user])

    const GetUserCarListing = async () =>{
        const result = await db.select().from(CarListing)
        .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(eq(CarListing.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))

        const resp = Service.FormatResult(result)
        // console.log(resp);
        setCarList(resp);
    }
  return (
    <div className='mt-6'>
          <div className='flex justify-between items-center'>
              <h2 className='font-bold text-4xl'>My Listing</h2>
              <Link to={"/add-listing"}>
                  <Button className="rounded-[5px] text-white">+ Add New Listing</Button>
              </Link>

          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
            {
                carList.map((item, index) => (
                    <div key={index}>
                        <Caritem car={item}/>
                        <div className=' p-2 flex justify-between gap-3 bg-gray-50'>
                            <Link to={"/add-listing?mode=edit&id="+item?.id} className='w-full'>
                            <Button  className="w-full outline-none bg-sky-50 rounded-[8px] border hover:bg-white">Edit</Button>
                            </Link>
                            <Button variant="destructive" className="bg-red-600 text-gray-50 hover:text-gray-900 rounded-[8px]"><RiDeleteBin6Fill /></Button>
                        </div>
                    </div>
                ))
            }
          </div>
    </div>
  )
}

export default MyListing