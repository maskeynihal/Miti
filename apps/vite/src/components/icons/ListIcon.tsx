import React from 'react';

const ListIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 fill-current"
    >
      <line x1={8} y1={6} x2={21} y2={6} />
      <line x1={8} y1={12} x2={21} y2={12} />
      <line x1={8} y1={18} x2={21} y2={18} />
      <line x1={3} y1={6} x2="3.01" y2={6} />
      <line x1={3} y1={12} x2="3.01" y2={12} />
      <line x1={3} y1={18} x2="3.01" y2={18} />
    </svg>
  );
};

export default ListIcon;
