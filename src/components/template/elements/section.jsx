import React, { useState } from "react";
import Button, { AddBtn } from "./button";
import Paragraph from "./paragraph";
import random from "../../../service/random";

export default function Section({ newParagraphs, modifyElement }) {
  let sectId = "s-" + random();
  const [par, setPar] = useState([<Paragraph modifyElement={modifyElement} />]);

  const addNewParagraph = () => {
    setPar([...par, <Paragraph modifyElement={modifyElement} />]);
  };

  return (
    <>
      <div className="job_tasks_section">
        <AddBtn onClick={() => newParagraphs(addNewParagraph)} />
        <h2 className={`overview_title s-${sectId}`}>
          Here goes the title...
          <Button onClick={() => modifyElement("title", sectId)} />
        </h2>
        <div className="role_description">{par}</div>
      </div>
    </>
  );
}
