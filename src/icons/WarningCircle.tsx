import React from "react";
import { IconType } from "../types";

const WarningCircle = ({ color, width, height }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "22"}
      height={height || "22"}
      viewBox="0 0 22 22"
    >
      <path
        fill={color || "#f4871f"}
        d="M11 0a11 11 0 107.763 3.206A11.012 11.012 0 0011 0zm1.351 16.217a1.367 1.367 0 01-2.734.031v-6A1.375 1.375 0 0111 8.863a1.356 1.356 0 011.383 1.383zM11 7.2a1.383 1.383 0 111.383-1.383A1.4 1.4 0 0111 7.2z"
        transform="rotate(180 11 11)"
      />
    </svg>
  );
};

export default React.memo(WarningCircle);
