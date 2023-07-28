import React from "react";
import { BarComponent } from "./Bar";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Visits() {
  var xValues = ["Italy", "France", "Spain", "USA", "Togo", "Lybia"];
  var yValuesa = [50, 94, 20, 41, 50, 36];
  var yValuesb = [70, 10, 19, 50, 85, 23];
  var yValuesc = [20, 52, 90, 10, 52, 63];
  return (
    <>
      <div className="top_graphs">
        <BarComponent
          xValues={xValues}
          color="#FF4133"
          fillColor={"#DC3635"}
          yValues={yValuesa}
          constType={""}
          title={"Total Visitors"}
        />
        <BarComponent
          xValues={xValues}
          color="#51449d"
          fillColor={"#50449E"}
          yValues={yValuesb}
          constType={""}
          title={"Total Job applications"}
        />
        <BarComponent
          xValues={xValues}
          color="#00cf9d"
          fillColor={"#00cf9d"}
          yValues={yValuesc}
          constType={""}
          title={"Total Quote Requests"}
        />
      </div>
    </>
  );
}
