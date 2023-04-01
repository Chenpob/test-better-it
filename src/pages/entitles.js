import React from 'react'
import { RxCross1 } from "react-icons/Rx";
import api from '../../service/api';
import { useRouter } from 'next/router';

export async function getServerSideProps(){
  const res = await fetch("http://localhost:4000/words/")
  const data = await res.json()
  // console.log(data)
  return{
    props:{words:data}
  }
}

export default function Entitles({words}) {
  
  const router = useRouter();

  async function deleteWord(word){
    const res = await api.delete(`words/${word}`)
    router.push('/entitles')
    // console.log(res)
    // console.log(res.data)
  }

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
            {words.map((item, index) => {
              if(item.word_type === "cancel"){
                return (
                <li key={item._id} className='mx-2 mb-3'>
                  <div className='border-2 px-5 py-2 text-gray-400 rounded hover:bg-gray-200'>
                   {item.word_name} 
                   <button onClick={ e => deleteWord(item._id) }  className='ml-2 scale-90 align-middle'><RxCross1/></button>
                  </div>
                </li>
              )
              }
            })}
            <button className='mx-2'>Add word</button>
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 m-5" ></div>

      <div className='flex flex-row ml-5 w-full'>
        <div className='w-1/3'>
          no
        </div>
        <div className='flex-auto'>
          <ul className='flex flex-wrap'>
            {words.map((item, index) => {
              if(item.word_type === "no"){
                return (
                <li key={item._id} className='mx-2 mb-3'>
                  <div className='border-2 px-5 py-2 text-gray-400 rounded hover:bg-gray-200'>
                   {item.word_name} 
                   <button className='ml-2 scale-90 align-middle'><RxCross1/></button>
                  </div>
                </li>
              )
              }
            })}
            <button className='mx-2'>Add word</button>
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 m-5" ></div>


      <div className='flex flex-row ml-5 w-full'>
        <div className='w-1/3'>
          yes
        </div>
        <div className='flex-auto'>
          <ul className='flex flex-wrap'>
            {words.map((item, index) => {
              if(item.word_type === "yes"){
                return (
                <li key={item._id} className='mx-2 mb-3'>
                  <div className='border-2 px-5 py-2 text-gray-400 rounded hover:bg-gray-200'>
                   {item.word_name} 
                   <button className='ml-2 scale-90 align-middle'><RxCross1/></button>
                  </div>
                </li>
              )
              }
            })}
            <button className='mx-2'>Add word</button>
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 m-5" ></div>

    </>
  )
}
