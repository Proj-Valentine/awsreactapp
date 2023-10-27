import React from 'react';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

import Records from './airline_delay.json';
import { type } from '@testing-library/user-event/dist/type';
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip);

const LineChart = () => {

    // declaring the month array

    let carrierNameGroup = [];
    Records && Records.forEach((item) => {
      carrierNameGroup.push(item.carrier_name);
    });
    // ... is used to convert the Set object back into an array
    const uniqueCarrierNames = [...new Set(carrierNameGroup)];
    const firstWords = uniqueCarrierNames.map(carrierName => carrierName.split(' ')[0]+'Air ');
    const sortedFirstWords = firstWords.sort((a, b) => a.localeCompare(b));
    // const carrierRename = sortedCarriers.forEach((item) => item.split(" "));

    // delcaring monthly total values

    let Cnames = [
    'Endeavor Air Inc'
    ,'American Airlines Inc'
    ,'Alaska Airlines Inc'
    ,'JetBlue Airways'
    ,'Delta Air Lines Inc'
    ,'Frontier Airlines Inc'
    ,'Allegiant Air'
    ,'Hawaiian Airlines Inc'
    ,'Envoy Air'
    ,'Spirit Air Lines'
    ,'PSA Airlines Inc'
    ,'SkyWest Airlines Inc'
    ,'Republic Airline'
    ,'United Air Lines Inc'
    ,'Southwest Airlines Co'
    ,'Mesa Airlines Inc'
    ,'ExpressJet Airlines LLC']

    let CnameFirst = [];

// Split and store the first word of each carrier name
Cnames.forEach(item => {
  const firstWord = `${item.split(" ")[0]}_Air`;
  CnameFirst.push(firstWord);
});



    let EndeavorAirInc = []
    let AmericanAirlinesInc = []
    let AlaskaAirlinesInc = []
    let JetBlueAirways = []
    let DeltaAirLinesInc = []
    let FrontierAirlinesInc = []
    let AllegiantAir = []
    let HawaiianAirlinesInc = []
    let EnvoyAir = []
    let SpiritAirLines = []
    let PSAAirlinesInc = []
    let SkyWestAirlinesInc = []
    let RepublicAirline = []
    let UnitedAirLinesInc = []
    let SouthwestAirlinesCo = []
    let MesaAirlinesInc = []
    let ExpressJetAirlinesLLC = []
    

Records && Records.forEach((item) => {
  if (item.carrier_name === 'Endeavor Air Inc.' && item.year === 2019) {EndeavorAirInc.push(item.arr_delay)}
  else if (item.carrier_name === 'American Airlines Inc.' && item.year === 2019) {AmericanAirlinesInc.push(item.arr_delay)}    
  else if (item.carrier_name === 'Alaska Airlines Inc.' && item.year === 2019) {AlaskaAirlinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'JetBlue Airways' && item.year === 2019) {JetBlueAirways.push(item.arr_delay)}
  else if (item.carrier_name === 'Delta Air Lines Inc.' && item.year === 2019) {DeltaAirLinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'Frontier Airlines Inc.' && item.year === 2019) {FrontierAirlinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'Allegiant Air' && item.year === 2019) {AllegiantAir.push(item.arr_delay)}
  else if (item.carrier_name === 'Hawaiian Airlines Inc.' && item.year === 2019) {HawaiianAirlinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'Envoy Air' && item.year === 2019) {EnvoyAir.push(item.arr_delay)}
  else if (item.carrier_name === 'Spirit Air Lines' && item.year === 2019) {SpiritAirLines.push(item.arr_delay)}
  else if (item.carrier_name === 'PSA Airlines Inc.' && item.year === 2019) {PSAAirlinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'SkyWest Airlines Inc.' && item.year === 2019) {SkyWestAirlinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'Republic Airline' && item.year === 2019) {RepublicAirline.push(item.arr_delay)}
  else if (item.carrier_name === 'United Air Lines Inc.' && item.year === 2019) {UnitedAirLinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'Southwest Airlines Co.' && item.year === 2019) {SouthwestAirlinesCo.push(item.arr_delay)}
  else if (item.carrier_name === 'Mesa Airlines Inc.' && item.year === 2019) {MesaAirlinesInc.push(item.arr_delay)}
  else if (item.carrier_name === 'ExpressJet Airlines LLC' && item.year === 2019) {ExpressJetAirlinesLLC.push(item.arr_delay)}
});
   
let EndeavorAirInc2019Total = EndeavorAirInc.reduce((a, b) => a + b, 0)
let AmericanAirlinesInc2019Total = AmericanAirlinesInc.reduce((a, b) => a + b, 0)
let AlaskaAirlinesInc2019Total = AlaskaAirlinesInc.reduce((a, b) => a + b, 0)
let JetBlueAirways2019Total = JetBlueAirways.reduce((a, b) => a + b, 0)
let DeltaAirLinesInc2019Total = DeltaAirLinesInc.reduce((a, b) => a + b, 0)
let FrontierAirlinesInc2019Total = FrontierAirlinesInc.reduce((a, b) => a + b, 0)
let AllegiantAir2019Total = AllegiantAir.reduce((a, b) => a + b, 0)
let HawaiianAirlinesInc2019Total = HawaiianAirlinesInc.reduce((a, b) => a + b, 0)
let EnvoyAir2019Total = EnvoyAir.reduce((a, b) => a + b, 0)
let SpiritAirLines2019Total = SpiritAirLines.reduce((a, b) => a + b, 0)
let PSAAirlinesInc2019Total = PSAAirlinesInc.reduce((a, b) => a + b, 0)
let SkyWestAirlinesInc2019Total = SkyWestAirlinesInc.reduce((a, b) => a + b, 0)
let RepublicAirline2019Total = RepublicAirline.reduce((a, b) => a + b, 0)
let UnitedAirLinesInc2019Total = UnitedAirLinesInc.reduce((a, b) => a + b, 0)
let SouthwestAirlinesCo2019Total = SouthwestAirlinesCo.reduce((a, b) => a + b, 0)
let MesaAirlinesInc2019Total = MesaAirlinesInc.reduce((a, b) => a + b, 0)
let ExpressJetAirlinesLLC2019Total = ExpressJetAirlinesLLC.reduce((a, b) => a + b, 0)

const totalArrDelay2019 = [ EndeavorAirInc2019Total,AmericanAirlinesInc2019Total,AlaskaAirlinesInc2019Total,JetBlueAirways2019Total,DeltaAirLinesInc2019Total,FrontierAirlinesInc2019Total,AllegiantAir2019Total,HawaiianAirlinesInc2019Total,EnvoyAir2019Total,SpiritAirLines2019Total,PSAAirlinesInc2019Total,SkyWestAirlinesInc2019Total,RepublicAirline2019Total,UnitedAirLinesInc2019Total,SouthwestAirlinesCo2019Total,MesaAirlinesInc2019Total,ExpressJetAirlinesLLC2019Total]

let new2019 = totalArrDelay2019.map((item) => item/60)

let EndeavorAirInc2020 = []
let AmericanAirlinesInc2020 = []
let AlaskaAirlinesInc2020 = []
let JetBlueAirways2020 = []
let DeltaAirLinesInc2020 = []
let FrontierAirlinesInc2020 = []
let AllegiantAir2020 = []
let HawaiianAirlinesInc2020 = []
let EnvoyAir2020 = []
let SpiritAirLines2020 = []
let PSAAirlinesInc2020 = []
let SkyWestAirlinesInc2020 = []
let RepublicAirline2020 = []
let UnitedAirLinesInc2020 = []
let SouthwestAirlinesCo2020 = []
let MesaAirlinesInc2020 = []
let ExpressJetAirlinesLLC2020 = []

Records && Records.forEach((item) => {
  if (item.carrier_name === 'Endeavor Air Inc.' && item.year === 2020) {EndeavorAirInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'American Airlines Inc.' && item.year === 2020) {AmericanAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Alaska Airlines Inc.' && item.year === 2020) {AlaskaAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'JetBlue Airways' && item.year === 2020) {JetBlueAirways2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Delta Air Lines Inc.' && item.year === 2020) {DeltaAirLinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Frontier Airlines Inc.' && item.year === 2020) {FrontierAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Allegiant Air' && item.year === 2020) {AllegiantAir2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Hawaiian Airlines Inc.' && item.year === 2020) {HawaiianAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Envoy Air' && item.year === 2020) {EnvoyAir2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Spirit Air Lines' && item.year === 2020) {SpiritAirLines2020.push(item.arr_delay)}
  else if (item.carrier_name === 'PSA Airlines Inc.' && item.year === 2020) {PSAAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'SkyWest Airlines Inc.' && item.year === 2020) {SkyWestAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Republic Airline' && item.year === 2020) {RepublicAirline2020.push(item.arr_delay)}
  else if (item.carrier_name === 'United Air Lines Inc.' && item.year === 2020) {UnitedAirLinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Southwest Airlines Co.' && item.year === 2020) {SouthwestAirlinesCo2020.push(item.arr_delay)}
  else if (item.carrier_name === 'Mesa Airlines Inc.' && item.year === 2020) {MesaAirlinesInc2020.push(item.arr_delay)}
  else if (item.carrier_name === 'ExpressJet Airlines LLC' && item.year === 2020) {ExpressJetAirlinesLLC2020.push(item.arr_delay)}

})

let EndeavorAirInc2020Total = EndeavorAirInc2020.reduce((a, b) => a + b, 0)
let AmericanAirlinesInc2020Total = AmericanAirlinesInc2020.reduce((a, b) => a + b, 0)
let AlaskaAirlinesInc2020Total = AlaskaAirlinesInc2020.reduce((a, b) => a + b, 0)
let JetBlueAirways2020Total = JetBlueAirways2020.reduce((a, b) => a + b, 0)
let DeltaAirLinesInc2020Total = DeltaAirLinesInc2020.reduce((a, b) => a + b, 0)
let FrontierAirlinesInc2020Total = FrontierAirlinesInc2020.reduce((a, b) => a + b, 0)
let AllegiantAir2020Total = AllegiantAir2020.reduce((a, b) => a + b, 0)
let HawaiianAirlinesInc2020Total = HawaiianAirlinesInc2020.reduce((a, b) => a + b, 0)
let EnvoyAir2020Total = EnvoyAir2020.reduce((a, b) => a + b, 0)
let SpiritAirLines2020Total = SpiritAirLines2020.reduce((a, b) => a + b, 0)
let PSAAirlinesInc2020Total = PSAAirlinesInc2020.reduce((a, b) => a + b, 0)
let SkyWestAirlinesInc2020Total = SkyWestAirlinesInc2020.reduce((a, b) => a + b, 0)
let RepublicAirline2020Total = RepublicAirline2020.reduce((a, b) => a + b, 0)
let UnitedAirLinesInc2020Total = UnitedAirLinesInc2020.reduce((a, b) => a + b, 0)
let SouthwestAirlinesCo2020Total = SouthwestAirlinesCo2020.reduce((a, b) => a + b, 0)
let MesaAirlinesInc2020Total = MesaAirlinesInc2020.reduce((a, b) => a + b, 0)
let ExpressJetAirlinesLLC2020Total = ExpressJetAirlinesLLC2020.reduce((a, b) => a + b, 0)

const totalArrDelay2020 = [ EndeavorAirInc2020Total,AmericanAirlinesInc2020Total,AlaskaAirlinesInc2020Total,JetBlueAirways2020Total,DeltaAirLinesInc2020Total,FrontierAirlinesInc2020Total,AllegiantAir2020Total,HawaiianAirlinesInc2020Total,EnvoyAir2020Total,SpiritAirLines2020Total,PSAAirlinesInc2020Total,SkyWestAirlinesInc2020Total,RepublicAirline2020Total,UnitedAirLinesInc2020Total,SouthwestAirlinesCo2020Total,MesaAirlinesInc2020Total,ExpressJetAirlinesLLC2020Total]
let new2020 = totalArrDelay2020.map((item) => item/60)


    const data = { 
        labels:CnameFirst,
        datasets: [{
            label: '2020',
            data: new2020,
            tension: 0.3,
            backgroundColor: 'rgba(0, 123, 255, 0.4)', // Lighter blue bar color with transparency
            borderColor: '#007bff', // Blue border color for the bars
            borderWidth: 1
        },
      {
        label: '2019',
        data: new2019,
        tension: 0.3,
        borderColor: '#08223c;', // Blue text color for the line graph
        backgroundColor: '#08223c',//'rgba(0, 123, 255, 0.2)', // Blue bar color with transparency
        borderWidth: 1,
      }] 
    };
    const options = {
      scales: {
        x: {
          type: 'category',
          labels: CnameFirst,
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
      <div>
        {/* <h2>Total Arrival Delays by Carriers (Hours)</h2> */}
        <Bar data ={data} options={options}/> 
    </div>
    );
}

export default LineChart;