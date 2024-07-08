import React from "react";

const IconArrowRight = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.75 10.5L5.25 6.00003L0.750001 1.50003"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowRight;
