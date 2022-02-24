import React from 'react'
import AuthLayouts from '../../components/AuthLayouts'
import Card from '../../components/Card'
import { InputBox } from '../../components/InputBox'

const resetPassword = () => {
  return (
    <AuthLayouts
    title='Reset Password'
    description='Create a unique password to keep your account protected'
    descripStyle='lg:w-3/5'
    >
      <Card
        text='Reset Password'
      >
        <InputBox
        type="password"
        label="Password"
      />
      <InputBox
        type="password"
        label="Confirm Password"
      />
      </Card>
    </AuthLayouts>
  )
}

export default resetPassword