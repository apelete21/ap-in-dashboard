import { useState } from "react";
import random from "../../../service/random";
import Button, { ActionBtn } from "./button";
import HoverEdit from "./hoverWrapper";

export default function List({ modifyElement }) {
  const [listItems, setListItems] = useState([
    <ListElement modifyElement={modifyElement} />,
  ]);
  function addNewListItem() {
    setListItems([...listItems, <ListElement modifyElement={modifyElement} />]);
  }
  return (
    <HoverEdit>
        <ActionBtn onClick={() => addNewListItem()} />
      <div class="tasks_list_section">
        <ul class="tasks_list">{listItems}</ul>
      </div>
    </HoverEdit>
  );
}

export function ListElement({ modifyElement }) {
  let listElId = "li-" + random();
  return (
    <li class={`task_ ${listElId}`}>
      <span class="square"></span>
      Providing quality assistance to management
      <Button onClick={() => modifyElement(listElId)} />
    </li>
  );
}
