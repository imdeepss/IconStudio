import React from "react";
import { IconType } from "../types";

const InstagramIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "48"}
      height={height || "48"}
      x="0"
      y="0"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z" />
        <path
          fill={color || "#fff"}
          d="M57.333 21.5C37.546 21.5 21.5 37.546 21.5 57.333v57.334c0 19.787 16.046 35.833 35.833 35.833h57.334c19.787 0 35.833-16.046 35.833-35.833V57.333c0-19.787-16.046-35.833-35.833-35.833zM129 35.833A7.17 7.17 0 01136.167 43 7.17 7.17 0 01129 50.167 7.17 7.17 0 01121.833 43 7.17 7.17 0 01129 35.833zM86 50.167c19.787 0 35.833 16.046 35.833 35.833S105.787 121.833 86 121.833 50.167 105.787 50.167 86 66.213 50.167 86 50.167zM86 64.5c-11.874 0-21.5 9.626-21.5 21.5s9.626 21.5 21.5 21.5 21.5-9.626 21.5-21.5S97.874 64.5 86 64.5z"
        />
      </g>
    </svg>
  );
};

export default React.memo(InstagramIcon);
