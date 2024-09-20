import React from "react";
import { IconType } from "../types";

const LocationPin = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "40"}
      height={height || "40"}
      viewBox="0 0 384 512"
    >
      <path
        fill={color || "#fff"}
        d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
      />
    </svg>
  );
};

export default React.memo(LocationPin);
