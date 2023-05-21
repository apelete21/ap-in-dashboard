import React from "react";
import Button from "./button";
import random from "../../../service/random";

export default function Paragraph({ modifyElement }) {
  let parId = "p-" + random();
  return (
    <p className={`p-18 ${parId}`}>
      Here goes the paragraph...
      <Button onClick={() => modifyElement(parId)} />
    </p>
  );
}
