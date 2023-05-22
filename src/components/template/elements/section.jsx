import React, { useState } from "react";
import Button, { ActionBtn } from "./button";
import Paragraph from "./paragraph";
import random from "../../../service/random";
import Subtitle from "./subtitle";
import List from "./list";

export default function Section({ newParagraphs, modifyElement }) {
  let sectId = "s-" + random();
  const [openActions, setOpenActions] = useState(false)
  const [sectionContent, setSectionContent] = useState([
    <Paragraph modifyElement={modifyElement} />,
  ]);

  const addNewParagraph = () => {
    setSectionContent([
      ...sectionContent,
      <Paragraph modifyElement={modifyElement} />,
    ]);
  };

  const addNewSubtitle = ()=>{
    setSectionContent([
      ...sectionContent,
      <Subtitle modifyElement={modifyElement} />,
    ]);
  }

  const addNewList = () => {
    setSectionContent([
      ...sectionContent,
      <List modifyElement={modifyElement} />,
    ]);
  }

  const openActionList =() => {
    setOpenActions(true)
  }

  return (
    <>
      <div className="job_tasks_section">
        <ActionBtn onClick={() => newParagraphs()} />
        <h2 className={`overview_title ${sectId}`}>
          Here goes the title...
          <Button onClick={() => modifyElement(sectId)} />
        </h2>
        <div className="role_description">{sectionContent}</div>
      </div>
    </>
  );
}
