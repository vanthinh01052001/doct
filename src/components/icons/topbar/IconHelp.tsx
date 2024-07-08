import React from "react";

const IconHelp = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 17.5445V17.5556M12 14.2222C12 12 15.3333 12 15.3333 9.67677C15.3333 7.89161 13.8704 6.44444 12 6.44444C10.4219 6.44444 9.04262 7.47456 8.66667 8.86869M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default IconHelp;
