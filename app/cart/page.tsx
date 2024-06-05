import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* PRODUCTS CONTAINER */}
        <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 lg:px-20 xl:px-40'>
          {/* SINGLE ITEM CONTAINER */}
          <div className='flex items-center justify-between mb-4 '>
            <Image src='/temporary/p1.png' alt='' width={100} height={100} />
            <div>
              <h1 className='uppercase text-xl font-bold'>Sicilan</h1>
              <span>Large</span>
            </div>
            <h2 className='font bold '>$80.10</h2>
            <span className='cursor-pointer'>X</span>
          </div>
          <div className='flex items-center justify-between mb-4 '>
            <Image src='/temporary/p1.png' alt='' width={100} height={100} />
            <div>
              <h1 className='uppercase text-xl font-bold'>Sicilan</h1>
              <span>Large</span>
            </div>
            <h2 className='font bold '>$80.10</h2>
            <span className='cursor-pointer'>X</span>
          </div>
          <div className='flex items-center justify-between mb-4 '>
            <Image src='/temporary/p1.png' alt='' width={100} height={100} />
            <div>
              <h1 className='uppercase text-xl font-bold'>Sicilan</h1>
              <span>Large</span>
            </div>
            <h2 className='font bold '>$80.10</h2>
            <span className='cursor-pointer'>X</span>
          </div>
        </div>
      {/* PAYMENT CONTAINER */}
      <div className='h-1/2 p-4 bg-fuchsia-50 gap-4 flex flex-col justify-center lg:h-full lg:w-1/3 lg:px-15 xl:px-20'>
        <div className='flex justify-between'>
          <span>Subtotal(3 items)</span>
          <span>$21.24</span>
        </div>
        <div className='flex justify-between'>
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery Cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
          <span>Total(INCL. VAT)</span>
          <span className='font-bold'>$22.24</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage