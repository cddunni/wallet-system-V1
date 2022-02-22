import SignUpForm from '../components/SignUpForm'
import AuthLayouts from '../components/AuthLayouts'

export default function Home() {
  return (
    <AuthLayouts
      title='Create Your Account'
      description='Let’s get you started'
    >
      <SignUpForm/>
    </AuthLayouts>
  )
}
