import React from 'react'
import Header from './header'
import Sidebar from './Sidebar'

export default function DashboardLayout ({children}) {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-5/6'>
          <Header/>
          <div>{children}</div>
      </div>
    </div>
  )
}
