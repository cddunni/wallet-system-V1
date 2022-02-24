import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import walletLogoWhite from '../public/whiteLogo.png'
import homeIcon from '../public/homeIcon.png'
import transactionIcon from '../public/transactionIcon.png'
import profileIcon from '../public/profileIcon.png'

const sidebar = () => {
  return (
    <div className='bg-blue-800 px-9 py-6 text-white'>
      <div className='text-xl flex ml-0.5'>
        <div className='mt-0.5'>
          <Image
            src={walletLogoWhite}
            alt='white Logo'
          />
        </div>
          <p className='ml-1.7'>
            Wallet
          </p>
      </div>
      <Link href='/dashboard'>
        <a>
          <div className='flex mt-10'>
            <div className='mr-3.5'>
              <Image
                src={homeIcon}
              />
            </div>
            <p className='text-gray-200 font-light text-sm'>
              Home
            </p>
          </div>
        </a>
      </Link>
      <Link href='/dashboard/transactions'>
        <a>
          <div className='flex mt-5'>
            <div className='mr-3.5'>
              <Image
                src={transactionIcon}
              />
            </div>
            <p className='text-gray-200 font-light text-sm'>
              Transactions
            </p>
          </div>
        </a>
      </Link>
      <Link href='/dashboard/profile'>
        <a>
          <div className='flex mt-5'>
            <div className='mr-3.5'>
              <Image
                src={profileIcon}
              />
            </div>
            <p className='text-gray-200 font-light text-sm'>
              Profile
            </p>
          </div>
        </a>
      </Link>
    </div>  
  )
}

export default sidebar