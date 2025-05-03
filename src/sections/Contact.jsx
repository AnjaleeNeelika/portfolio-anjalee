import React from 'react'
import { IoMail } from 'react-icons/io5'

const Contact = () => {
  return (
    <section id='contact' className='mt-30 lg:px-40 px-20 py-20 text-white h-fit text-center bg-gradient-to-br from-[#cf0dac] via-[#a90ab8] to-[#5e058f] md:rounded-tr-[50%] rounded-tl-[50%] scroll-mt-40'>
        <p className='w-fit text-5xl font-semibold text-center mx-auto mt-10 text-[#070f2b]'>
            Contact Me
        </p>
        {/* <div className='flex flex-wrap justify-center items-center mt-20'>
            <div className='w-fit'>
                <div className='text-2xl font-medium'>Do you have a project that I can contribute to or anything to say?</div>
                <div className='text-xl'>Send me a message</div>
                <div className='flex justify-center items-center gap-2 mt-5'>
                    <IoMail className='text-2xl' />
                    <a href='mailto:anjaleeneelika20@gmail.com' className='hover:underline hover:underline-offset-4'>anjaleeneelika20@gmail.com</a>
                </div>
            </div>
            <div className='max-w-[400px] w-full mx-auto'>
                <form action="" className='w-full flex flex-col gap-5 text-gray-600'>
                    <div>            
                        <input type="text" name="" id="" placeholder='Your Name' className='w-full bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder='Your Email' className='w-full bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder='Your Subject' className='w-full bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <div>
                        <textarea name="" id="" placeholder='Your Message' className='w-full min-h-[100px] bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <button className='bg-[#132566] text-gray-300 py-3 rounded-md mt-10 font-medium shadow-2xl/50 hover:-translate-y-1 duration-200 hover:cursor-pointer'>Send Message</button>
                </form>
            </div>
        </div> */}
        <div className='w-full p-2 mt-20 flex flex-wrap justify-between items-center gap-20'>
            <div className='w-fit'>
                <div className='text-2xl font-medium'>Do you have a project that I can contribute to or anything to say?</div>
                <div className='text-xl'>Send me a message</div>
                <div className='flex justify-center items-center gap-2 mt-5'>
                    <IoMail className='text-2xl' />
                    <a href='mailto:anjaleeneelika20@gmail.com' className='hover:underline hover:underline-offset-4'>anjaleeneelika20@gmail.com</a>
                </div>
            </div>
            <div className='max-w-[400px] w-full mx-auto'>
                <form action="" className='w-full flex flex-col gap-5 text-gray-600'>
                    <div>            
                        <input type="text" name="" id="" placeholder='Your Name' className='w-full bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder='Your Email' className='w-full bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder='Your Subject' className='w-full bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <div>
                        <textarea name="" id="" placeholder='Your Message' className='w-full min-h-[100px] bg-white placeholder:text-gray-400 placeholder:text-xs text-sm px-5 py-2.5 rounded-md outline-none hover:border hover:border-purple-800' />
                    </div>
                    <button className='bg-[#132566] text-gray-300 py-3 rounded-md mt-10 font-medium shadow-2xl/50 hover:-translate-y-1 duration-200 hover:cursor-pointer'>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact