"use client";
import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();  
  const handleAbout = ()=>{
    router.push('/about');
  }
  const handleProducts = ()=>{
    router.push('/products');
  }
  return (
    <div className="banner w-full h-screen relative">
      <Image
        src="/home banner.jpg"
        width={500}
        height={500}
        alt="banner"
        className="w-full h-full relative object-cover"
      />
      <ContentWrapper>
        <div className="content absolute top-1/3 md:top-2/3 bottom-auto">
          <h6 className="text-blue text-lg font-medium uppercase tracking-wide">
            Hydraulics Company WLLC
          </h6>
          <h1 className="text-white font-bold text-4xl mb-4">
            Pioneers In Hydraulics & Pneumatics In Bahrain.
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <Button type="filled" onClick={handleAbout}>
              read more
            </Button>
            <Button type="outlined" onClick={handleProducts}>
              view all products
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
