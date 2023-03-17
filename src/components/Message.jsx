import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

const Message = () => {
  const { statusMessage } = useContext(AppContext);
  if (statusMessage)
    return (
      <h2
        style={{
          position: "fixed",
          fontWeight: "bold",
          zIndex: 1000,
          top: "100vh",
          translate: "0 -100%",
          width: "100%",
          textAlign: "center",
          color: "black",
          background: "#d0d0d0",
          paddingBlock: "0.5rem",
        }}
      >
        Hello je suis un lessage de status
      </h2>
    );
};

export default Message;
