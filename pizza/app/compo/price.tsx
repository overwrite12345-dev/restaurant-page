"use client"


import React, { useEffect, useState } from 'react'


type props={
    price:number,
    id:number,
    options?: {title:string ; additionalPrice:number;}[];
}
const Price = ({price,id,options,}: props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setquantity] = useState(1);
    const [Selected, setSelected] = useState(0);
// only component
    useEffect(()=>{
       setTotal(quantity * (options ? price+options[Selected].additionalPrice : price))


    }, [quantity , Selected , options , price])

return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        {/* option countainer */}
        <div className='flex gap-4'>
         {options?.map((option , index)=>(
            <button key={option.title} style={{background: Selected === index ? "rgb(248 113 113 )" : "white" , color :Selected === index ? "white" : "red",}} className='
           min-w-[6rem] ring-1 ring-red-400 rounded-md  p-2' onClick={(()=>setSelected(index))}>{option.title}</button>
         ))}
        </div>
        {/*quantity and add btn */}
        <div className='flex justify-between items-center'>
            {/* quantity */}
            <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                <span>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button onClick={()=>setquantity((prev) => (prev>1 ? prev-1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=>setquantity((prev) => (prev<9 ? prev+1 : 9))}>{'>'}</button>
                </div>
            </div>
            {/* cart btn */}
            <button className='uppercase  bg-red-500 text-white p-3 ring-1 ring-red-500 rounded-r-sm  w-56'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price