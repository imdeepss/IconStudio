import React from "react";
import { IconType } from "../types";

const RemoveIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
    >
      <path
        id="np_delete_89612_000000"
        d="M15,5A10,10,0,1,0,25,15,9.987,9.987,0,0,0,15,5Zm4.622,14.622a1.234,1.234,0,0,1-1.755,0L15,16.755l-2.866,2.867a1.241,1.241,0,0,1-1.755-1.755L13.245,15l-2.867-2.866a1.241,1.241,0,0,1,1.755-1.755L15,13.245l2.866-2.866a1.241,1.241,0,0,1,1.755,1.755L16.778,15l2.866,2.866a1.215,1.215,0,0,1-.022,1.756Z"
        transform="translate(-5 -5)"
        fill={color || "#9fa9b0"}
        opacity="0.999"
      />
    </svg>
  );
};

export default React.memo(RemoveIcon);
