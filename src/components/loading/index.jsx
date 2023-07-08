import React from 'react'
import { icons } from '../../service/icons';

export function LoadingComp({scale}) {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          padding: "1rem",
          alignContent: "center",
          alignItems: "center",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <img
          src={icons.loader}
          alt="Loader"
          style={{
            width: "40%",
            margin: "0 auto",
            scale: `${scale}`
          }}
        />
      </div>
    </>
  );
}
