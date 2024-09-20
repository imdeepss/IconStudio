import React from "react";
import { IconType } from "../types";

const WarningCross = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "64"}
      height={height || "64"}
      viewBox="0 0 64 64"
    >
      <g transform="translate(463)">
        <path
          fill={color || "#b72340"}
          d="M-399 32a32.035 32.035 0 00-32-32 32.035 32.035 0 00-32 32 32.035 32.035 0 0032 32 32.035 32.035 0 0032-32z"
        />
        <path
          fill="#fff"
          d="M-416.041 46.971a1.548 1.548 0 00.091-2.1l-.091-.091-11.154-11.063 11.154-11.154a1.549 1.549 0 000-2.1 1.549 1.549 0 00-2.1 0L-429.3 31.611l-11.154-11.154a1.549 1.549 0 00-2.1-.091l-.091.091a1.548 1.548 0 00-.091 2.1l.091.091 11.154 11.154-11.155 11.158a1.466 1.466 0 00-.091 2.1 1.553 1.553 0 002.1.091l.091-.091 11.154-11.154 11.154 11.154a1.672 1.672 0 002.194-.091z"
          transform="translate(-1.702 -1.714)"
        />
      </g>
    </svg>
  );
};

export default React.memo(WarningCross);
