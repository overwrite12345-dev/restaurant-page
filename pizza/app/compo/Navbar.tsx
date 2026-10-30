import React from 'react'
import Menu from './menu'
import Link from 'next/link'
import Carticom from './carticom'
import Image from 'next/image'
import Contact from '../contact/page'

const Navbar = () => {

  const user = false

  return (
    <div className='h-1/2 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-amber-300 uppercase md:h-24 lg:px-18 lx:px-40 '>
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">menu</Link>
        <Link href="/contact">contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">
          Masimo
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden '>
        <Menu />
      </div>
      { /*right*/}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='flex md:absolute top-3 r-2  lg:static items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt='' width={20} height={20} />
          <span>0994 511 1541</span>
        </div>
        {!user ? (<Link href="/login">Login</Link>) : (
          <Link href="/order">Order</Link>)}
        <Carticom />
      </div>
    </div>
  )
}

export default Navbar