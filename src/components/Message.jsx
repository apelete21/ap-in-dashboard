import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

const Message = () => {
  const { quotedelStatus } = useContext(AppContext);
  if (!quotedelStatus)
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          color: "gray",
          background: "white",
          paddingBlock: "0.5rem",
        }}
      >
        {" "}
        {quotedelStatus}{" "}
      </div>
    );
};

export default Message;
