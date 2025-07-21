import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "../../assets/icons/Logo";
import SecurePayments from "../../assets/images/secure-payments.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import MenuItem from "../MenuItem";

const Footer = () => {
  return (
    <section className="bg-gray-a">
      <Container>
        <div className="flex justify-between py-20">
          {/* address */}
          <div>
            <Logo />
            <p className="max-w-72 pt-12 pb-10 text-sm leading-6">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="max-w-28 font-medium text-sm leading-6">
              sale@uomo.com +1 246-345-0695
            </p>
            <Flex className={"gap-x-8 pt-14"}>
              <FaFacebookF className="hover:text-gray-b cursor-pointer" />
              <FaTwitter className="hover:text-gray-b cursor-pointer" />
              <FaInstagram className="hover:text-gray-b cursor-pointer" />
              <FaYoutube className="hover:text-gray-b cursor-pointer" />
              <FaPinterest className="hover:text-gray-b cursor-pointer" />
            </Flex>
          </div>
          {/* company */}
          <div>
            <h4 className="text-lg font-medium pb-12">COMPANY</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
              <MenuItem label={"About Us"} />
              <MenuItem label={"Careers"} />
              <MenuItem label={"Affiliates"} />
              <MenuItem label={"Blog"} />
              <MenuItem label={"Contact Us"} />
            </ul>
          </div>
          {/* shop */}
          <div>
            <h4 className="text-lg font-medium pb-12">SHOP</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
              <MenuItem label={"New Arrivals"} />
              <MenuItem label={"Accessories"} />
              <MenuItem label={"Men"} />
              <MenuItem label={"Women"} />
              <MenuItem label={"Shop All"} />
            </ul>
          </div>
          {/* help */}
          <div>
            <h4 className="text-lg font-medium pb-12">HELP</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
              <MenuItem label={"Customer Service"} />
              <MenuItem label={"My Account"} />
              <MenuItem label={"Find a Store"} />
              <MenuItem label={"Legal & Privacy"} />
              <MenuItem label={"Contact"} />
              <MenuItem label={"Gift Card"} />
            </ul>
          </div>
          {/* subscribe */}
          <div>
            <h4 className="text-lg font-medium pb-12">SUBSCRIBE</h4>
            <p className="max-w-[21rem] pb-7 text-sm">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div class="relative">
              <input
                type="text"
                placeholder="Your email address"
                class="bg-white py-4.5 pl-5 pr-12 w-full"
              />
              <button class="absolute top-0 right-0 h-full px-4 cursor-pointer font-medium">
                JOIN
              </button>
            </div>
            <h5 className="pt-10 pb-3 font-medium">Secure Payments</h5>
            <div>
              <img src={SecurePayments} alt="SecurePayments" />
            </div>
          </div>
        </div>
        <Flex className={"justify-between text-sm border-t-2 border-gray-c"}>
          <span>©2020 Uomo</span>
          <Flex className={"py-7"}>
            <span className="mr-6 text-gray-b">Language</span>
            <Flex className={"gap-x-4"}>
              United Kingdom | English <IoIosArrowUp className="text-lg" />
            </Flex>
            <span className="ml-8 mr-6 text-gray-b">Currency</span>
            <Flex className={"gap-x-4"}>
              $ USD <IoIosArrowUp className="text-lg" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
