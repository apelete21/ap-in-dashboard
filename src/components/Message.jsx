import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

const Message = () => {
  const { statusMessage } = useContext(AppContext);
  if (!statusMessage)
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          color: "gray",
          background: "#d0d0d0",
          paddingBlock: "0.5rem",
        }}
      >
        {" "}
        {quotedelStatus}{" "}
      </div>
    );
};

export default Message;
