import React from "react";
import { IconType } from "../types";

const CloseIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
    >
      <path
        fill={color || "#fff"}
        fillRule="evenodd"
        d="M19.977 35.5a1.234 1.234 0 001.746 1.745l6.892-6.892 6.893 6.892a1.234 1.234 0 001.747-1.745l-6.893-6.892 6.892-6.894a1.234 1.234 0 10-1.745-1.745l-6.893 6.894-6.893-6.894a1.234 1.234 0 10-1.745 1.746l6.893 6.892z"
        transform="translate(-19.616 -19.611)"
      />
    </svg>
  );
};

export default React.memo(CloseIcon);
