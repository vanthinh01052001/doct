import React from "react";

const IconMenu = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.5H21V6.86842H3V4.5ZM3 10.4999H21V12.8684H3V10.4999ZM21 16.5H3V18.8684H21V16.5Z"
        fill="#5F666F"
      />
    </svg>
  );
};

export default IconMenu;
