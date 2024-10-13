import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs'
import { CarImages, CarListing } from './../../../configs/schema'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'
import ImageGallery from '../components/ImageGallery'
import Description from '../components/Description'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Specification from '../components/Specification'
import OwnersDetails from '../components/OwnersDetails'
import Footer from '@/components/Footer'
import FinanacialCalculator from '../components/FinanacialCalculator'
import MostSearchCar from '@/components/MostSearchCar'

function ListingDetail() {

    const { id } = useParams()
    const [carDetail, setCarDetail] = useState();

    useEffect(() => {
        GetCarDetail();
    }, [])

    const GetCarDetail = async () => {
        const result = await db.select().from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.id, id))

        // console.log(result);
        const resp = Service.FormatResult(result)
        setCarDetail(resp[0])
        // console.log(resp[0]);
    }

    return (
        <div>
            <Header />

            {/* Header details components */}
            <div className='p-10 md:px-20'>
                <DetailHeader carDetail={carDetail} />

                <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-5'>
                    {/* Left */}
                    <div className='md:col-span-2'>
                        {/* Car image gallery */}
                        <ImageGallery carDetail={carDetail} />

                        {/* Car Descripton */}
                        <Description carDetail={carDetail} />

                        {/* Car feature Details */}
                        <Features features={carDetail?.features}/>

                        {/* Financial Calculator  */}
                        <FinanacialCalculator carDetail={carDetail} />
                    </div>

                    {/* Right */}
                    <div className=''>
                        {/* Car pricing */}
                            <Pricing carDetail={carDetail}/>
                        {/* Car specification*/}
                        <Specification carDetail={carDetail}/>

                        {/* Car owner Details */}
                        <OwnersDetails carDetail={carDetail} />
                    </div>
                </div>
                <MostSearchCar/>
            </div>
            <Footer/>
        </div>
    )
}

export default ListingDetail