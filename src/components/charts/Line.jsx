import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Filler,
} from "chart.js";
import { dataExtraction } from "./Visits";
import { useEffect, useState } from "react";
import { months } from "./Visits";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Filler
);

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

export function LineComponent() {
  const [loading, setLoading] = useState(true)
  const [yValuesa, setYValuesa] = useState([])
  const [yValuesb, setYValuesb] = useState([])
  const [yValuesc, setYValuesc] = useState([])
  const [labels, setXValues] = useState([])

  useEffect(() => {
    (() => {
      const nowMonth = (new Date()).getMonth()
      setXValues(months?.slice(nowMonth - 5, nowMonth + 1))
    })()
  }, [])
  useEffect(() => {
    (async () => {
      setYValuesa(await dataExtraction("app"))
      setYValuesb(await dataExtraction("job"))
      setYValuesc(await dataExtraction("quote"))
    })()
    setLoading(false)
  }, [loading])
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Totals visitors",
        data: yValuesa,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.25,
      }, {
        label: "Total job applications",
        data: yValuesb,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.25,
      }, {
        label: "Three",
        data: yValuesc,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.25,
      },
    ],
  };
  return (
    <>
      <Line
        style={{
          height: 50,
          width: "100%",
        }}
        data={data}
        options={{
          responsive: true,
          scales: {
            // x: { display: false },
            // y: { display: false },
          },
          plugins: {
            legend: true,
          },
        }}
      />
    </>
  );
}
