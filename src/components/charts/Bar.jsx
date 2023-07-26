import { Bar } from "react-chartjs-2";
import { higher } from "../../service/higherNumberGetter";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

export const BarComponent = (props) => {
  const barColors = [
    "#e3e3e3",
    "#e3e3e3",
    "#e3e3e3",
    "#e3e3e3",
    "#e3e3e3",
    "#e3e3e3",
  ];
  const array = props.yValues;
  let colors = barColors;
  const index = array.indexOf(higher(array));
  colors[index] = props.color;
  let data = {
    labels: props.xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: props.yValues,
      },
    ],
  };
  return (
    <>
      <div className="graph_box current_month">
        <div className="graph_infos">
          <p className="graph_title">{props.title}</p>
          <div className="graph_number_box">
            <h1 className="graph_number" style={{ color: props.color }}>
              {props.yValues[5]}
            </h1>
            <div
              style={{
                backgroundColor: props.color + "50",
                color: props.color,
              }}
            >
              23
              <svg
                width="9"
                height="9"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.8 10.5L0.75 9.45L7.95 2.25H1.5V0.75H10.5V9.75H9V3.3L1.8 10.5Z"
                  fill={props.fillColor}
                />
              </svg>
            </div>
          </div>
          <p className="period">This month</p>
        </div>
        <div className="graphics">
          <Bar
            style={{
              width: "100%",
              maxHeight: "80px",
            }}
            data={data}
            options={{
              responsive: true,
              scales: {
                x: { display: false },
                y: { display: false },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
