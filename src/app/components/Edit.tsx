
import React from 'react'


export default function Edit() {
    return (

        <div className='w-[1440px] h- [770px]  relative left-195px pt-80px pb-80px gap-48px flex justify-center items-center mt-10 mb-1' >
            <div className='sm:w-full md:w-[607px] h-[62px] gap-10px pb-10'>
                <div className='flex flex-col sm:pl[6%] md:pl-0'>
                    <h1 className='text-black font-bold justify-center items-center border-red-500 sm:text-md md:text-3xl lg:text-3xl pl-4 ml-4'>EDITOR'S PICK</h1>
                    <div className='flex '>
                        <p className='text-slate-800  justify-center items-center sm:text-md md:text-xl lg:text-xl pt-1'>
                            {" "}
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    <div className='w-[1050px] h-[500] gap-30px opacity-0px'>
                        <div className=' flex grid-cols-1 w-[510px] h-[500px] gap-0px opacity-0px'>
                            <img src="../filter.png" alt="MEN" />
                            <div className=' flex grid-col-1 w-[240px] h-[500px] gap-0px opacity-0px'>
                                <img src="../filter (1).png" alt="WOMEN" />
                                <div className='w-[240px] h-[242px] gap-0px opacity-0px'>
                                    <img src="../filter (2).png" alt="ACCESSORIES" />
                                    <div className='w-[240px] h-[242px] gap-0px opacity-0px'>
                                        <img src="../filter (3).png" alt="KIDS" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}
