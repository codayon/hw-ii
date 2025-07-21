import React from "react";
import { Link } from "react-router";

const MenuItem = ({ to, className, label, classBottom }) => {
  return (
    <li>
      <Link
        to={to}
        className={`relative inline-block px-0 py-1.5 cursor-pointer font-medium hover:text-black-a transition duration-500 group ${className}`}
      >
        {label}
        <span
          className={`absolute left-0 bottom-0 w-0 h-0.5 bg-black-a group-hover:w-full transition-all duration-500 ease-out ${classBottom}`}
        ></span>
      </Link>
    </li>
  );
};

export default MenuItem;
