import React, { useState } from "react";
import { BarComponent } from "./Bar";
import { visits } from "../../requests/visits";
import { useEffect } from "react";
import { LoadingComp } from "../loading";

export const months = [
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

export const dataExtraction = async (page) => {
  const { data, ok } = await visits(page)
  if (!ok) {
    alert("Something went wrong! Please verify your connection or ask developper team if this error still happening!")
  }
  let values = []
  let reversed = []

  for (let i = data?.visits.length - 1; i >= 0; i--) {
    const element = data?.visits[i];
    reversed.push(element)
  }

  for (let i = 0; i <= 5; i++) {
    const e = reversed[i];
    values = [e?.number || 1, ...values]
  }
  return [...values]
}

export default function Visits() {
  const [loading, setLoading] = useState(true)
  const [yValuesa, setYValuesa] = useState([])
  const [yValuesb, setYValuesb] = useState([])
  const [yValuesc, setYValuesc] = useState([])
  const [xValues, setXValues] = useState([])

  useEffect(() => {
    (() => {
      const nowMonth = (new Date()).getMonth()
      setXValues(months.slice(nowMonth - 5, nowMonth + 1))
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

  if (!loading) {
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
            title={"Total Job views"}
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
  } else {
    return (<><LoadingComp scale={0.1} /></>)
  }
}
