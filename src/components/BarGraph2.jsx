import React, { useEffect, useState } from 'react';
import {Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js/auto';

import Records from './airline_delay.json';
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip);

const BarGraph2 = () => {
  // Extracting unique years and month from the data

  let yearGroup = [];
  
  Records && Records.forEach((item) => {
    yearGroup.push(item.year);

  });
  // ... is used to convert the Set object back into an array
  const uniqueYears= [...new Set(yearGroup)];
  
  let tot2019 = [];
  let tot2020 = [];

  const filtered2019 = Records.forEach((item) => {if (item.year===2019) {tot2019.push(parseFloat(item.arr_delay))}
  else if (item.year===2020) {tot2020.push(parseFloat(item.arr_delay))}})

  let totalMinutesDelayed2019 = 0
  tot2019.forEach((item) => {if (item){totalMinutesDelayed2019 += item}})
    let totalMinutesDelayed2020 = 0
    tot2020.forEach((item) => {if (item){totalMinutesDelayed2020 += item}})

// defining DATA SETS AND OPTIONS
    const chartData = {
        labels: uniqueYears,
        datasets: [{
            label: 'Arrival Delays',
            data: [totalMinutesDelayed2019/60, totalMinutesDelayed2020/60],
            fill: false,
            borderColor: '#08223c;', // Blue text color for the line graph
            backgroundColor: '#08223c',//'rgba(0, 123, 255, 0.2)', // Blue bar color with transparency
            borderWidth: 1,
          }]
        };   

        const options = {
            scales: {
              x: {
                type: 'category',
                labels: uniqueYears,
              },
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: 'black', // Black color for legend text
                },
              },
            },
          };
    return (
        <>
        <h2>Total Arrival Delays(Hours)</h2>
        <Bar data={chartData} />

        </>

    )
    }

export default BarGraph2;
