import React from 'react'
import PinInputField from '../components/PinInputField'
import AuthLayouts from '../components/AuthLayouts'

const createPin = () => {
  return (
    <AuthLayouts
      title='Create Pin'
      description='Create pin to enable transfer'
    >
      <div className='bg-white rounded-lg border border-gray-250 px-7 py-10 max-w-md text-center'>
        <p className='text-xl font-medium w-3/5 mx-auto'>Kindly create your transaction Pin </p>
        <form method='post' action='' className='flex justify-center items-center mt-6'>
          <PinInputField spacing='mr-6' />
          <PinInputField spacing='mr-6' />
          <PinInputField spacing='mr-6' />
          <PinInputField/>
        </form>
        <button className="bg-blue-750 w-full mt-6 hover:bg-blue-dark text-white p-3 rounded focus:outline-none focus:shadow-outline" type="button">
          Create Pin
        </button>
      </div>
    </AuthLayouts>  
  )
}

export default createPin