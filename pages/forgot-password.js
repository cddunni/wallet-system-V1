import React from 'react'
import AuthLayouts from '../components/AuthLayouts'
import Card from '../components/Card'
import { InputBox } from '../components/InputBox'

const forgotPassword = () => {
  return (
    <AuthLayouts
      title='Forgot Password'
      description='Kindly enter your registered email to reset your passsword'
      descripStyle='lg:w-3/5'
    >
      <Card
      text='Recover Password'
      link='Return to Log In'
      textStyle='text-center'
     >
      <InputBox
        type="email"
        placeholder="johndoe@email.com"
        label="Email Address"
      />
     </Card>
    </AuthLayouts>
  )
}

export default forgotPassword