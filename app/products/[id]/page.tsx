import { singleProduct } from '@/app/data'
import Price from '@/components/Price'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  
  return (
    <div className='mt-10 p-4 lg:px-20 md:gap-8 md:items-center xl:px-40 h-screen flex flex-col  justify-around text-red-500 md:flex-row'> 
      {/* IMAGE CONTINAER */}
      {singleProduct.img && (<div className='relative w-full h-1/2 md:h-[70%]'>
        <Image src={singleProduct.img} alt='' fill className='object-contain '/>
      </div>)}

      {/* TEXT CONTAINER */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />

      </div>
    </div>
  )
}

export default SingleProductPage