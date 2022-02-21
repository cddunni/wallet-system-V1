import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { InputBox } from '../components/InputBox'
import WalletLogo from '../public/Union.svg'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className='bg-gray-300'>
      <div className='px-5 md:px-10 lg:px-24 h-screen lg:pt-20 pt-8'>
      <Image
        src={WalletLogo}
        alt='wallet logo'
      />
      <div className='grid gap-6 md:grid-cols-2 grid-cols-1 md:pt-20'>
        <div className="">
          <p className='lg:text-5xl text-3xl font-semibold	text-gray-150 lg:mt-16 mt-12'>Create Your Account</p>
          <p className='lg:text-xl text-lg text-gray-200 mt-1'>Let’s get you started</p>
        </div>
        <div>
          <Card/>
        </div>
      </div>
      </div>
    </div>
    
    
   
  )
}
