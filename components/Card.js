import Link from 'next/link'
import React from 'react'

const Card = ({children, text, question, link, textStyle, btnDisplay, cardStyle, pageRoute }) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-250 px-8 pt-5 pb-10 max-w-33 ${cardStyle}`}>
      <>
        {children}
      </>
      <div>
        <button className={`bg-blue-750 w-full mt-6 hover:bg-blue-dark text-white p-3 rounded focus:outline-none focus:shadow-outline ${btnDisplay}`} type="button">
          {text}
        </button>
        <p className={`text-gray-350 mt-5 ${textStyle}`}>{question} <Link href={`${pageRoute}`}><a className='text-blue-750 no-underline'>{link}</a></Link></p>
      </div>
    </div>
  )
}

export default Card