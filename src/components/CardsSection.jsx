"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import Card from "./Card";
import Button from "./Button";
import { useRouter } from "next/navigation";

function CardsSection({ type, data,pathname,limit }) {
  const router = useRouter();
  const handlePage = () => {
    router.push(`/${type}`);
  };

  return (
    <div className={`${type === "products" ? "bg-light-gray" : "bg-white"}`}>
      <ContentWrapper>
        <h6 className="text-black text-lg font-medium uppercase tracking-wide">
          our {type}
        </h6>
        <h1 className="text-blue font-bold text-4xl mb-4">
          Industry Leading Technologies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.slice(0,limit).map((item) => {
            return(
              <Card key={item.id} data={item} type={type}/>
              )
          })}
        </div>
        
        <div className={(pathname === '/' + type) ? `hidden`:`flex justify-center`}>
          <Button type="outlined" onClick={handlePage}>
            view all {type}
          </Button>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default CardsSection;
