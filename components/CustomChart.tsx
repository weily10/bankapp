"use client"
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


Chartjs.register(ArcElement, Tooltip, Legend)

const CustomChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 233, 234],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['bank 1', 'bank 2', 'bank 3']
  }
  return <Doughnut data={data} options={{
    cutout: '50%',
    plugins: {
      legend: {
        display: false
      }
    }
  }} />

}

export default CustomChart