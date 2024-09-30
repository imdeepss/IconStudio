import React from "react";
import { IconType } from "../types";

const MessageIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill={color || "rgba(0, 0, 0, 1)"}
    >
      <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"></path>
      <circle cx="15" cy="10" r="2"></circle>
      <circle cx="9" cy="10" r="2"></circle>
    </svg>
  );
};

export default React.memo(MessageIcon);
