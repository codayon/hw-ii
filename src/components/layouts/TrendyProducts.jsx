import React from "react";
import Container from "../Container";
import { Link } from "react-router";
import Flex from "../Flex";
import ProductListItem from "../ProductListItem";

const TrendyProducts = () => {
  return (
    <section className="py-12">
      <Container>
        <h3 className="text-4xl text-center">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h3>
        <Flex className={"justify-center py-10"}>
          <ul className="flex gap-x-10 font-medium text-sm">
            <Link to={"/"}>
              <li className="sliding-underline ">ALL</li>
            </Link>
            <Link to={"/"}>
              <li className="sliding-underline ">NEWARRIVALS</li>
            </Link>
            <Link to={"/"}>
              <li className="sliding-underline ">BEST SELLER</li>
            </Link>
            <Link to={"/"}>
              <li className="sliding-underline ">TOP RATING</li>
            </Link>
          </ul>
        </Flex>
        <div className={"flex flex-wrap gap-y-8 justify-between"}>
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Cropped Faux Leather Jacket"}
            normalPrice={"$29"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Calvin Shorts"}
            normalPrice={"$62"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Kirby T-Shirt"}
            normalPrice={"$17"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Cableknit Shawl"}
            prevPrice={"$129"}
            offerPrice={"$99"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Colorful Jacket"}
            normalPrice={"$29"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Shirt In Botanical Cheetah Print"}
            normalPrice={"$62"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Cotton Jersey T-Shirt"}
            normalPrice={"$17"}
          />
          <ProductListItem
            categoryName={"Dresses"}
            productName={"Zessi Dresses"}
            prevPrice={"$129"}
            offerPrice={"$99"}
          />
        </div>
        <div className="flex justify-center pt-8 pb-12">
          <h4 className="sliding-underline font-sm font-medium">
            SEE ALL PRODUCT
          </h4>
        </div>
      </Container>
    </section>
  );
};

export default TrendyProducts;
