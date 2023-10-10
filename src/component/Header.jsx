import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cartproduct from "./Cartproduct";
import { useSelector } from "react-redux";
const Header = ({classname}) => {
  const cartData = useSelector((state) => {
    // console.log(state.cartData.cartProductSlice)
    return state.cartData.cartProductSlice;
  })
  return(
    <>
      <nav className={`${classname} navbar navbar-expand-lg sticky-top`}>
        <div className="container-fluid">
          <a className="navbar-brand h1 text-uppercase title" href="javascript:void(0)">Right<span>Fit.com</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to='/' activeClassName="active" className="px-3 nav-link">All Products</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/featuredProducts' activeClassName="active" className="px-3 nav-link">Featured Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='' activeClassName="active" className="px-3 nav-link">
                  <a className="position-relative text-decoration-none" href='javascript:void(0)' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <AiOutlineShoppingCart color="#fff" fontSize={'25px'} />&nbsp;&nbsp;
                    <span className="text-white">
                    {cartData.length}
                    </span>
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <ul className="d-flex custom-nav p-0 m-0">
            <li className="nav-item">
              <NavLink to='/' activeClassName="active" className="px-3 nav-link">All Products</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/shop' activeClassName="active" className="px-3 nav-link">Featured Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='' activeClassName="active" className="px-3 nav-link">
                <a className="position-relative text-decoration-none" href='javascript:void(0)' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <AiOutlineShoppingCart color="#000" fontSize={'25px'} />&nbsp;&nbsp;
                  <span>
                    {cartData.length}
                  </span>
                </a>
              </NavLink>
            </li>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </ul>
        </div>
        <div className="offcanvas-body">
          <h5 className="text-black mb-3 fs-18">Shopping Cart</h5>
          {
            cartData !== null && cartData.length > 0 ?
            cartData.map((product, i) => {
              return(
                <Cartproduct product={product} key={i} />
              )
            }) :
            <div className="row"><hr />
              <div className="col-12 d-flex justify-content-center align-items-center text-center">
                <div>
                  <AiOutlineShoppingCart fontSize={'100px'} />
                  <h4>Your Cart is empty</h4>
                  <p>Add something to make me happy</p>
                  <button type="button" className="btn btn-sm btn-custom-secondary" data-bs-dismiss="offcanvas" aria-label="Close">Continue Shopping</button>
                </div>
              </div>
            </div>
          }
          {/* <Cartproduct />
          <Cartproduct /> */}
        </div>
      </div>
    </>
  )
}

export default Header;