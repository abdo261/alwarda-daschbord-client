import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const data = {
    series: [55, 45], 
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Filles', 'Garçons'], 
      
      responsive: [{
        breakpoint: 280,
        options: {
          chart: {
            width: 280
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <div className="pie-chart">
      <ReactApexChart options={data.options} series={data.series} type="pie" width="280"  />
    </div>
  );
};

export default PieChart;
