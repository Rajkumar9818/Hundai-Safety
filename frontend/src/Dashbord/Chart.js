import React from 'react'
import { Bar } from 'react-chartjs-2';
const Chart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Monthly Sales',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [{
            type: 'linear',
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      };
    
      return (
        <div>
          <h2>Monthly Sales Chart</h2>
          <Bar data={data} options={options} />
        </div>
      );
}

export default Chart
