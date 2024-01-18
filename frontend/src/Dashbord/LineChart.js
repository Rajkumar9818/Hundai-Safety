import React from 'react';
import '../App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
 
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
 
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
 
const labels = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const Data=[105,85,45,60,64,42,44];
const Data2=[75,115,76,51,50,80,60];
const Data3=[55,64,52,60,47,60,62];
 
export const data = {
  labels,
  datasets: [
    {
      label: 'Control diraction/Path ',
      data: Data,
      borderColor: 'rgba(255, 0, 0, 0.8);',
      backgroundColor: 'rgba(255, 0, 0, 0.8);',
    },
    {
      label: 'Control Speed',
      data: Data2,
      borderColor: 'rgb(290, 290, 0)',
      backgroundColor: 'rgba(290, 290, 0)',
    },
    {
        label: 'Loss of Propulsion',
        data: Data3,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
  ],
};
 
export function LineChart() {
  return <Line options={options} data={data} />;
}