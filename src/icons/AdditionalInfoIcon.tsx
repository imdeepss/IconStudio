import React from "react";
import { IconType } from "../types";

const AdditionalInfoIcon = ({ color, error, width, height }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
    >
      <path
        id="np_information_2222016_000000"
        d="M10,0a10,10,0,1,0,7.057,2.914A10.011,10.011,0,0,0,10,0Zm1.229,14.743a1.243,1.243,0,0,1-2.486.029V9.314A1.25,1.25,0,0,1,10,8.057a1.232,1.232,0,0,1,1.257,1.257ZM10,6.543a1.257,1.257,0,1,1,1.257-1.257h0A1.268,1.268,0,0,1,10,6.543Z"
        fill={color || "#005eb8"}
      />
    </svg>
  );
};

export default React.memo(AdditionalInfoIcon);
