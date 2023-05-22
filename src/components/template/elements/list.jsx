import { useState } from "react";
import random from "../../../service/random";
import { ActionBtn, EditBtn } from "./button";
import HoverEdit from "./hoverWrapper";
import { modifyElement, removeElement } from "./methods";

export default function List() {
  const [listItems, setListItems] = useState([
    <ListElement />,
  ]);
  function addNewListItem() {
    setListItems([...listItems, <ListElement />]);
  }
  return (
    <HoverEdit>
      <EditBtn className={"listBtn"} onClick={() => addNewListItem()} />
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
    <HoverEdit>
      <li class={`task_ ${listElId}`}>
        <span class="square"/>
        <span className={listElIdChild}>Here goes the list text...</span>
      </li>
      <EditBtn editFunc={() => modifyElement(listElIdChild)} deleteFunc={()=>removeElement(listElId) } />
    </HoverEdit>
  );
}
