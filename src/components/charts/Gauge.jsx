import { Chart, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { higher } from '../../service/higherNumberGetter';
import { useState } from 'react';
import { useEffect } from 'react';
import { dataExtraction, months } from './Visits';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function Gauge({props}) {
    const [loading, setLoading] = useState(true)
    const [yValues, setYValues] = useState([])
    const [xValues, setXValues] = useState([])
    const barColors = [
        "#51449d",
        "#dc3635",
        "#e3e3e3",
        "#00cf9d",
        "#51449d",
        "#dc3635",
    ];
    useEffect(() => {
        (async () => {
            setYValues(await dataExtraction("news"))
        })()
        setLoading(false)
    }, [loading])
    useEffect(() => {
        (() => {
            const nowMonth = (new Date()).getMonth()
            setXValues(months.slice(nowMonth - 5, nowMonth + 1))
        })()
    }, [])
    // const array = yValues;
    let colors = barColors;
    // const index = array.indexOf(higher(array));
    // colors[index] = props.color;
    let data = {
        labels: xValues,
        datasets: [
            {
                backgroundColor: colors,
                data: yValues,
            },
        ],
    };
    const config = {
        // type: "circularGauge",
        data,
        options: {
            scales: {
                y:{
                    beginAtZero: true
                }
            }
        }, 
        circumference: 180,
        rotation: -90,
        spacing: 1
    }
  return (
    <>
        <Doughnut data={data} options={config} />
    </>
  )
}
