import ContentWrapper from "@/components/ContentWrapper";
import { getService } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = async ({ params: { serviceId } }) => {
  const service = await getService(serviceId);
  const image = service?.attributes?.innerbanner?.data?.attributes?.url;
  return (
    <div className="py-16 h-full">
      <Image
        src={process.env.NEXT_PUBLIC_API__UPLOAD_URL + image}
        height={500}
        width={500}
        alt={service?.attrbutes?.title}
        className="w-full h-96"
      />
      <ContentWrapper>
        <div className="flex align-center text-dark-gray mb-10 font-bold">
          <Link href="/">Home <span className="px-2 font-normal">&gt;</span> </Link>
          <Link href="/services">Services</Link>
        </div>
        <h1 className="font-bold capitalize text-left text-2xl text-blue mb-5">
          {service?.attributes?.title}
        </h1>
        <p className="description text-lg text-dark-gray">
          {service?.attributes?.description}
        </p>
      </ContentWrapper>
    </div>
  );
};

export default ServiceDetails;
