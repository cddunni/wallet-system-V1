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
      <p className='text-blue-750 mt-6'>Forgot Password?</p>
     </Card>
    </AuthLayouts>
  )
}

export default signIn