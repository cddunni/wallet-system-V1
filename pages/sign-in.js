import Link from 'next/link'
import React from 'react'
import AuthLayouts from '../components/AuthLayouts'
import Card from '../components/Card'
import { InputBox } from '../components/InputBox'

const signIn = () => {
  return (
    <AuthLayouts
      title='Log In'
      description='Great to have you back'
    >
     <Card
      text='Log In'
      question='Don’t have an account?'
      link='Register now'
      pageRoute='/'
     >
      <InputBox
        type="email"
        placeholder="johndoe@email.com"
        label="Email Address"
      />
      <InputBox
        type="password"
        label="Password"
      />
      <p className='mt-6'>
        <Link href="/forgot-password"><a className='text-blue-750'>Forgot Password?</a></Link>
      </p>
     </Card>
    </AuthLayouts>
  )
}

export default signIn