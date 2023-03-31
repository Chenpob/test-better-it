import React from 'react'
import Menubar from './Menubar'

export default function Layout({children}) {
  return (
    <div className='h-screen flex flex-row bg-gray-100'>
      <Menubar/>
      <div className='border-l-2 border-gray-200 flex-1 bg-white ml-10'>{children}</div>
    </div>
  )
}
