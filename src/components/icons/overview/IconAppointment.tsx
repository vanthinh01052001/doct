import React from "react";

const IconAppointment = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.9375 3.5V8.16667M10.0625 3.5V8.16667M3.5 12.8333H24.5M24.5 12.8333V22.1667C24.5 23.4553 23.3247 24.5 21.875 24.5H6.125C4.67525 24.5 3.5 23.4553 3.5 22.1667V8.16667C3.5 6.878 4.67525 5.83333 6.125 5.83333H21.875C23.3247 5.83333 24.5 6.878 24.5 8.16667V12.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconAppointment;
