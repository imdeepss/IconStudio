import React from "react";
import { IconType } from "../types";

const DownArrowIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "28"}
      height={height || "28"}
      fill={color || "#fff"}
      viewBox="0 0 24 24"
      stroke="#005eb8"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export default React.memo(DownArrowIcon);
