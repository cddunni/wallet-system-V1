import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar/>
      <Header/>
    </div>
  )
}
