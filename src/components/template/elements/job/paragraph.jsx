import React from "react";
import { EditBtn } from "../button";
import random from "../../../../service/random";
import HoverEdit from "../hoverWrapper";
import { modifyElement, removeElement } from "../../methods";
import { PasteContent } from "../clipboard/clipBoard";

export default function Paragraph() {
  let parId = "p-" + random();
  let parCont = "pcont-" + random();
  return (
    <HoverEdit className={parCont}>
      <p className={`p-18 ${parId}`}>Here goes the paragraph...</p>
      <EditBtn
        editFunc={() => modifyElement(parId)}
        deleteFunc={() => removeElement(parId)}
        PasteFunc={() => { PasteContent(parId) }}
      />
    </HoverEdit>
  );
}
