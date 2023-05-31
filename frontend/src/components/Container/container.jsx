import React from "react";

const Container = ({ children }) => {
  return <div className="container mx-auto mt-[96px] sm:min-h-[calc(100vh-228px)]">{children}</div>;
};

export default Container;
