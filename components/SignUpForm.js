import Link from 'next/link'
import React from 'react'
import Card from './Card'
import { InputBox } from './InputBox'


const SignUpForm = () => {
  return (
    <Card 
      text='Create Account' 
      question='Already have an account?' 
      link='Sign In'
    >
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
    </Card>
  )
}

export default SignUpForm