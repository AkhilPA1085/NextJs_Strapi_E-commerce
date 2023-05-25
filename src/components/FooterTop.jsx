import React from "react";
import ContentWrapper from "./ContentWrapper";
import Button from "./Button";

const FooterTop = () => {
  return (
    <div className="bg-blue">
      <ContentWrapper>
        <h1 className="text-white text-center font-bold text-4xl mb-4">
          Industry Leading Technologies
        </h1>
        <div className="flex justify-center">
        <Button type="white-filled">contact us</Button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FooterTop;
