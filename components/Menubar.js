import React from 'react'
import Link from 'next/link'
import Styles from '../src/styles/Home.module.css'
import { VscGraph } from "react-icons/vsc";
import { CiCircleList } from "react-icons/ci";
import { BiConversation } from "react-icons/Bi";
import { BsBookshelf } from "react-icons/Bs"
import { TiFlowMerge } from "react-icons/Ti"
import { SlDiamond } from "react-icons/Sl";
import { TfiWorld } from "react-icons/Tfi";

export const menuData = [
  {
    title: "DATA ANALYTICS",
    path: "/dataanalytics",
    icon: <VscGraph />,
    color: "bg-menu-1"
  },
  {
    title: "INTENTS",
    path: "/intents",
    icon: <CiCircleList />,
    color: "bg-menu-2"
  },
  {
    title: "ENTITLES",
    path: "/entitles",
    icon: <BsBookshelf/>,
    color: "bg-menu-3"
  },
  {
    title: "CONVERSATION FLOW",
    path: "/conversation",
    icon: <BiConversation />,
    color: "bg-menu-4"
  },
  {
    title: "BUSINESS LOGIC",
    path: "/business",
    icon: <TiFlowMerge/>,
    color: "bg-menu-5"
  },
  {
    title: "RULE-BASED",
    path: "/rulebase",
    icon: <SlDiamond />,
    color: "bg-menu-6"
  },
  {
    title: "NLP",
    path: "/nlp",
    icon: <TfiWorld />,
    color: "bg-menu-7"
  },

]

export default function Menubar() {
  return (
    <>
      <div className='w-1/5 h-screen border-2'>
        <p className={`pt-5 text-center`}> ADMIN CHATBOT </p>
        <div className="border-b-2 border-gray-300 m-5" ></div>
        <ul>
          {menuData.map((item, index) => {
            return (
              <li key={index}>
                <div className={`${Styles.btnM} ${item.color} m-4 p-5 hover:bg-gray-400`}>
                  <Link href={item.path} className='flex flex-row'> 
                    <div className="pt-1 mr-3 scale-125">{item.icon} </div> 
                    <div> {item.title} </div>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </>

  )
}

