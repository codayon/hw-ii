import React from "react";
import Banner from "../components/layouts/Banner";
import Categories from "../components/layouts/Categories";
import TrendyProducts from "../components/layouts/TrendyProducts";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <TrendyProducts />
      <Button />
    </>
  );
};

export default Home;
