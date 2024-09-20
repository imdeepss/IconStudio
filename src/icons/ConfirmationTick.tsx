import React from "react";
import { IconType } from "../types";

const ConfirmationTick = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "64"}
      height={height || "64"}
      viewBox="0 0 64 64"
    >
      <g transform="translate(-336 -783)">
        <path
          fill="#fff"
          d="M32 0A32 32 0 110 32 32 32 0 0132 0z"
          transform="translate(336 783)"
        />
        <path
          fill={color || "#56a831"}
          d="M354.035 820.24l10.332 9.691a2.2 2.2 0 001.646.64 2.29 2.29 0 001.646-.731l.183-.183 18.1-23.314a2.342 2.342 0 10-3.657-2.925l-16.549 21.3-8.5-7.954a2.142 2.142 0 00-1.554-.64 2.378 2.378 0 00-1.646 4.114z"
          data-name="Path 1574"
          transform="translate(-1.486 -1.674)"
        />
      </g>
    </svg>
  );
};

export default React.memo(ConfirmationTick);
