import React from "react";

const Homebanner = () => {
  return(
    <>
      <div className="h-100 z-index1 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="col-12 col-md-12">
            <h1 className="text-white fw-bold z-index1">Latest Styles</h1>
            <p className="m-0">At Yesterday's Prices</p>
            <button className="btn btn-sm btn-cu text-uppercase btn-custom-secondary">Browse All Styles</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homebanner;