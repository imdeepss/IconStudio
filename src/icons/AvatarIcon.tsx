import React from "react";
import { IconType } from "../types";

const AvatarIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 135 135"
    >
      <g data-name="Group 1893" transform="translate(-790 -380)">
        <g data-name="Group 1888" transform="translate(656.156 299.941)">
          <g
            fill="#eef7f9"
            stroke="#005eb8"
            strokeWidth="1"
            data-name="8ba22a7226dba771527dd8a9a3f533a2"
            transform="translate(133.844 80.058)"
          >
            <circle cx="67.5" cy="67.5" r="67.5" stroke="none" />
            <circle cx="67.5" cy="67.5" r="67" fill="none" />
          </g>
        </g>
        <path
          fill="#0086bf"
          d="M12.5 50.2a63.161 63.161 0 00-6.1 2.2C-1 56.1 0 67.6 0 68.1A2.149 2.149 0 002.1 70h65.8a2.149 2.149 0 002.1-1.9c0-.5 1.1-12-6.3-15.7a44.4 44.4 0 00-6.1-2.2c-5.1-1.7-11.5-3.7-12.6-7.6a6.311 6.311 0 011.7-3.9c2.8-2.9 5.8-10.8 5.8-18.7v-.1c0-.4-.8-11.5-6.9-16.1C44.8 2.9 41.4 0 35 0h-.1a15.465 15.465 0 00-10.5 3.6c-6.2 4.7-6.9 15.7-6.9 16.1v.1c0 7.8 3 15.8 5.8 18.7a6.561 6.561 0 011.7 3.9c-1 4.1-7.4 6.1-12.5 7.8z"
          transform="translate(822.045 409)"
        />
      </g>
    </svg>
  );
};
export default React.memo(AvatarIcon);
