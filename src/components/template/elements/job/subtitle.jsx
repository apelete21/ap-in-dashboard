import random from "../../../../service/random";
import { EditBtn } from "./button";
import { modifyElement, removeElement } from "../../methods";
import HoverEdit from "../hoverWrapper";

export default function Subtitle() {
  let subTId = "st-" + random();
  let subTCont = "stc-" + random();
  return (
    <HoverEdit className={`${subTCont}`}>
      <h4 className={`h4 ${subTId}`}>Here goes the Subtitle...</h4>
      <EditBtn
        editFunc={() => modifyElement(subTId)}
        deleteFunc={() => removeElement(subTCont)}
      />
    </HoverEdit>
  );
}
