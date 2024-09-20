import React from "react";
import { IconType } from "../types";

const DownloadIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "13.8"}
      height={height || "20"}
      viewBox="0 0 13.8 20"
    >
      <g id="download" transform="translate(-10.8)">
        <path
          id="Path_4651"
          data-name="Path 4651"
          d="M19.3,15.886a1.077,1.077,0,0,0,.686.286h0a.876.876,0,0,0,.686-.286L25.7,11.171a.929.929,0,0,0,.314-.714.992.992,0,0,0-.286-.714,1.019,1.019,0,0,0-1.4-.029l-3.343,3.143V1a1,1,0,0,0-2,0V12.857L15.675,9.714a.99.99,0,0,0-.743-.257.913.913,0,0,0-.686.314.991.991,0,0,0,.057,1.4Z"
          transform="translate(-2.275)"
          fill={color || "#fff"}
        />
        <path
          id="Path_4652"
          data-name="Path 4652"
          d="M23.629,63H11.8a1,1,0,0,0,0,2H23.6a1.012,1.012,0,0,0,1-1A.988.988,0,0,0,23.629,63Z"
          transform="translate(0 -45)"
          fill={color || "#fff"}
        />
      </g>
    </svg>
  );
};

export default React.memo(DownloadIcon);
