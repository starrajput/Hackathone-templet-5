import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
         <div className='flex items-center bg-purple-300 rounded-lg p-6 px-10'>
                    <div className='text-black flex flex-col justify-center space-y-5 md:w-[1439px] h-[716px] top-136px relative left-1px radius-5px border-1px'>
                        <div className='flex items-center gap-2'>
                            <span className='sm:text-sm md:text-base font-semibold'> SUMMER 2020</span>

                        </div>
                        {/* heading side */}
                        <h1 className='sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug'>NEW COLLECTION
                        </h1>
                        <p>We know how large objects will act, 
                        but things on a small scale.</p>
                        <Link
                            href={"#products"}
                            className=' underline underline-offset-4 text-white hover:font-semibold flex items-center gap-2 '
                        >
                            Shop Now
                        </Link>
                    </div>
                    {/* image */}
<div className='w-415 h-280 bg-white'>
    <img src="../onepic.jpg" alt="iphone" />

    </div>
    </div>
  )
}
