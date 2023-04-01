import React from 'react'
import { RxCross1 } from "react-icons/Rx";

export const cancelData = [
  {
    id: 1 ,
    name: "ยกเลิก"
  },
  {
    id: 2 ,
    name: "cancel"
  },
  {
    id: 3 ,
    name: "หยุด"
  }
]

export default function entitles() {
  return (
    <>
      <p className='text-3xl ml-5 my-5'>Phrase</p>
      <div className='flex flex-row mx-5 my-5 w-full'>
        <div className='w-1/3 font-bold text-font-h'>
          VALUE
        </div>
        <div className='flex-1 font-bold text-font-h'>
          SYNONYMS
        </div>
      </div>
      <div className="border-b-2 border-gray-200 m-5" ></div>
      <div className='flex flex-row ml-5 w-full'>
        <div className='w-1/3'>
          cancel
        </div>
        <div className='flex-auto'>
          <ul className='flex flex-wrap'>
            {cancelData.map((item, index) => {
              return (
                <li key={index} className='mx-2 mb-3'>
                  <div className='border-2 px-5 py-2 text-gray-400 rounded hover:bg-gray-200'>
                   {item.name} 
                   <button className='ml-2 scale-90 align-middle'><RxCross1/></button>
                  </div>
                </li>
              )
            })}
            <button className='mx-2'>Add word</button>
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 m-5" ></div>
    </>
  )
}
