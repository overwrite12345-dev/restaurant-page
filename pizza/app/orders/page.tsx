import React from 'react'

const Orderpage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
<table className='w-full border-separate border-spacing-3'>
<thead>
  <tr className='text-left'>
    <th className='hidden md:block'>Order ID</th>
    <th>Date</th>
    <th>Price</th>
    <th className='hidden md:block'>products</th>
    <th>Status</th>
  </tr>
</thead>

<tbody>
  <tr className='text-sm md:text-base odd:bg-red-100'>
    <td className='hidden md:block py-6 px-1'>67298387932</td>
    <td className=' py-6 px-1'>20.02.2023</td>
    <td className=' py-6 px-1'>$65.54</td>
    <td className='hidden md:block py-6 px-1'>Big burgers Menu (2) , veggie pizza (2) coca cola 1L (1)</td>
    <td className=' py-6 px-1'>on the way (10min)...</td>
  </tr>
   <tr className='text-sm md:text-base odd:bg-white'>
    <td className='hidden md:block py-6 px-1'>67298387932</td>
    <td className=' py-6 px-1'>20.02.2023</td>
    <td className=' py-6 px-1'>$65.54</td>
    <td className='hidden md:block py-6 px-1'>Big burgers Menu (2) , veggie pizza (2) coca cola 1L (1)</td>
    <td className=' py-6 px-1'>on the way (10min)...</td>
  </tr>
  <tr className='text-sm md:text-base odd:bg-gray-100'>
    <td className='hidden md:block py-6 px-1'>67298387932</td>
    <td className=' py-6 px-1'>20.02.2023</td>
    <td className=' py-6 px-1'>$65.54</td>
    <td className='hidden md:block py-6 px-1'>Big burgers Menu (2) , veggie pizza (2) coca cola 1L (1)</td>
    <td className=' py-6 px-1'>on the way (10min)...</td>
  </tr>
</tbody>
</table>
    </div>
  )
}

export default Orderpage