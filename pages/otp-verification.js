import React from 'react'
import Link from 'next/link'
import PinInputField from '../components/PinInputField'
import AuthLayouts from '../components/AuthLayouts'

export default function otpVerification () {
  return (
    <AuthLayouts
      title='OTP Verification'
      description='A code has been sent to your email'
    >
      <div className='bg-white rounded-lg border border-gray-250 px-7 py-10 max-w-md text-center'>
        <p className='text-xl font-medium w-3/5 mx-auto'>Kindly enter your OTP to verify account</p>
        <form method='post' action='' className='flex justify-center items-center mt-6'>
          <PinInputField spacing='mr-6' />
          <PinInputField spacing='mr-6' />
          <PinInputField spacing='mr-6' />
          <PinInputField/>
        </form>
        <p className='text-gray-350 mt-6 text-center'>
          Didn’t get the code?
          <Link href='/sign-in'>
            <a className='text-blue-750 no-underline'> Resend</a>
          </Link>
        </p>
        <p className='mt-2.5 text-gray-350'>00:59</p>
      </div>
    </AuthLayouts>   
  )
}