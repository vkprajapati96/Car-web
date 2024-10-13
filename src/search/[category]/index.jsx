import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../configs/index'
import { CarImages, CarListing } from './../../../configs/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Service from '@/Shared/Service'
import Caritem from '@/components/Caritem'

function SearchByCategory() {
    
    const {category} = useParams()
    const [carList, setCarList] = useState([])

    const GetCarList = async ()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.category, category))

        const resp = Service.FormatResult(result)
        setCarList(resp)
        // console.log(resp);
    }


    useEffect(()=>{
        GetCarList();
    },[])

  return (
    <div>
        <Header/>
        <div className='bg-black p-16 flex justify-center'>
            <Search/>
        </div>
          <div className='md:px-20'>
              <h2 className='font-bold text-3xl p-7 '>{category}</h2>
              {/* List of CarList */}
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 '>
              {
                  carList?.length >0? carList.map((item, index)=>(
                      <div key={index}>
                        <Caritem car={item}/>
                    </div>
                )):
                [1,2,3,4,5,6].map((item, index)=>(
                    <div className='h-[300px] rounded-xl bg-slate-200 animate-pulse'>

                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default SearchByCategory