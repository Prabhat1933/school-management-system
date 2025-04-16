import React from "react";
// import { ReactComponent as FlipkartIcon } from '../../assets/react.svg';
import FlipkartIcon from "../../assets/filpkartIcon.svg";

export default function header() {
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={FlipkartIcon} alt="icon" width={100} />
    </div>
  );
}
