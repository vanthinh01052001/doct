import React from "react";

const IconPatient = (props: JSX.IntrinsicElements["svg"]) => {
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
        d="M24.5 25.6667V23.0741C24.5 20.2104 22.1495 17.8889 19.25 17.8889H8.75C5.85051 17.8889 3.5 20.2104 3.5 23.0741V25.6667M19.25 7.51852C19.25 10.3822 16.8995 12.7037 14 12.7037C11.1005 12.7037 8.75 10.3822 8.75 7.51852C8.75 4.65482 11.1005 2.33333 14 2.33333C16.8995 2.33333 19.25 4.65482 19.25 7.51852Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPatient;
