import React from 'react'

const GridComponent = ({title, content}) => {
  return (
    <div className='p-4 '>
        <h2 className='text-2xl font-bold my-4'>{title}</h2>
        <p className='tracking-wide mb-4'>{content}</p>
    </div>
  )
}

export default GridComponent