import React from "react";

const IconArrow = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.7" clipPath="url(#clip0_4271_2166)">
        <path
          d="M4.08301 12.8334L9.91634 7.00002L4.08301 1.16669"
          stroke="#4FBAFA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4271_2166">
          <rect width="14" height="14" fill="#4FBAFA" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrow;
