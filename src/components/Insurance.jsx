import React from 'react'
import Button from './Button'

function Insurance({icon, title, content}) {
  return (
    <div className='p-8 border rounded-lg bg-stone-100'>
        <img src={icon} alt="hi-img" width="40" className='shadow-xl my-4 rounded-full'/>
        <h2 className='text-2xl font-bold my-4'>{title}</h2>
        <p className='tracking-wide mb-4'>{content}</p>
        <Button>Book a call</Button>
    </div>
  )
}

export default Insurance