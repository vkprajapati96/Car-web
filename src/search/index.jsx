import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { eq } from 'drizzle-orm';
import Header from '@/components/Header';
import Search from '@/components/Search'
import Caritem from '@/components/Caritem';

function SearchByOptions() {
    const [searchParam] = useSearchParams();

    const [carList, setCarList] = useState([])
    const condition = searchParam.get('cars')
    const make = searchParam.get('make')
    const price = searchParam.get('price')

    // console.log(cars, make, price);

    useEffect(()=>{
        GetCarList()
    },[])

    const GetCarList = async ()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(condition != undefined && eq(CarListing.condition,condition))
        .where(make != undefined && eq(CarListing.make,make))

        const resp = Service.FormatResult(result)
        // console.log(resp);
        setCarList(resp)
    }

  return (
      <div>
          <Header />
          <div className='bg-black p-16 flex justify-center'>
              <Search />
          </div>
          <div className='md:px-20'>
              <h2 className='font-bold text-3xl p-7 '>Search Result</h2>
              {/* List of CarList */}
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 '>
                  {
                      carList?.length > 0 ? carList.map((item, index) => (
                          <div key={index}>
                              <Caritem car={item} />
                          </div>
                      )) :
                          [1, 2, 3, 4, 5, 6].map((item, index) => (
                              <div className='h-[300px] rounded-xl bg-slate-200 animate-pulse' key={index}>

                              </div>
                          ))
                  }
              </div>

          </div>
      </div>  )
}

export default SearchByOptions