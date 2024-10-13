import carList from "@/Shared/FakeData";
import Caritem from "./Caritem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { CarImages, CarListing } from "./../../configs/schema";
import { db } from "./../../configs";
import { eq, desc } from "drizzle-orm"
import { useEffect, useState } from "react";
import Service from '@/Shared/Service'


function MostSearchCar() {
    const [ carList, setCarList] = useState([])

    useEffect(()=>{
        GetPopularCarList();
    },[])

    const GetPopularCarList = async ()=> {
        const result = await db.select().from(CarListing)
            .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .orderBy(desc(CarListing.id))
            // .limit(30)

        const resp = Service.FormatResult(result)
        // console.log(resp);
        setCarList(resp)
    }

    return (
        <div className="mx-24">
            <h2 className="font-bold text-3xl text-center mt-16 mb-7">Most Search Car</h2>

            <Carousel>
                <CarouselContent>

                    {carList.map((car, index) => (
                        <CarouselItem className="basis-1/4 md:grid-cols-3 lg:grid-cols-4" key={index}>
                            {/* className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5' */}
                            <Caritem car={car}/>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default MostSearchCar