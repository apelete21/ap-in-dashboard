import React from "react";
import Button from "./button";
import random from "../../../service/random";
import HoverEdit from "./hoverWrapper";

export default function Paragraph({ modifyElement }) {
  let parId = "p-" + random();
  return (
    <HoverEdit>
      <p className={`p-18 ${parId}`}>Here goes the paragraph...</p>
      <Button onClick={() => modifyElement(parId)} />
    </HoverEdit>
  );
}
