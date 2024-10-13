import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { db } from './../../../configs/index';
import { CarImages } from './../../../configs/schema';
import { eq, desc } from "drizzle-orm"


function Uploadimage({ triggerUploadImages, setLoader, carInfo, mode}) {
    const [selectedFileList, setSelectedFileList] = useState([]);
    const [EditCarImageList, setEditCarImagesList] = useState([]);

    // useEffect(()=>{
    //     if(mode=="edit"){
    //             carInfo.image.forEach((image)=>{
    //             setEditCarImagesList([])
    //             setEditCarImagesList(prev => [...prev, image?.imageUrl])
    //             console.log(image);
    //         })
    //     }
    // },[carInfo])

    useEffect(()=>{
        if(triggerUploadImages){
            UploadimageToSetver();
        }
    },[triggerUploadImages])

    const onFileSelected = (event) => {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            setSelectedFileList((prev) => [...prev, file])
        }
    }

    const onImageRemove = (image, index) => {
        const result = selectedFileList.filter((item) => item != image);
        setSelectedFileList(result)
    }

    const onImageRemoveFromDB  =async (image,index)=>{
        const result = await db.delete(CarImages).where(eq(CarImages.id, carInfo?.images[index]?.id)).returning({id:CarImages.id})

        const imageList = EditCarImageList.filter(item => item!=image);
        setEditCarImagesList(imageList)
    }

    const UploadimageToSetver = async() => {
            setLoader(true)
            await selectedFileList.forEach((file) => {
            const fileName = Date.now() + '.jpeg';
            const storageRef = ref(storage, 'car-dakho/' + fileName)
            const metaData={
                contentType : 'image/jpeg'
            }
            uploadBytes(storageRef, file, metaData).then((snapShot)=>{
                // console.log("Upload image");
            }).then(resp => {
                getDownloadURL(storageRef).then(async(downloadUrl)=>{
                    // console.log(downloadUrl);
                    await db.insert(CarImages).values({
                        imageUrl : downloadUrl,
                        carListingId : triggerUploadImages
                    })
                })
            })
            setLoader(false)
        })
    }
    return (
        <div>
            <h2 className='font-medium my-3 text-xl'>Upload Car Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                {mode=='edit' &&
                    EditCarImageList.map((image, index) => (
                        <div key={index} className='mr-2 mb-2'>
                            <IoCloseCircleSharp className='absolute my-2 mx-2 text-lg text-white'
                                onClick={() => onImageRemove(image, index)} />

                            <img src={image} className='w-full h-[130px] object-cover rounded-xl' alt="" />
                        </div>
                    ))
                }

                {
                    selectedFileList.map((image, index) => (
                        <div key={index} className='mr-2 mb-2'>
                            <IoCloseCircleSharp className='absolute my-2 mx-2 text-lg text-white'
                                onClick={() => onImageRemoveFromDB(image, index)} />

                            <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' alt="" />
                        </div>
                    ))
                }

                <label htmlFor='upload-image'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-lg'>
                        <h2 className='text-lg text-center'>+</h2>
                    </div>
                </label>
                <input type="file" multiple={true} id='upload-image' className='opacity-0' onChange={onFileSelected} />
            </div>         
        </div>
    )
}

export default Uploadimage