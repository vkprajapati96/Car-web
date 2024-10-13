import React from 'react'

function Description({ carDetail }) {
    return (
        <div>
            {carDetail?.listingDescription ?
            <div className='p-8 rounded-xl bg-white border shadow-md mt-6'>
                <h2 className='my-2 font-medium text-2xl'>Description</h2>
                <p>{carDetail?.listingDescription}</p>
            </div>:
            <div className='w-full h-[100px] bg-slate-200 animate-pulse rounded-xl mt-10'></div>
}
        </div>
    )
}

export default Description