import Link from 'next/link'
import React from 'react'
import { InputBox } from './InputBox'


const Card = () => {
  return (
    <div className='bg-white rounded-lg border border-gray-250 px-8 pt-5 pb-10 max-w-md'>
      <div className='grid gap-4 grid-cols-2'>
        <InputBox
          type="text"
          placeholder="John"
          label="First Name"
        />
        <InputBox
          type="text"
          placeholder="Doe"
          label="Last Name"
        />
      </div>
      <InputBox
        type="email"
        placeholder="johndoe@email.com"
        label="Email Address"
      />
      <InputBox
        type="email"
        placeholder="080 1234 5678"
        label="Phone Number"
      />
      <InputBox
        type="password"
        label="Password"
      />
      <div>
        <button className="bg-blue-750 w-full mt-6 hover:bg-blue-dark text-white p-3 rounded focus:outline-none focus:shadow-outline" type="button">
        Create Account
        </button>
        <p className='text-gray-350 mt-5'>Already have an account? <Link href='/sign-up'><a className='text-blue-750 no-underline'>Sign In</a></Link></p>
      </div>
    </div>
  )
}

export default Card