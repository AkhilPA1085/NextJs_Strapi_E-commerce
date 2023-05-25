import React from "react";
import ContentWrapper from "./ContentWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-light-gray">
      <ContentWrapper>
        <div className="grid md:grid-cols-4">
          <div>
            <Link href="/" className="text-4xl text-blue font-bold uppercase">
              Hydraulics
            </Link>
            <p className="text-dark-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              tempore ut saepe inventore voluptatibus, officiis maxime accusamus
              excepturi debitis velit.
            </p>
          </div>
          <div>
            <h6 className="text-dark-gray uppercase font-bold">COMPANY</h6>
            <ul className="list-none p-0">
              <li className="text-dark-gray capitalize font-semi-bold my-5">
                <Link href="/about">About us</Link>
              </li>
              <li className="text-dark-gray capitalize font-semi-bold my-5">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-dark-gray uppercase font-bold">
              USEFULL LINKS
            </h6>
            <ul className="list-none p-0">
              <li className="text-dark-gray capitalize font-semi-bold my-5">
                <Link href="/products">products</Link>
              </li>
              <li className="text-dark-gray capitalize font-semi-bold my-5">
                <Link href="/services">services</Link>
              </li>
            </ul>
          </div>
          <div>
          <h6 className="text-dark-gray uppercase font-bold">
              Follow Us
            </h6>
            {/* <ul className="list-none p-0">
              <li className="text-dark-gray capitalize font-semi-bold my-5">
                <Link href="/products">products</Link>
              </li>
              <li className="text-dark-gray capitalize font-semi-bold my-5">
                <Link href="/services">services</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
