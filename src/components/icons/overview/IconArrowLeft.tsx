import React from "react";

const IconArrowLeft = (props: JSX.IntrinsicElements["svg"]) => {
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
        d="M5.25 1.50003L0.75 6.00003L5.25 10.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowLeft;
