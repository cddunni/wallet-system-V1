import React from 'react'

const PinInputField = ({spacing}) => {
  return (
      <div className={`w-12 ${spacing}`}>
        <label className='block'>
          <input
            type='password'
            className='block w-12 text-center rounded border-gray-250 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            maxLength="1"
          />
        </label>
      </div>
  )
}

export default PinInputField