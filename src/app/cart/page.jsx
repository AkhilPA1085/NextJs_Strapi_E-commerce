"use client";
import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { useMemo, useState } from "react";

import { makePaymentRequest } from "@/utils/api";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const[loading,setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const subTotal = useMemo(()=>{
    return cartItems.reduce((total,val)=>total + val.attributes.price,0)
  },[cartItems]);

  const handlePayment = async() =>{
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest({
        products: cartItems
      })
      if (res && res.stripeSession && res.stripeSession.id) {
        await stripe.redirectToCheckout({
          sessionId: res.stripeSession.id,
        });
      } else {
        // Handle error when the response or required properties are missing
        console.error('Invalid response or missing stripeSession ID');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContentWrapper>
      <div className="md:flex justify-between">
        <div className="grow">
          {cartItems.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </div>
        <div className="card h-full p-5 bg-light-gray flex flex-col items-center">
          <p>SUB TOTAL : {subTotal}</p>
          <Button type="filled" onClick={handlePayment}>Checkout</Button>
        </div>
      </div>
    </ContentWrapper>
  );
};
export default Cart;
