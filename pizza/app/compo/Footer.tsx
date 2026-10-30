import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
   <div className='h-12 md:h-24 p-4 lg:px-20 xl:py-40 text-red-400 flex items-center justify-between'>
    <Link href="/" className='font-bold text-xl'>Massimo</Link>
    <p>All right reserved</p>
   </div>
    
  )
}

export default Footer