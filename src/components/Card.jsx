import Image from "next/image";
import Link from "next/link";
import React from "react";
const Card = ({ data, type }) => {
  const image = data?.attributes?.image?.data?.attributes?.url;
  return (
    <Link href={`${process.env.NEXT_PUBLIC_HOST}/${type}/${data?.id}`}>
      <div className="h-full w-72 flex flex-col items-center">
        <Image
          src={process.env.NEXT_PUBLIC_API__UPLOAD_URL + image}
          height={200}
          width={200}
          className="w-full"
          alt="card-image"
        />
        <div className="card-body p-5">
          <h6 className="text-dark-gray text-center mt-auto font-bold capitalize">
            {data?.attributes?.title}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default Card;
