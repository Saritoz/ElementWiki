import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 bg-blue-1 text-white">
      <div className="container mx-auto flex min-h-[100px] flex-col items-center justify-center sm:flex-row">
        <div className="basis-1/2">
          <p>ElementWiki 2023</p>
          <p>Powered by Sarito</p>
        </div>
        <div className="basis-1/2">
          <p className="text-right">Inspired by Final Fantasy Wiki</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
