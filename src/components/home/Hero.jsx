import React, { useEffect } from 'react'
import AOS from "aos";
import { useTypewriter } from 'react-simple-typewriter';
import "aos/dist/aos.css";

const Hero = () => {
    const [typeEffect] = useTypewriter({
        words: ['Professional and affordable. Fully insured.'],
        loop: {},
        typeSpeed: 100,
        // delaySpeed: 1000,
        deleteSpeed: 40
    })
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='flex flex-col md:flex-row justify-between bg-[#282B2E] pt-12 md:pt-28 lg:pt-28 relative'>
            <div className='lg:px-16 lg:py-6 md:p-4 p-2 h-full md:justify-center md:items-center'>
                <div className='flex flex-col gap-4 md:gap-6 py-10 md:py-6 lg:py-12 items-center md:items-start'>
                    <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className='flex flex-col gap-2'>
                        <h1 className='lg:text-7xl md:text-5xl text-5xl px-4 md:p-0 font-bold text-white text-center md:text-start lg:w-[400px]'><span className='text-[#FF3333]'>Move</span> With Confidence:</h1>
                        <p className='lg:text-4xl md:text-3xl text-base text-center md:text-start text-white tracking-wide font-semibold'>Smooth Moves Start Here</p>
                    </div>
                    <div className='flex flex-col gap-2 lg:gap-4 text-white items-center md:items-start relative'>
                        <p className='hidden md:block'>{typeEffect}</p>
                        <p className='block md:hidden'>Professional and affordable. Fully insured.</p>
                        <button
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            className="py-1 md:py-1.5 lg:py-2 w-24 md:w-32 lg:w-36 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base absolute top-10">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <div className='bg-[url("/hero-pic.png")] bg-no-repeat object-cover bg-cover'></div> */}
            <div className='pt-5 md:pt-0 md:relative'>
                <img src='/hero-pic.png' alt='hero section image' width={500} height={400} className='md:w-[26rem] lg:w-[35rem]' />
            </div>
        </section>
    )
}

export default Hero