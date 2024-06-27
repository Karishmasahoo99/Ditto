import React from 'react'
import GridComponent from './GridComponent'
import Button from './Button'

function Welcome() {
  return (
    <div className='h-screen bg-sky-100 p-2 md:pl-[200px] pl-4 py-[20px] md:py-[50px]'>
        <p className='uppercase text-red-300 tracking-wide pt-20 mb-4 hidden md:block'>GOODBYE PUSHY SALESPEOPLE</p>

        <div className='md:grid grid-cols-12 mt-4 gap-6 space-y-3 '>
            <h3 className='text-center md:text-left font-bold text-5xl mb-8 col-span-4 text-sky-700'>Talk to a real advisor now!</h3>
            <div className='col-span-8 bg-stone-100 p-11 rounded-lg'>
                <p className='text-4xl font-bold mb-4'>Advice you can count on</p>
                <p className='text-gray-600 text-lg tracking-wide'>When you book a call with Ditto, you get access to the best insurance advisors in town.</p>
                <div className='md:grid grid-cols-2'>
                    <GridComponent title="No salespeople" content="You won't be talking to pushy salesmen. You'll only be engaging with exceptional advisors."/>
                    <GridComponent title="No spam ever" content="We won't call you when you least expect it. Ditto Hotline comes with a spam-free guarantee"/>
                    <GridComponent title="30 min consultation" content="Good advice takes time. And you will have our undivided attention for at least 30 mins."/>
                    <GridComponent title="It's free" content="Our consultations are free and we won't harass you to buy from Ditto"/>
                </div>
                <Button>Book a free call</Button>
            </div>
        </div>
    </div>
  )
}

export default Welcome