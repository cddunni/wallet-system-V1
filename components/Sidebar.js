import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import walletLogoWhite from '../public/whiteLogo.png'
import homeIcon from '../public/homeIcon.png'
import transactionIcon from '../public/transactionIcon.png'
import profileIcon from '../public/profileIcon.png'

const Sidebar = () => {
  return (
    <div className='bg-blue-800 px-4 py-6 text-white h-screen w-1/6'>
      <div className='text-xl flex ml-21'>
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
      <Link href='/dashboard' >
        <a className=''>
          <div className='flex items-center mt-10 text-gray-200 active:text-white active:bg-gray-500 rounded px-3 py-2'>
            <div className='mr-3.5 ml-1.5 mt-1'>
              <Image
                src={homeIcon}
                width={15}
                height={15}
              />
            </div>
            <p className='font-light text-base'>
              Home
            </p>
          </div>
        </a>
      </Link>
      <Link href='/dashboard/transactions'>
        <a>
          <div className='flex mt-5 text-gray-200 active:text-white active:bg-gray-500 rounded px-3 py-2'>
            <div className='mr-3.5 ml-1.5 mt-0.5'>
              <Image
                src={transactionIcon}
                width={15}
                height={15}
              />
            </div>
            <p className='font-light text-base'>
              Transactions
            </p>
          </div>
        </a>
      </Link>
      <Link href='/dashboard/profile'>
        <a>
          <div className='flex mt-5 text-gray-200 active:text-white active:bg-gray-500 rounded px-3 py-2'>
            <div className='mr-3.5 ml-1.5'>
              <Image
                src={profileIcon}
                width={15}
                height={15}
              />
            </div>
            <p className='font-light text-base'>
              Profile
            </p>
          </div>
        </a>
      </Link>
    </div>  
  )
}

export default Sidebar