import React from "react";
import { IconType } from "../types";

const CrossIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "28"}
      height={height || "28"}
      viewBox="0 0 28 28"
    >
      <g
        id="Group_1926"
        data-name="Group 1926"
        transform="translate(-817 -925)"
      >
        <g id="Group_312" transform="translate(481 142)">
          <circle
            id="Ellipse_12"
            cx="14"
            cy="14"
            r="14"
            transform="translate(336 783)"
            fill={color || "#425563"}
          />
        </g>
        <path
          id="np_plus_99672_000000"
          d="M34.6,42.909a1.45,1.45,0,0,0,1.456,1.456h5.4v5.4a1.456,1.456,0,1,0,2.913,0v-5.4h5.4a1.456,1.456,0,0,0,0-2.913h-5.4v-5.4a1.456,1.456,0,1,0-2.913,0v5.4h-5.4A1.45,1.45,0,0,0,34.6,42.909Z"
          transform="translate(830.749 878.066) rotate(45)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default React.memo(CrossIcon);
