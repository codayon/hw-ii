import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import ProductListItem from "../ProductListItem";
import Button from "../Button";
import MenuItem from "../MenuItem";

const TrendyProducts = () => {
  return (
    <section className="py-12">
      <Container>
        <h3 className="text-4xl text-center">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h3>
        <ul className="flex gap-8 justify-center py-10 text-gray-b">
          <MenuItem
            label={"ALL"}
            className={"text-black-a"}
            classBottom={"w-3/5"}
          />
          <MenuItem label={"NEW ARRIVALS"} />
          <MenuItem label={"BEST SELLER"} />
          <MenuItem label={"TOP RATING"} />
        </ul>
        <div className={"flex flex-wrap gap-y-8 justify-between"}>
          <ProductListItem
            imgClass={"bg-[#f5f4f9]"}
            categoryName={"Dresses"}
            productName={"Cropped Faux Leather Jacket"}
            normalPrice={"$29"}
          />
          <ProductListItem
            imgClass={"bg-[#F8F8F8]"}
            categoryName={"Dresses"}
            productName={"Calvin Shorts"}
            normalPrice={"$62"}
          />
          <ProductListItem
            imgClass={"bg-[#F1F1F1]"}
            categoryName={"Dresses"}
            productName={"Kirby T-Shirt"}
            normalPrice={"$17"}
          />
          <ProductListItem
            imgClass={"bg-[#F5F4F9]"}
            categoryName={"Dresses"}
            productName={"Cableknit Shawl"}
            prevPrice={"$129"}
            offerPrice={"$99"}
          />
          <ProductListItem
            imgClass={"bg-[#f5f4f9]"}
            categoryName={"Dresses"}
            productName={"Colorful Jacket"}
            normalPrice={"$29"}
          />
          <ProductListItem
            imgClass={"bg-[#F8F8F8]"}
            categoryName={"Dresses"}
            productName={"Shirt In Botanical Cheetah Print"}
            normalPrice={"$62"}
          />
          <ProductListItem
            imgClass={"bg-[#F1F1F1]"}
            categoryName={"Dresses"}
            productName={"Cotton Jersey T-Shirt"}
            normalPrice={"$17"}
          />
          <ProductListItem
            imgClass={"bg-[#F5F4F9]"}
            categoryName={"Dresses"}
            productName={"Zessi Dresses"}
            prevPrice={"$129"}
            offerPrice={"$99"}
          />
        </div>
        <div className="flex justify-center pt-8 pb-12">
          <Button text={"SEE ALL PRODUCT"} className={"group"} />
        </div>
      </Container>
    </section>
  );
};

export default TrendyProducts;
