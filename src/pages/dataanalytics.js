import React, { useState } from 'react'
import api from '../../service/api'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export async function getServerSideProps() {
  const res = await api.get('intents')
  const data = res.data
  // console.log(data)
  return {
    props: { intents: data }
  }
}


export default function Dataanalytics({intents}) {

  const [intentData, setIntentData] = useState({
    labels: intents.map((data) => data.intent),
    datasets: [
      {
        labels: "Intent",
        data: intents.map((data) => data.point),
        backgroundColor: ['rgba(25,129,89,255)',
                          'rgba(67,160,105,255)',
                          'rgba(107,191,119,255)',
                          'rgba(148,223,133,255)',
                          'rgba(192,255,146,255)',
                          'rgba(0,158,143,255)'],
        borderColor: 'rgba(255,255,255,255)',
        borderWidth: 1,
      }
    ]
  })

  const [optionValue,setOptionValue] = useState({
    plugins: {
      datalabels: {
        formatter: (value) => {
          let sum=0
          intents.forEach(i => {
            sum += i.point
          });
          // console.log(sum)
          return Math.round((value/sum)*100) + '%';
        },
        display: true,
        align: 'bottom',
        borderRadius: 3,
        color: 'rgba(255,255,255,255)',
        font:{
          size:25
        }
      },
    },
  })

  return (
    <>
      <div>
        <div>
          <p className='text-3xl ml-5 my-5'>Overview</p>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='w-1/3'>
            <Pie className='scale-90' data={intentData} options={optionValue} />;
          </div>
        </div>
      </div>
    </>
  )
}
