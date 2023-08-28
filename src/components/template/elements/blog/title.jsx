import random from "../../../../service/random";
import { modifyElement, removeElement } from "../../methods";
import { EditBtn } from "../button";
import { PasteContent } from "../clipboard/clipBoard";
import HoverEdit from "../hoverWrapper";

export function Title() {

  const tId = "ti-" + random()
  const tContId = "tcont-" + random()

  return (
    <HoverEdit className={tContId}>
      <h4 class={`text-block--title ${tId}`}>Here goes the title...</h4>
      <EditBtn
        editFunc={() => modifyElement(tId)}
        deleteFunc={() => removeElement(tContId)}
        PasteFunc={() => { PasteContent(tId) }}
      />
    </HoverEdit>
  );
}


