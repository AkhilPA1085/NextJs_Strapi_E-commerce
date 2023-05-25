import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="content-wrapper w-full max-w-5xl my-0 mx-auto px-5  py-24 md:px-0">
      {children}
    </div>
  );
};

export default ContentWrapper;
