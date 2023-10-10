import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import FeatureProduct from "./FeaturedProducts";
const Routers = () => {
  return(
    <>
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route exact index path="/featuredProducts" element={<FeatureProduct />} />
      </Routes>
    </>
  )
}

export default Routers;