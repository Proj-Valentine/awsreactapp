import React, { useEffect, useState } from 'react';
import { Pie,Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js/auto';

import Records from './airline_delay.json';
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip);


const PieChart = () => {

    // let arr_delay = [];
    let carrier_delay = [];
    let weather_delay = [];
    let nas_delay = [];
    let security_delay = [];
    let late_aircraft_delay = [];
    
    Records && Records.map((item) => {
        // arr_delay.push(item.arr_delay);
        carrier_delay.push(item.carrier_delay);
        weather_delay.push(item.weather_delay);
        nas_delay.push(item.nas_delay);
        security_delay.push(item.security_delay);
        late_aircraft_delay.push(item.late_aircraft_delay);
        });

        // let filteredAirDelay = arr_delay.filter(item => typeof item ==='number' && item > 0);
        let filteredCarrierDelay = carrier_delay.filter(item => typeof item ==='number' && item > 0);
        let filteredWeatherDelay = weather_delay.filter(item => typeof item ==='number' && item > 0);
        let filteredNASDelay = nas_delay.filter(item => typeof item ==='number' && item > 0);
        let filteredSecurityDelay = security_delay.filter(item => typeof item ==='number' && item > 0);
        let filteredLateAircraftDelay = late_aircraft_delay.filter(item => typeof item ==='number' && item > 0);

        // let totalFilteredAirDelay = filteredAirDelay.reduce((a, b) => a + b, 0);
        let totalFilteredCarrierDelay = filteredCarrierDelay.reduce((a, b) => a + b, 0);
        let totalFilteredWeatherDelay = filteredWeatherDelay.reduce((a, b) => a + b, 0);
        let totalFilteredNASDelay = filteredNASDelay.reduce((a, b) => a + b, 0);
        let totalFilteredSecurityDelay = filteredSecurityDelay.reduce((a, b) => a + b, 0);  
        let totalFilteredLateAircraftDelay = filteredLateAircraftDelay.reduce((a, b) => a + b, 0);  

        let totfilteredDel = parseFloat(totalFilteredCarrierDelay/60);
        let totfilteredWeather = parseFloat(totalFilteredWeatherDelay/60);
        let totfilteredNasDel = parseFloat(totalFilteredNASDelay/60);   
        let totfilteredSecDel = parseFloat(totalFilteredSecurityDelay/60);
        let totfilteredLateAirDel = parseFloat(totalFilteredLateAircraftDelay/60);

        const dataList = [totfilteredDel, totfilteredWeather, totfilteredNasDel, totfilteredSecDel, totfilteredLateAirDel];

    const chartData = {
        labels: ['Carrier Delay', 'Weather Delay', 'NAS Delay', 'Security Delay', 'Late Aircraft Delay'],
        datasets: [{
            label: 'Arrival Delays by delay Category',
            data: dataList,
            borderWidth: 1,
            backgroundColor: [
              '#08223c', // Deep Blue
              '#004080', // Dark Blue
              '#0066cc', // Medium Blue
              'green', // Bright Blue
              'red', // Light Bright Blue
              // '#66b3ff', // Light Medium Blue
            ],
            hoverBackgroundColor: [
              '#08223c', // Deep Blue
              '#004080', // Dark Blue
              '#0066cc', // Medium Blue
              'green', // Bright Blue
              'red', // Light Bright Blue
              // 'rgba(255, 159, 64, 0.4)',
            ],
          }]
        };   

        const options = {
            scales: {
              x: {
                type: 'category',
                labels: [ 'Carrier Delay', 'Weather Delay', 'NAS Delay', 'Security Delay', 'Late Aircraft Delay'],
                display: false,
              },
              y: {
                beginAtZero: true,
                display: false,
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
            <h3>Arrival Delays by Delay Category(Hours)</h3>
            <Pie data={chartData} options ={options}/>
            </>
          )
};

export default PieChart;
