import React, { useState } from "react";
import "./editor.css";

const TextEditor = () => {
  let [output, setOutput] = useState([]);
  let [listItem, setListItem] = useState([]);

  // tag creation function
  const createItem = (tag) => {
    const data = React.createElement(
      tag,
      { className: "knjsliqcij", contentEditable: "true" },
      `Modify your ${tag} content here`
    );
    setOutput([...output, data]);
  };

  // List item creation function
  async function createListItem() {
    const li = React.createElement(
      "li",
      { className: "knjsliqcij", contentEditable: "true" },
      `List item`
    );
    const ul = React.createElement("ul", { className: "" }, li);
    setOutput([...output, ul]);
  }

  return (
    <>
      <div className="editor">
        <div className="editor-pane">
          <div className="header-pane">
            <div className="h1tag" onClick={() => createItem("h1")}>
              <span className="label">H1</span>
            </div>
            <div className="h2tag" onClick={() => createItem("h2")}>
              <span className="label">H2</span>
            </div>
            <div className="h3tag" onClick={() => createItem("h3")}>
              <span className="label">H3</span>
            </div>
          </div>
          <div className="paragraph-pane">
            <div className="section" onClick={() => createItem("div")}>
              <span className="label">section</span>
            </div>
            <div className="paragraph" onClick={() => createItem("p")}>
              <span className="label">paragraph</span>
            </div>
          </div>
          <div className="list-pane">
            <div className="list" onClick={createListItem}>
              <span className="label">list</span>
            </div>
          </div>
        </div>
        <div className="output">{output}</div>
      </div>
    </>
  );
};

export default TextEditor;
