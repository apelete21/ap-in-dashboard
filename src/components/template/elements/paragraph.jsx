import React, { Component } from 'react'
import Button from './button';

export class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "paragraph",
      text: "Here goes the paragraph...",
    };
  }

  modifyParagraph() {
    document.querySelector(".p-18").toggleAttribute("ContentEditable");
  }

  render() {
    return (
      <>
        <p className="p-18">
          {this.state.text}
          <Button onClick={this.modifyParagraph} />
        </p>
      </>
    );
  }
}