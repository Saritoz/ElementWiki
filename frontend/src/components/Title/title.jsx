import React from "react";

const Title = (props) => {
  const { name } = props;
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="h-[1px] flex-1 bg-blue-2"></div>
      <div className="px-2 text-3xl text-blue-5 lg:text-4xl capitalize">{name}</div>
      <div className="h-[1px] flex-1 bg-blue-2"></div>
    </div>
  );
};

export default Title;
