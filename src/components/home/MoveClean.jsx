import React from 'react'

const MoveClean = () => {
    return (
        <section className='bg-white'>
            <div className='lg:px-16 lg:py-6 p-4 pb-8 md:pb-4'>
                <div className='flex flex-col gap-8 md:gap-0 items-center justify-between md:flex-row'>
                    <div className='flex flex-col items-center md:items-start gap-2'>
                        <h1 className='text-[#535558] text-lg md:text-4xl lg:text-5xl font-semibold'>We Move and Clean</h1>
                        <p className='text-[#121212] text-sm text-center md:text-start md:text-lg lg:text-2xl font-semibold md:w-[20rem] lg:w-[28rem]'>Powered by MD Environmental Services | Professional Cleaning Services</p>
                        <button className="py-1 md:py-1 lg:py-1 px-4 lg:px-8 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base text-white w-fit">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img src="/clean-img.png" alt="Cleaning Agent" width={200} height={100} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoveClean