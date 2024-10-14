import React from 'react'
import { clientSection } from '../../lib/mock-data'

const ClientsWeServe = () => {

    return (
        <section className='bg-white overflow-x-auto'>
            <div className='lg:px-16 lg:py-6 md:p-4 md:py-8 p-2 py-8'>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-[#535558] text-xl md:text-2xl lg:text-4xl font-bold'>Clients we Serve</h1>
                    <h2 className='text-lg md:text-xl lg:text-2xl text-[#121212] font-semibold'>Our services cater to</h2>

                    <div className='overflow-x-auto flex gap-3 items-center justify-start pt-6'>
                        {
                            clientSection?.map((data) => (
                                <div key={data?.sn} className='bg-[#F4F4F4] rounded-sm md:h-[16rem] lg:h-[15rem] max-w-[18rem] lg:w-[18rem] w-[16rem]'>
                                    <div className='p-2 md:p-4 flex flex-col gap-3 items-start'>
                                        <p className='text-[#121212] font-semibold text-lg'>{data?.title}</p>
                                        <div className='bg-[#EAEAEA] rounded-full p-2'>
                                            <img src={data?.image} alt={data?.title} width={50} height={50} className='p-2 lg:w-[4rem] md:w-[3rem]' />
                                        </div>
                                        <p className='pt-4 text-xs max-w-[15rem]'>{data?.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsWeServe