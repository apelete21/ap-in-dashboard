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

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Filler
);

export function LineComponent() {
  var labels = ["Italy", "France", "Spain", "USA", "Togo", "Lybia"];
  var yValues = [50, 94, 50, 41, 50, 36];
  var yValuesb = [70, 70, 19, 50, 85, 23];
  var yValuesc = [20, 52, 90, 10, 52, 63];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "One",
        data: yValues,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.25,
      },{
        label: "Two",
        data: yValuesb,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.25,
      },{
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
