import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "../../assets/icons/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between">
          {/* address */}
          <div>
            <Logo />
            <p className="max-w-72 pt-12 pb-10 text-sm leading-6">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="max-w-28 font-medium text-sm leading-6">
              sale@uomo.com +1 246-345-0695
            </p>
          </div>
          {/* company */}
          <div>
            <h4 className="text-lg font-medium pb-12">COMPANY</h4>
            <ul className="flex flex-col gap-y-7 text-sm">
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">About Us</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Careers</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Affiliates</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Blog</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Contact Us</li>
              </Link>
            </ul>
          </div>
          {/* shop */}
          <div>
            <h4 className="text-lg font-medium pb-12">SHOP</h4>
            <ul className="flex flex-col gap-y-7 text-sm">
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">New Arrivals</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Accessories</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Men</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Women</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Shop All</li>
              </Link>
            </ul>
          </div>
          {/* help */}
          <div>
            <h4 className="text-lg font-medium pb-12">HELP</h4>
            <ul className="flex flex-col gap-y-7 text-sm">
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Customer Service</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">My Account</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Find a Store</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Legal & Privacy</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Contact</li>
              </Link>
              <Link to={"/"}>
                <li className="sliding-underline py-1.5">Gift Card</li>
              </Link>
            </ul>
          </div>
          {/* subscribe */}
          <div>
            <h4 className="text-lg font-medium pb-12">SUBSCRIBE</h4>
            <p className="max-w-[17rem] pb-7 text-sm">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <input type="text" placeholder="Your email address" />
            <button>JOIN</button>
            <h5 className="pt-10">Secure Payments</h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
