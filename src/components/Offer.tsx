import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")]'>
      {/* text container */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-2 p-6'>
      <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
      <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <button className="bg-orange-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
     {/* image container */}
     <div className="flex-1 w-full relative md:h-full">
        <Image src="./offerProduct.png" alt="" fill className="object-contain" />
      </div>
      
    </div>
  )
}

export default Offer
