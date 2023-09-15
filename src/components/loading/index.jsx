import React from 'react'
import { icons } from '../../service/icons';

export function LoadingComp({scale, top}) {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "grid",
          padding: "1rem",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          position: `${top ? "absolute" : "static"}`,
          top: "0",
          zIndex: 100000000000
        }}
      >
        <img
          src={icons.loader}
          alt="Loader"
          style={{
            display: "flex",
            width: "40%",
            margin: "auto",
            scale: `${scale || 0.5}`
          }}
        />
      </div>
    </>
  );
}
