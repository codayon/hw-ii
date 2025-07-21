import React from "react";

const Button = ({ className, text }) => {
  return (
    <span
      className={`relative inline-block px-0 py-1.5 cursor-pointer font-medium text-sm ${className}`}
    >
      {text}
      <span className="absolute left-0 bottom-0 w-3/5 h-0.5 bg-black-a group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </span>
  );
};

export default Button;
