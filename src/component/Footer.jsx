import React from "react";
import { NavLink } from "react-router-dom";
import logos from '../assets/icons_logos.svg';
import companyLogo from '../assets/company_logo.svg';
const Footer = () => {
  return(
    <>
      <div className="container-fluid bg_black py-3">
        <div className="row px-md-5">
          <h3 className="text-uppercase title pb-4 fs-18">Rightfit.com</h3>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 px-md-5">
          <div className="col">
            <ul className="navbar-nav custom-nav p-0">
              <li className="nav-item">
                <NavLink to='/' activeClassName="active" className="nav-link py-0">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/allProducts' activeClassName="active" className="nav-link py-0">All Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' activeClassName="active" className="nav-link py-0">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/aboutUs' activeClassName="active" className="nav-link py-0">About Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col">
            <p className="text-custom-white fs-14">We are a registered E-commerce seller and we support a variety of Local and International payment modes</p>
            <img src={logos} alt="logos" />
          </div>
          {/* <div className="col"></div> */}
          <div className="col">
            <p className="text-custom-white fs-14">Website protected by</p>
            <img src={companyLogo} alt="companyLogo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;