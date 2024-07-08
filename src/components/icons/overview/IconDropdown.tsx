import React from "react";

const IconDropdown = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2917 5.33331C12.711 5.33331 12.9441 5.81828 12.6822 6.14566L8.38913 11.5119C8.18897 11.7621 7.80843 11.7621 7.60826 11.5119L3.31524 6.14566C3.05334 5.81828 3.28642 5.33331 3.70568 5.33331L12.2917 5.33331Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default IconDropdown;
