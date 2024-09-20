import React from "react";
import { IconType } from "../types";

const ErrorInfoIcon = ({ width, height, color, className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill={color || "#f4871f"}
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M23.637 33.637a10 10 0 10-10-10 10 10 0 0010 10zm0-15a1.25 1.25 0 101.25 1.25 1.247 1.247 0 00-1.25-1.251zm0 3.75a1.247 1.247 0 00-1.25 1.25v3.75a1.25 1.25 0 002.5 0v-3.75a1.247 1.247 0 00-1.25-1.25z"
        transform="translate(-13.637 -13.637)"
      />
    </svg>
  );
};

export default React.memo(ErrorInfoIcon);
