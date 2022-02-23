import React from 'react'
import Image from 'next/image'
import AuthLayouts from '../components/AuthLayouts'
import Card from '../components/Card'
import inbox from '../public/inbox.png'

const checkInbox = () => {
  return (
    <AuthLayouts
      title='Reset Password'
      description='we have sent a reset link to your registered email address.'
      descripStyle='lg:w-8/12'
    >
      <div className={`bg-white rounded-lg border border-gray-250 px-7 py-10 max-w-md text-center`}>
        <Image
          src={inbox}
          alt='check Inbox'
          className='mt-2'
          width={120}
          height={120}
        />
        <div className='mt-7'>
          <p className='text-gray-150 text-2xl font-medium'>Check your Inbox</p>
          <p className='text-gray-400'>Password reset link has been sent to your inbox</p>
        </div>
        </div>
    </AuthLayouts>
  )
}

export default checkInbox