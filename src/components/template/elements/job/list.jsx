import { useState } from "react";
import random from "../../../../service/random";
import { EditBtn } from "../button";
import HoverEdit from "../hoverWrapper";
import { modifyElement, removeElement } from "../../methods";
import { PasteContent } from "../clipboard/clipBoard";

export default function List() {
  let listId = "li-" + random();

  const [listItems, setListItems] = useState([
    <ListElement />,
  ]);
  function addNewListItem() {
    setListItems([...listItems, <ListElement />]);
  }
  return (
    <HoverEdit className={`${listId}`}>
      <EditBtn
        className={"listBtn"}
        editFunc={() => addNewListItem()}
        deleteFunc={() => removeElement(listId)}
        children1={<span>+</span>}
      />
      <div class="tasks_list_section">
        <ul class="tasks_list">{listItems}</ul>
      </div>
    </HoverEdit>
  );
}

export function ListElement() {
  let listElId = "li-" + random();
  let listElIdChild = "li-li-" + random();
  return (
    <HoverEdit className={`${listElId}`}>
      <li class={`task_`}>
        <span class="square" />
        <span className={listElIdChild}>Here goes the list text...</span>
      </li>
      <EditBtn
        editFunc={() => modifyElement(listElIdChild)}
        deleteFunc={() => removeElement(listElId)}
        PasteFunc={() => { PasteContent(listElIdChild) }}
      />
    </HoverEdit>
  );
}
