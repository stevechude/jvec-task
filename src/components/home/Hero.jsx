import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between bg-[#282B2E]'>
            <div className='lg:px-16 lg:py-6 md:p-4 p-2 h-full md:justify-center md:items-center'>
                <div className='flex flex-col gap-4 md:gap-6 py-10 md:py-6 lg:py-12 items-center md:items-start'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='lg:text-7xl md:text-5xl text-5xl px-4 md:p-0 font-bold text-white text-center md:text-start lg:w-[400px]'><span className='text-[#FF3333]'>Move</span> With Confidence:</h1>
                        <p className='lg:text-4xl md:text-3xl text-base text-center md:text-start text-white tracking-wide font-semibold'>Smooth Moves Start Here</p>
                    </div>
                    <div className='flex flex-col gap-2 lg:gap-4 text-white items-center md:items-start'>
                        <p>Professional and affordable. Fully insured.</p>
                        <button className="py-1 md:py-1.5 lg:py-2 px-4 lg:px-8 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base w-fit">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <div className='bg-[url("/hero-pic.png")] bg-no-repeat object-cover bg-cover'></div> */}
            <div>
                <img src='/hero-pic.png' alt='hero section image' width={500} height={400} className='md:w-[20rem] lg:w-[35rem]' />
            </div>
        </section>
    )
}

export default Hero