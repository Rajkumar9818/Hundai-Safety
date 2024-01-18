import React from 'react';
import '../App.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 

 


 
export function ModelBarChart({name,values}) {
const labels = name;
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
  const data = {
    labels,
    datasets: [
      {
        label: 'Dealer-wise Claims ',
      data:values,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}