import React from 'react'

function ImageGallery({ carDetail }) {
  return (
    <div>
        <img src={carDetail?.images[0].imageUrl} className='w-full h-[500px] object-cover rounded-2xl' alt="" />
    </div>
  )
}

export default ImageGallery