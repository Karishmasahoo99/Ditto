import React from 'react'

function Navigation() {
  return (
    <div className='flex items-center justify-between md:px-[200px] px-4 py-3'>
        <div>
            <img src="https://joinditto.in/static/2ef89b7a1f6efbff596990cfc23a80e7/72740/logo.png" width="80px" alt="ditto"/>
        </div>
        <div class="flex items-center justify-center gap-8">
            <span className='hidden md:block'>Health Insurance</span>
            <span className='hidden md:block'>Life Insurance</span>
            <span className='hidden md:block'>Claims</span>
            <span className='hidden md:block'>Careers</span>
            <div className='bg-blue-500 text-white rounded-md font-bold p-2'>Buy Insurance</div>
            <div className='bg-stone-400 p-2 hidden rounded-md md:block'>Hotlines</div>

        </div>

    </div>
  )
}

export default Navigation