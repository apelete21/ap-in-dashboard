import random from "../../../service/random";
import { EditBtn } from "./button";
import { modifyElement, removeElement } from "../methods";

export default function Subtitle() {
  let subTId = "st-" + random();
  return (
    <h4 className={`h4 ${subTId}`}>
      Here goes the Subtitle...
      <EditBtn
        editFunc={() => modifyElement(subTId)}
        deleteFunc={() => removeElement(subTId)}
      />
    </h4>
  );
}
