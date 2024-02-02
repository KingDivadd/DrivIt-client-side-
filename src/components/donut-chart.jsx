import React from "react"
import Box from '@mui/material/Box';

import {Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale, } from 'chart.js'

import {Doughnut} from 'react-chartjs-2'

ChartJS.register( BarElement, Tooltip, Legend, CategoryScale, LinearScale)


const DoughnutChart = ()=>{
    <Doughnut />

}

export default DoughnutChart
