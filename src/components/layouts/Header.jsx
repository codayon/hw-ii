import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "../../assets/icons/Logo";
import Search from "../../assets/icons/Search";
import User from "../../assets/icons/User";
import Heart from "../../assets/icons/Heart";
import Cart from "../../assets/icons/Cart";
import Bar from "../../assets/icons/Bar";
import MenuItem from "../MenuItem";

const Header = () => {
  return (
    <section className="py-8">
      <Container>
        <Flex className={"justify-between"}>
          <Flex className={"gap-x-14"}>
            <div>
              <Logo />
            </div>
            <div>
              <ul className="flex gap-x-10 font-medium text-sm">
                <MenuItem label={"HOME"} to={"/"} />
                <MenuItem label={"SHOP"} to={"shop"} />
                <MenuItem label={"COLLECTION"} to={"collection"} />
                <MenuItem label={"JOURNAL"} to={"journal"} />
                <MenuItem label={"LOOKBOOK"} to={"lookbook"} />
                <MenuItem label={"PAGES"} to={"pages"} />
              </ul>
            </div>
          </Flex>
          <Flex className={"gap-x-8"}>
            <Search />
            <User />
            <Heart />
            <Cart />
            <Bar />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
