import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className='flex flex-col  h-screen '>
        {/* TEXT CONTAINER */}
        <div className='h-1/2'>
            <h1>Test</h1>
            <button>Order now</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2'> 
            <Image src='/slide1.png' alt='' fill className='w-full'/>
        </div>


    </div>
  )
}

export default Slider