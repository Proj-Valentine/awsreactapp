// Test console.log()
import React, { useEffect, useState } from 'react';
import {Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js/auto';

import Records from './airline_delay.json';
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip);


const BarGraph = () => {
    // Filter records for the years 2019 and 2020
    const records2019 = Records.filter(item => item.year === 2019);
    const records2020 = Records.filter(item => item.year === 2020);

    let var1 = []
    let var2 = []

    let r2019 = 0;
    let r2020 = 0;
    
    Records && Records.map((item) => {
        if (item.year ===2019 ) {var1.push(item.carrier_delay)}
        else if (item.year ===2020) {var2.push(item.carrier_delay)}
    });


    // var1 = var1.map((item) => (item));
    const var3 = var1.forEach((item) => r2019 += item);
    // var2 = var2.map((item) => (item));
    const var4 = var2.forEach((item) => r2020 += item);
  

    // Data for the bar chart
    const data = {
        labels: ['2019', '2020'],
        datasets: [
            {
                label: 'Sum of Arrival Delays',
                data: [var1,var2,10,20],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    // Chart options (if needed)
    const options = {
        // Your chart options here
    };

    return (
        <div>
            <h2>Comparison of Arrival Delays (2019 vs 2020)</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarGraph;
