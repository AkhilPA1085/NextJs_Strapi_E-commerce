"use client";
import Image from "next/image";
import ContentWrapper from "./ContentWrapper";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Section = () => {
    const router = useRouter();
    const handleReadmore = ()=>{
        router.push('/about');
    }
  return (
    <ContentWrapper>
      <div className="grid md:grid-cols-2 gap-4">
        <Image height={500} width={500} src="/home image 1.jpg" />
        <div className="text-content">
          <h6 className="text-black text-lg font-medium uppercase tracking-wide">
            Hydraulics Company WLLC
          </h6>
          <h1 className="text-blue font-bold text-4xl mb-4">
            Pioneers In Hydraulics & Pneumatics In Bahrain.
          </h1>
          <p className="text-black text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima
            provident deserunt perferendis dolorum recusandae magni adipisci
            repellendus quas, nihil voluptates ipsam ipsa illo dicta nobis fuga!
            Possimus magni laudantium soluta sunt corporis, nam suscipit? Autem
            rerum officiis in eum.
          </p>
          <Button type="outlined" onClick={handleReadmore}>read more</Button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Section;
