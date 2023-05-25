import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="h-full w-72 flex flex-col items-center">
      <Image src="/service sample.jpg" height={200} width={200} className="w-full"/>
      <div className="card-body p-5">
        <h6 className="text-dark-gray text-center mt-auto font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </h6>
      </div>
    </div>
  );
};

export default Card;
