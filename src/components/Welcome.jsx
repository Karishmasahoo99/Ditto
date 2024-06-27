import React from 'react'
import Insurance from './Insurance'

function Welcome() {
  return (
    <div className='h-auto bg-gray-200 md:px-[200px] px-4 py-[20px] md:py-[50px]'>
        <h5 className='uppercase text-sky-600 tracking-wide text-center font-bold pt-20 mb-4'>WELCOME TO THE DITTO UNIVERSE</h5>
        <h3 className='text-center font-bold text-3xl mb-4'>What we do</h3>
        <p className='text-gray-600 tracking-wide text-center text-xl my-4'>We help you choose the best policy for your needs. We help you buy the policy. And we help you with claims if you ever have to use the policy. Basically, we do everything.</p>

        <div className='md:flex items-center justify-between px-[120px] mt-14 gap-6 space-y-3 '>
            <Insurance icon="https://cdn-icons-png.flaticon.com/512/2300/2300438.png" title="Health Insurance" content="Cover your health related expenses by picking a comprehensive health plan. Try our easy to use platform to understand, compare and finalize a policy that best suits your needs"/>
            <Insurance icon="https://cdn-icons-png.flaticon.com/512/2237/2237686.png" title="Term Life Insurance" content="Cover your health related expenses by picking a comprehensive health plan. Try our easy to use platform to understand, compare and finalize a policy that best suits your needs"/>
        </div>
    </div>
  )
}

export default Welcome