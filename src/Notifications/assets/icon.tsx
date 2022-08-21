import React from 'react';

export default function Icon() {
  return (
    <div className="w-5 h-5">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.625 4.375L4.375 15.625"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.625 15.625L4.375 4.375"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
