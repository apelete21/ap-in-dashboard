import React, { useState } from "react";
import Button, { ActionBtn, ActionListBtn } from "./button";
import Paragraph from "./paragraph";
import random from "../../../service/random";
import Subtitle from "./subtitle";
import List from "./list";
import { createPortal } from "react-dom";
import HoverEdit from "./hoverWrapper";

export default function Section({ newParagraphs, modifyElement }) {
  let titleId = "t-" + random();
  const [openActions, setOpenActions] = useState(false);
  const [sectionContent, setSectionContent] = useState([
    <Paragraph modifyElement={modifyElement} />,
  ]);

  const openActionList = () => {
    setOpenActions(!openActions);
  };

  const addNewParagraph = () => {
    setSectionContent([
      ...sectionContent,
      <Paragraph modifyElement={modifyElement} />,
    ]);
  };

  const addNewSubtitle = () => {
    setSectionContent([
      ...sectionContent,
      <Subtitle modifyElement={modifyElement} />,
    ]);
  };

  const addNewList = () => {
    setSectionContent([
      ...sectionContent,
      <List modifyElement={modifyElement} />,
    ]);
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
          <Button onClick={() => modifyElement(titleId)} />
        </HoverEdit>
        <div className="role_description">{sectionContent}</div>
      </div>
    </>
  );
}
