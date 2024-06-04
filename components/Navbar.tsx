import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  const user = false;
  
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40' >
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Homepage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contacts</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href={'/'}>
          Massimo
        </Link>
      </div>
      {/* Mobile menu */}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* Right links */}
      <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
        <div className='flex md:absolute top-3 r-2 lg:static items-center gap-2 cursor-pointer bg-orange-300 rounded-md px-1'>
          <Image src='/phone.png' alt='' width={20} height={20}/> 
          <span>99-940 46 12</span>
        </div>
       {!user ? ( <Link href='/'>Login</Link>):
        (<Link href='/menu'>Orders</Link> )} 
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar