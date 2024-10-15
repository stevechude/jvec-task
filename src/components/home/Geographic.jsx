import React from 'react'

const Geographic = () => {
    return (
        <section className='bg-white'>
            <div className='lg:px-16 lg:py-6 md:p-4 md:py-8 p-2 py-8'>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl text-[#121212] font-bold'>Geographic Coverage</h1>

                    <div className='relative'>
                        <img src="/geo.png" alt="Geographic Coverage" width={400} height={300} className='mx-auto lg:w-[40rem]' />
                        <div style={{ boxShadow: "0px 0px 5px 1px #ccc" }} className='bg-white rounded-lg w-fit text-black absolute top-0 md:top-4 lg:top-8 transition-transform duration-300 transform hover:-translate-y-1'>
                            <p className='px-3 pt-1 pb-2 text-xs lg:text-sm w-[14rem] md:w-[20rem]'><span className='font-semibold text-base'>Local:</span> Serving the Tri-Cities area and other cities in Tennessee</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 5px 1px #ccc" }} className='bg-white rounded-lg w-fit text-black absolute bottom-16 md:bottom-16 lg:bottom-40 right-0 transition-transform duration-300 transform hover:-translate-y-1'>
                            <p className='px-3 pt-1 pb-2 text-xs lg:text-sm w-[16rem] md:w-[22rem] lg:w-[25rem]'><span className='font-semibold text-base'>Long-Distance:</span> Covering moves to Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and Washington DC.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Geographic