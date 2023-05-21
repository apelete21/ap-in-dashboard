import random from "../../../service/random";
import Button from "./button";

export default function Subtitle({ modifyElement }) {
  let subTId = "st-" + random();
  return (
    <h4 className={`h4 ${subTId}`}>
      Here goes the Subtitle...
      <Button onClick={() => modifyElement(subTId)} />
    </h4>
  );
}
