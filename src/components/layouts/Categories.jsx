import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";

const Categories = () => {
  return (
    <section className="py-12">
      <Container>
        <div className={"flex w-full gap-8"}>
          {/* div 1 */}
          <div className="bg-[#EFF0F2] text-sm w-1/2 flex flex-col justify-end p-10 h-[600px] items-start group cursor-pointer">
            <h4>HOT LIST</h4>
            <h3 className="font-medium text-2xl">
              <span className="font-bold">WOMEN</span> COLLECTION
            </h3>
            <Button text={"SHOP NOW"} />
          </div>
          <div className={"flex w-1/2 flex-col gap-8"}>
            {/* div 2 */}
            <div className="bg-[#E5E2DD] text-sm w-full flex flex-col justify-end p-10 h-[284px] items-start group cursor-pointer">
              <h4>HOT LIST</h4>
              <h3 className="font-medium text-2xl">
                <span className="font-bold">MEN</span> COLLECTION
              </h3>
              <Button text={"SHOP NOW"} />
            </div>
            <div className={"flex w-full gap-8"}>
              {/* div 3 */}
              <div className="bg-[#E7E6E4] text-sm w-1/2 flex flex-col justify-end p-10 h-[284px] items-start group cursor-pointer">
                <h4>HOT LIST</h4>
                <h3 className="font-medium text-2xl">
                  <span className="font-bold">KIDS</span> COLLECTION
                </h3>
                <Button text={"SHOP NOW"} />
              </div>
              {/* div 4 */}
              <div className="bg-[#F5E6E0] text-sm w-1/2 flex flex-col justify-end p-10 h-[284px] items-start group cursor-pointer">
                <h3 className="font-medium text-2xl">
                  <span className="font-bold">E-GIFT</span> CARDS
                </h3>
                <p className="max-w-[213px] leading-6 pt-2 pb-3">
                  Surprise someone with the gift they really want.
                </p>
                <Button text={"DISCOVER MORE"} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
