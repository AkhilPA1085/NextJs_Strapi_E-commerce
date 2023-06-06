"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import { useSelector } from "react-redux";

const TopBar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const {cartItems}  = useSelector((state=>state.cart))
  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-16 flex items-center bg-white z-40">
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-4xl text-blue font-bold uppercase">Hydraulics</Link>
          <ul
            className={`hidden menu-list list-none p-0 md:flex items-center ${
              show
                ? `absolute left-0 top-14 !flex flex-col !items-start bg-white w-full px-5 md:px-0 h-screen`
                : `md:relative top-0`
            }`}
          >
            <li className="mr-4 mb-5 md:mb-0">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-4 mb-5 md:mb-0">
              <Link href="/products">Products</Link>
            </li>
            <li className="mr-4 mb-5 md:mb-0">
              <Link href="/services">Services</Link>
            </li>
            <li className="mr-4 mb-5 md:mb-0">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="mr-4 mb-5 md:mb-0">
              <Link href="/cart">Cart({cartItems.length})</Link>
            </li>
          </ul>
          <div className="block md:hidden menu-icon" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list h-10 w-10"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </ContentWrapper>
    </nav>
  );
};

export default TopBar;
