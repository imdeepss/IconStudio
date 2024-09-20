import React from "react";
import { IconType } from "../types";

const CameraIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "20.571"}
      viewBox="0 0 24 20.571"
    >
      <path
        fill={color || "#ffffff"}
        d="M17.8 23.556h2.933a.812.812 0 010 1.624H17.8v2.977a.8.8 0 11-1.6 0V25.18h-2.934a.812.812 0 010-1.624H16.2v-2.977a.8.8 0 111.6 0zm10.262-6.465A3.033 3.033 0 0129 19.33v11.077a3.031 3.031 0 01-.937 2.237 3.1 3.1 0 01-2.263.927H8.2a3.1 3.1 0 01-2.263-.927A3.031 3.031 0 015 30.407V19.33a3.033 3.033 0 01.937-2.238 3.1 3.1 0 012.263-.928H11l.637-1.681a2.3 2.3 0 01.869-1.045A2.24 2.24 0 0113.8 13h6.4a2.24 2.24 0 011.294.439 2.3 2.3 0 01.869 1.045l.637 1.68h2.8a3.1 3.1 0 012.262.928zM17 31.135a6.768 6.768 0 10-6.667-6.767A6.717 6.717 0 0017 31.135z"
        transform="translate(-5 -13)"
      />
    </svg>
  );
};

export default React.memo(CameraIcon);
