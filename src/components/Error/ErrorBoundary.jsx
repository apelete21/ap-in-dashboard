import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            padding: "1rem",
            alignContent: "center",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              width: "40%",
              margin: "0 auto",
            }}
          >
            Oups, an error occured...!
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}
