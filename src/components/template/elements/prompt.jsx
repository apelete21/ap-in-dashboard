import React from "react";

export const PromptPopUp = ({ setSubmitPrompt, action }) => {
  return (
    <div className="prompt-popup">
      <div className="modal-closer" onClick={() => setSubmitPrompt(false)} />
      <div className="prompt-section">
        <h4>Sure you want to continue ?</h4>
        <div className="prompt-answers">
          <button onClick={() => setSubmitPrompt(false)}>No</button>
          <button onClick={action}>Yes</button>
        </div>
      </div>
    </div>
  );
};
