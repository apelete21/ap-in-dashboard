const Message = ({ data }) => {
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
      {data}
    </h2>
  );
};

export default Message;
