import React from "react";
import { IconType } from "../types";

const HeartIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "27.102"}
      height={height || "24"}
      viewBox="0 0 27.102 24"
    >
      <path
        id="np_heart_888700_000000"
        d="M26.293,7.269c-.89-1.586-6.384-6.925-12.768.812C6.832.3,1.647,5.644.757,7.269-.829,10.209.138,14.7,2.344,16.825L13.525,27.968,24.668,16.825c2.244-2.167,3.211-6.616,1.625-9.556Z"
        transform="translate(0.027 -3.968)"
        fill={color || "#0086bf"}
      />
    </svg>
  );
};

export default React.memo(HeartIcon);
