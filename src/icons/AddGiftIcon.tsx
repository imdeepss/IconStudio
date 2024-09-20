import React from "react";
import { IconType } from "../types";

const AddGiftIcon = ({ color, error, width, height }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
    >
      <path
        fill={color || "#339526"}
        d="M34.6 44.6a1.745 1.745 0 001.753 1.753h6.494v6.494a1.753 1.753 0 103.506 0v-6.492h6.494a1.753 1.753 0 100-3.506h-6.492v-6.494a1.753 1.753 0 00-3.506 0v6.494h-6.494A1.745 1.745 0 0034.6 44.6z"
        transform="translate(-34.602 -34.602)"
      />
    </svg>
  );
};

export default React.memo(AddGiftIcon);
