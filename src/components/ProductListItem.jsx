import React from "react";
import Flex from "./Flex";
import LilHeart from "../assets/icons/LilHeart";

const ProductListItem = ({
  imgClass,
  categoryName,
  productName,
  normalPrice,
  prevPrice,
  offerPrice,
}) => {
  return (
    <div className="w-[330px]">
      <div className={`h-[400px] w-full ${imgClass}`}></div>
      <div className="pt-3">
        <Flex className={"justify-between"}>
          <h5 className="text-gray-b text-sm">{categoryName}</h5>
          <LilHeart />
        </Flex>
        <h4>{productName}</h4>
        <h4>{normalPrice}</h4>
        <h4 className="text-red-b">
          <span className="text-gray-b line-through mr-2">{prevPrice}</span>
          {offerPrice}
        </h4>
      </div>
    </div>
  );
};

export default ProductListItem;
