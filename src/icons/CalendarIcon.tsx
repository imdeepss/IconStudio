import React from "react";
import { IconType } from "../types";

const CalendarIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "26"}
      height={height || "26"}
      viewBox="0 0 26 26"
    >
      <g id="np_calendar_1929688_000000" transform="translate(-5 -3.3)">
        <path
          id="Path_899"
          data-name="Path 899"
          d="M28.546,14.059h-.859v1.5a1.882,1.882,0,0,1-3.762,0v-1.5H12.072v1.5a1.882,1.882,0,0,1-3.761,0v-1.5H7.454A2.409,2.409,0,0,0,5,16.422V34.7a2.409,2.409,0,0,0,2.453,2.363H28.547A2.41,2.41,0,0,0,31,34.7V16.422a2.409,2.409,0,0,0-2.453-2.363Zm-.572,19.314a.925.925,0,0,1-.982.855H9.007a.924.924,0,0,1-.982-.855V21.533a.925.925,0,0,1,.982-.856H26.993a.925.925,0,0,1,.982.856Z"
          transform="translate(0 -7.764)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_900"
          data-name="Path 900"
          d="M20.759,8.658a.884.884,0,0,0,.9-.867V4.167a.9.9,0,0,0-1.8,0V7.792A.884.884,0,0,0,20.759,8.658Z"
          transform="translate(-10.567)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_901"
          data-name="Path 901"
          d="M74.813,8.658a.884.884,0,0,0,.9-.867V4.167a.9.9,0,0,0-1.8,0V7.792A.884.884,0,0,0,74.813,8.658Z"
          transform="translate(-49.006)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_902"
          data-name="Path 902"
          d="M21.426,43.137h4.759v4.692H21.426Z"
          transform="translate(-11.681 -28.747)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_903"
          data-name="Path 903"
          d="M42.16,43.137h4.759v4.692H42.16Z"
          transform="translate(-26.425 -28.747)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_904"
          data-name="Path 904"
          d="M21.426,63.855h4.759v4.692H21.426Z"
          transform="translate(-11.681 -43.697)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_905"
          data-name="Path 905"
          d="M42.16,63.855h4.759v4.692H42.16Z"
          transform="translate(-26.425 -43.697)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_906"
          data-name="Path 906"
          d="M63.672,43.137h4.759v4.692H63.672Z"
          transform="translate(-41.723 -28.747)"
          fill={color || "#005eb8"}
        />
        <path
          id="Path_907"
          data-name="Path 907"
          d="M63.672,63.855h4.759v4.692H63.672Z"
          transform="translate(-41.723 -43.697)"
          fill={color || "#005eb8"}
        />
      </g>
    </svg>
  );
};

export default React.memo(CalendarIcon);
