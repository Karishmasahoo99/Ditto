import React from 'react'
import linkedin from './linkedin.svg';
import Button from './Button'

function Main() {
  return (
    <div className='md:px-[200px] px-4 md:py-[150px] h-full md:flex items-center justify-between gap-4 '>
        <div>
            <div className='md:grid grid-cols-2 mb-6'>
                <span className='flex flex-cols-2 gap-4 max-w-[180px] shadow-lg rounded-md p-2 items-center justify-center'>
                   <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png" width="40px" alt='google' className='cols-span-2'/>
                   <div className=''> 
                      <div>4000+ reviews </div>
                      <div>4.9 ratings </div>
                   </div>
                 </span>
                 <span className='flex flex-cols-2 gap-4 max-w-[180px] shadow-lg rounded-md p-2 items-center justify-center'>
                   <img src={linkedin} width="40px" alt='linkedin' className='cols-span-2'/>
                   <div className='text-sky-600 font-bold'> 
                      <div>LinkedIn </div>
                      <div>Top Startup India 2023 </div>
                   </div>
                 </span>
            </div>
            <div className='font-bold md:text-5xl text-4xl'>Insurance made easy</div>
            <div className='md:tracking-widest tracking-wide text-xl py-4 mt-3 text-stone-600 ' >With Ditto, you get the best advice on insurance. Understand your policy, get answers to your burning questions, and buy insurance, all at the same place.</div>
            <Button>Book a free call</Button>
          </div>
        <div>
            <img src="https://media1.giphy.com/media/G9Fu7kinzJ4UhTKJm3/source.gif" alt="insurance"/>
        </div>
    </div>
  )
}

export default Main