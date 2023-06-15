import random from "../../../../service/random";
import { modifyElement, removeElement } from "../../methods";
import { EditBtn } from "../button";
import HoverEdit from "../hoverWrapper";

export function Paragraph() {

  const parId = "par-" + random()
  const parContId = "parCont-" + random();

  return (
    <HoverEdit className={parContId}>
      <div class="block--paragraph">
        <p class={`default-paragraph ${parId}`}>Here goes the paragraph...</p>
      </div>
      <EditBtn
        editFunc={() => modifyElement(parId)}
        deleteFunc={() => removeElement(parContId)}
      />
    </HoverEdit>
  );
}
