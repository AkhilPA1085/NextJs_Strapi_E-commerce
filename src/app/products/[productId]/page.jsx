"use client";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";
import { getProduct } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = async ({ params: { productId } }) => {
  const dispatch = useDispatch();

  const buttonClassName = "md:mx-2";

  const productData = await getProduct(productId);
  const product = await productData?.data;
  const image = product?.attributes?.image?.data?.attributes?.url;

  const notify = () => {
    toast.success("Success,item added to cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleCart = () => {
    dispatch(
      addToCart({...product,oneProdPrice:product?.attributes?.price})
    );
    notify();
  };

  return (
    <div className="py-16">
      <ToastContainer />
      <ContentWrapper>
        <div className="flex align-center text-dark-gray mb-10 font-bold">
          <Link href="/">
            Home <span className="px-2 font-normal">&gt;</span>
          </Link>
          <Link href="/products">Products</Link>
        </div>
        <div className="md:flex">
          <Image
            width={500}
            height={500}
            src={process.env.NEXT_PUBLIC_API__UPLOAD_URL + image}
            alt={product?.attributes?.title}
          />
          <div className="text-content px-2">
            <h1 className="font-bold capitalize text-left text-2xl text-blue mb-5">
              {product?.attributes?.title}
            </h1>
            <p className="description text-lg text-dark-gray">
              {product?.attributes?.description}
            </p>
            <p className="description text-2xl text-black font-bold">
              {product?.attributes?.price}/-
            </p>
            <div className="md:flex align-center">
              <Button type="filled">Buy now</Button>
              <Button
                type="outlined"
                className={buttonClassName}
                onClick={handleCart}
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ProductDetail;
