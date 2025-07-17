import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router";
import Logo from "../../assets/icons/Logo";
import Search from "../../assets/icons/Search";
import User from "../../assets/icons/User";
import Heart from "../../assets/icons/Heart";
import Cart from "../../assets/icons/Cart";
import Bar from "../../assets/icons/Bar";

const Header = () => {
  return (
    <section className="py-8">
      <Container>
        <Flex className={"justify-between"}>
          <Flex className={'gap-x-14'}>
            <div>
              <Logo />
            </div>
            <div>
              <ul className="flex gap-x-10 font-medium text-sm">
                <Link to={"/"}>
                  <li className="sliding-underline ">HOME</li>
                </Link>
                <Link to={"shop"}>
                  <li className="sliding-underline ">SHOP</li>
                </Link>
                <Link to={"collection"}>
                  <li className="sliding-underline ">COLLECTION</li>
                </Link>
                <Link to={"journal"}>
                  <li className="sliding-underline ">JOURNAL</li>
                </Link>
                <Link to={"lookbook"}>
                  <li className="sliding-underline ">LOOKBOOK</li>
                </Link>
                <Link to={"pages"}>
                  <li className="sliding-underline ">PAGES</li>
                </Link>
              </ul>
            </div>
          </Flex>

          <Flex className={"gap-x-8"}>
            <div className="w-5 h-5">
              <Link to={"/"}>
                <Search />
              </Link>
            </div>
            <div className="w-5 h-5">
              <Link to={"/"}>
                <User />
              </Link>
            </div>
            <div className="w-5 h-5">
              <Link to={"/"}>
                <Heart />
              </Link>
            </div>
            <div className="w-5 h-5">
              <Link to={"/"}>
                <Cart />
              </Link>
            </div>
            <div className="w-5 h-5">
              <Link to={"/"}>
                <Bar />
              </Link>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
