import { featuredProducts } from '@/app/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    // CONTAINER
    <div className='w-screen overflow-x-scroll text-red-500'>
        {/* WRAPPER */}
        <div className='w-max flex '>
            {/* Single ITEM */}
            {featuredProducts.map((item)=>(
                <div key={item.id} className='w-screen h-[100vh] md:w-[50vw] xl:w-[33vw] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300'>
                {/* IMAGE CONTAINER */}
               {item.img &&  <div className=' h-1/2  relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                    <Image src={item.img} alt='' fill className='object-contain'/>
                </div>}
                {/* TEXT CONTAINER */}
                <div className='h-1/2 flex flex-col gap-4 items-center text-center justify-center'>
                    <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                    <p className='p-4 2xl:p-8'>{item.desc}</p>
                    <span className='text-xl font-bold'>${item.price}</span>
                    <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                </div>
            </div>

            ))}
            
        </div>
    </div>
  )
}

export default Featured