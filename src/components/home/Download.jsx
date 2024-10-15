import React from 'react'
import { GrApple } from 'react-icons/gr'
import GoogleIcon from '../../assets/GoogleIcon'

const Download = () => {
    return (
        <section className='bg-black lg:h-[8rem]'>
            <div className='lg:px-16 lg:py-6 p-4 pb-8'>
                <div className='relative'>
                    <img src="/stress.png" alt="Stressless Moving Truck" width={200} height={100} className='absolute mx-auto top-0 md:left-[30%] lg:left-[40%] hidden lg:block' />
                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between'>
                        <p className='uppercase font-semibold text-lg md:text-xl lg:text-2xl text-white'>download the app</p>
                        <div className='flex flex-col md:flex-row items-center gap-4 lg:gap-16 z-10'>
                            <button className='border border-white rounded-md w-44 md:w-44 py-1'>
                                <div className='px-1 py-1 flex items-center gap-1 md:gap-3'>
                                    <GrApple size={35} color='white' />
                                    <p className='text-white flex flex-col'>
                                        <span className='font-extralight text-xs uppercase text-start'>Download on the</span>
                                        <span className='capitalize text-base lg:text-xl text-start'>app store</span>
                                    </p></div>
                            </button>
                            <button className='border border-white rounded-md w-44 md:w-44 py-1'>
                                <div className='px-2 py-1 flex items-center gap-4 lg:gap-4'>
                                    <GoogleIcon />
                                    <p className='text-white flex flex-col'>
                                        <span className='font-extralight text-xs uppercase text-start'>Get it on</span>
                                        <span className='capitalize text-base lg:text-xl'>google play</span>
                                    </p></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download