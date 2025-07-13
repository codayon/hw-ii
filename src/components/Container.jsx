import React from "react";

const Container = ({ children }) => {
  return <div className={`max-w-[75rem] m-auto`}>{children}</div>;
};

export default Container;
