import React from 'react'
import Image from 'next/image'
import {RiNotificationLine} from 'react-icons/ri'
const Header = () => {
  return (
      <div className='flex items-center justify-end'>
        <RiNotificationLine
          className='text-xl'
        />
        <p>Kingsley Omin</p>
        <div className='bg-gray-450 rounded-full w-9 h-9 text-center p-1'>
          <p className='mt-px'>KO</p>
        </div>
      </div>
  )
}

export default Header