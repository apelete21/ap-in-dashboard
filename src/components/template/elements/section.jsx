import React, { Component } from "react";
import { Paragraph } from "./paragraph";
import Button from "./button";

export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "section",
      title: "Here goes the title...",
      paragraphs: [<Paragraph />],
    };
    this.addNewParagraph = this.addNewParagraph.bind(this);
  }

  addNewParagraph() {
    this.setState = { paragraphs: [...this.state.paragraphs, <Paragraph />] };
  }

  editTitle(){
    document
      .querySelector(".overview_title")
      .toggleAttribute("ContentEditable");
  }

  render() {
    return (
      <div className="job_tasks_section">
        <h2 className="overview_title">{this.state.title}
        <Button onClick={this.editTitle} />
        </h2>
        <div className="role_description">{this.state.paragraphs}</div>
      </div>
    );
  }
}

