import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Homebanner from "../component/Homebanner";
import Products from "./Products";
import Footer from "../component/Footer";
import { fetchProducts } from "../redux/slice/productSlice";
import { fetchFutureProducts } from "../redux/slice/featureproductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FeatureProduct from "./FeaturedProducts";
import { RotatingTriangles, Triangle } from 'react-loader-spinner';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [header, setHeader] = useState("header")

  const location = useLocation();

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header")
    } else if (window.scrollY > 70) {
      return setHeader("header2")
    } 
  }
  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
  }, [])
  return(
    <>
      <Header classname={header}/>
      <div className="home_bg">
        <Homebanner />
      </div>
      {
        !state.products.isLoading ?
        <>
          {
            location.pathname == '/' ? <Products products = {state.products.data} /> : <FeatureProduct products = {state.products.data} />
          }
          
        </> :
        <div className="mh-100 wh-100 position-relative">
          <div className="postion-absolute d-grid align-items-center justify-content-center mh-100" style={{ height: '100vh' }}>
            <Triangle
              height="100"
              width="100"
              color="#D13215"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </div>
      }
      <Footer />
    </>
  )
}

export default Home;