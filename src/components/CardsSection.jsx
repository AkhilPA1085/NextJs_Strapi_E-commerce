'use client';
import React from "react";
import ContentWrapper from "./ContentWrapper";
import Card from "./Card";
import Button from "./Button";
import { useRouter } from "next/navigation";

function CardsSection() {
  const router = useRouter();
  const handleServices = () => {
    router.push("/services");
  };
  return (
    <ContentWrapper>
      <h6 className="text-black text-lg font-medium uppercase tracking-wide">
        WHAT WE OFFER
      </h6>
      <h1 className="text-blue font-bold text-4xl mb-4">
        Industry Leading Technologies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <Button type="outlined" onClick={handleServices}>
          view all services
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default CardsSection;
