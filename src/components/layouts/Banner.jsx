import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import BannerImage from "../../assets/images/banner.png";
import Container from "../Container";

const Banner = () => {
  return (
    <section className="flex pb-18">
      <div className="flex flex-col gap-y-14 items-center justify-center text-gray-b">
        <div className="flex flex-col gap-y-6">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
        </div>
        <span className="text-sm font-medium transform -rotate-90 min-w-20 uppercase">
          follow us
        </span>
      </div>
      <div className="p-2 border-2 border-solid border-pink-a w-full">
        <div
          className="h-[780px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <Container>
            <h4 class="pt-80 text-sm text-red-a font-medium flex items-center before:block before:w-10 before:h-0.5 before:bg-red-a before:mr-2">
              NEW TREND
            </h4>
            <h1 className="text-7xl leading-20 max-w-3xl ">
              SUMMER SALE STYLISH <span className="font-bold">WOMENS</span>
            </h1>
            <div className="pb-64">
              <button className="sliding-underline font-medium text-sm py-1.5">
                DISCOVER MORE
              </button>
            </div>
          </Container>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end">
        <span className="mb-9 text-sm font-medium transform -rotate-90 min-w-20 uppercase flex items-center before:block before:w-8 before:h-0.5 before:bg-black-a before:mr-2">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Banner;
