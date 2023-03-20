import { useState, useEffect } from "react"
import styles from './barchart.module.css'

import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function Barchart () {

const [chartData, setChartData] = useState({
    datasets: []
})

const [chartOptions, setChartOptions] = useState ({})
useEffect(() => {
setChartData({
labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat",],
datasets: [
    {
        label: "Sales $",
data: [1500, 2500, 30000, 22000, 4000, 5000, 10000],
borderColor: "rgb(53, 255, 255)",
backgroundColor: "rgb(0, 255, 244, 0.4)"
    }
]
})
setChartOptions({
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Daily Revenue"
        }
    },
    maintainAspectRatio: false,
    responsive: true
})
}, [])

    return (
        <>
        <div className={styles.container}>
<Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}