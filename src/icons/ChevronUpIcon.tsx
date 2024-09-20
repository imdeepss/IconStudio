import React from "react";
import { IconType } from "../types";

const ChevronUpIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "18"}
      height={height || "9.984"}
      viewBox="0 0 18 9.984"
    >
      <path
        id="action-right"
        d="M.289,17.714a1.04,1.04,0,0,1,0-1.439L7.562,9,.289,1.728a.987.987,0,0,1-.283-.72A1.1,1.1,0,0,1,.289.289a1.04,1.04,0,0,1,1.439,0L9.7,8.282a1.04,1.04,0,0,1,0,1.439L1.728,17.688A1.017,1.017,0,0,1,.289,17.714Z"
        transform="translate(0 9.984) rotate(-90)"
        fill={color || "#ffffff"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default React.memo(ChevronUpIcon);
