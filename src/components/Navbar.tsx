import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className=' h-6 text-orange-500 p-5 flex items-center justify-between border-b-2 border-b-orange-500 uppercase w-full md:h-20 lg:px-20 xl:px-40'>
        {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/" >Homepage</Link>
        <Link href="/menu" >Menu</Link>
        <Link href="/" >Contact</Link>
      </div>
      {/* Logp */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="">
          Tounsino
        </Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu/>
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className=' md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-200 px-1 rounded-md'>
           <Image src="./phone.png" alt="" width={20} height={20} />
           <span>17 256 589</span>
        </div>

        { ! user ?
           (<Link href="/login" >Login</Link>)
        :
      (  <Link href="/orders" >Orders</Link> ) 
        }
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar



























































































