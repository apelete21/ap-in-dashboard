import React, { useState } from "react";
import { ActionBtn, ActionListBtn, EditBtn } from "./button";
import Paragraph from "./paragraph";
import random from "../../../service/random";
import Subtitle from "./subtitle";
import List from "./list";
import HoverEdit from "./hoverWrapper";
import { modifyElement, removeElement } from "./methods";

export default function Section() {
  let titleId = "t-" + random();
  const [openActions, setOpenActions] = useState(false);
  const [sectionContent, setSectionContent] = useState([<Paragraph />]);

  const openActionList = () => {
    setOpenActions(!openActions);
  };

  const addNewParagraph = () => {
    setSectionContent([...sectionContent, <Paragraph />]);
  };

  const addNewSubtitle = () => {
    setSectionContent([...sectionContent, <Subtitle />]);
  };

  const addNewList = () => {
    setSectionContent([...sectionContent, <List />]);
  };

  return (
    <>
      <div className="job_tasks_section">
        {!openActions ? (
          <ActionBtn onClick={openActionList} />
        ) : (
          <ActionBtn>
            <div>
              <ActionListBtn onClick={addNewSubtitle}>subtitle</ActionListBtn>
            </div>
            <div>
              <ActionListBtn onClick={addNewParagraph}>paragraph</ActionListBtn>
            </div>
            <div>
              <ActionListBtn onClick={addNewList}>list</ActionListBtn>
            </div>
            <div>
              <ActionListBtn>remove</ActionListBtn>
            </div>
            <div>
              <ActionListBtn onClick={openActionList}>close</ActionListBtn>
            </div>
          </ActionBtn>
        )}
        <HoverEdit>
          <h2 className={`overview_title ${titleId}`}>
            Here goes the title...
          </h2>
          <EditBtn
            editFunc={() => modifyElement(titleId)}
            deleteFunc={() => removeElement(titleId)}
          />
        </HoverEdit>
        <div className="role_description">{sectionContent}</div>
      </div>
    </>
  );
}
