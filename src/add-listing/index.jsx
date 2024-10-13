import Header from '@/components/Header'
import carDetails from "../Shared/carDetails.json"
import InputField from './components/inputField'
import DropdownField from './components/DropdownField'
import TextAreaField from './components/TextAreaField'
import features from '../Shared/features.json'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import IconField from './components/IconField'
import Uploadimage from './components/Uploadimage'
import { TbLoader3 } from "react-icons/tb";
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useUser } from '@clerk/clerk-react'
import { eq, desc } from "drizzle-orm"
import Service from '@/Shared/Service'
import Footer from '@/components/Footer'

// import { moment} from "moments"


function AddListing() {
    const [formData, setFormDate] = useState([]);
    const [featuresData, setFeatureData] = useState([])
    const [triggerUploadImages, setTriggerUploadImages] = useState()
    const [carInfo, setCarinfo] = useState([])
    const [searchParams] = useSearchParams();
    const [loader, setLoader] = useState(false)
    const naviagte = useNavigate()
    const { user } = useUser();

    const mode = searchParams.get("mode");
    const recordeId = searchParams.get("id")

    useEffect(() => {
        if (mode == 'edit') {
            GetListingDetail();
        }
    }, [])

    const GetListingDetail = async () => {
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.id, recordeId))

        const resp = Service.FormatResult(result)
        setCarinfo(resp[0])
        setFormDate(resp[0])
        setFeatureData(resp[0].features)
    }

    /**
     * use to capture user input from form
     * @param {*} name 
     * @param {*} value 
     */
    const handleInputChange = (name, value) => {
        setFormDate((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    /**
     * used to save selected feature list
     * @param {*} name 
     * @param {*} value 
     */

    const handleFeatureChange = (name, value) => {
        setFeatureData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // console.log(featuresData);
    }

    const onSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        // console.log(formData);
        toast("Please wait")

        if (mode == 'edit') {
            const result = await db.update(CarListing).set({
                ...formData,
                features: featuresData,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName,
                userImageUrl: user?.imageUrl,
                // postedOn: moment().format("DD/MM/YYYY")   //user for comment
            }).where(eq(CarListing.id, recordeId)).returning({ id: CarListing.id })
            console.log(result);
            naviagte("/profile")
            setLoader(false)
        }
        else {
            try {
                const result = await db.insert(CarListing).values({
                    ...formData,
                    features: featuresData,
                    createdBy: user?.primaryEmailAddress?.emailAddress,
                    userName: user?.fullName,
                    userImageUrl: user?.imageUrl,
                    // postedOn: moment().format("DD/MM/YYYY")   //user for comment

                }).returning({ id: CarListing.id });
                if (result) {
                    // console.log("Data Saved");
                    setTriggerUploadImages(result[0].id)
                    setLoader(false)
                }
            } catch (e) {
                console.log("error", e);
            }
        }
    }
    return (

        <div>
            <Header />
            <div className='px-10 md:px-20 my-10'>
                <h2 className='font-bold text-4xl'>Add New Listing</h2>

                <form className='px-10 py-3 border rounded-xl mt-10'>
                    {/* car details */}
                    <div>
                        <h2 className='font-medium text-3xl mb-6 '>Car Details</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                            {carDetails.carDetails.map((item, index) => (
                                <div key={index} >
                                    <label className='text-sm flex gap-3 mb-1 items-center'><IconField icon={item?.icon} />
                                        {item.label} {item.required && <span className='text-red-500'>*</span>}</label>
                                    {item.fieldType == "text" || item.fieldType == "number"
                                        ? <InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                                        : item.fieldType == "dropdown"
                                            ? <DropdownField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                                            : item.fieldType == "textarea"
                                                ? <TextAreaField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                                                : null}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='w-full my-6 h-[1px] bg-[gray] mb-[5px] '></div>

                    {/* features list */}
                    <div>
                        <h2 className='font-medium text-xl my-6'>Features</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3'>

                            {
                                features.features.map((item, index) => (
                                    <div className='flex items-center gap-5' key={index}>
                                        <Checkbox onCheckedChange={(value) => handleFeatureChange(item.name, value)} checked={featuresData?.[item.name]} />
                                        <h2>{item.label}</h2>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    {/* car image */}
                    <div className='w-full my-6 h-[1px] bg-[gray] mb-[5px] '></div>

                    <Uploadimage triggerUploadImages={triggerUploadImages}
                        carInfo={carInfo} mode={mode} setLoader={(v) => {
                            setLoader(v);
                            naviagte('/profile')
                        }} />

                    <div className='mt-10 flex justify-end'>
                        <Button className="text-white rounded-[5px]"
                            disabled={loader} onClick={(e) => onSubmit(e)}>
                            {!loader ? "Submit" : <TbLoader3 className='animate-spin text-xl' />}
                        </Button>
                    </div>
                </form>

            </div>
            <Footer/>
        </div>
    )
}

export default AddListing