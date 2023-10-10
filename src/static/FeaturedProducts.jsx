import React, { useEffect, useState } from "react";
import Productcard from "../component/Productcard";
import { AiOutlineClose } from 'react-icons/ai';

const FeatureProduct = ({products}) => {
  let productsData = products;
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [mainProductData, setMainProductData] = useState([]);
  const [finalDupData, setFinalDupData] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);
  const [color, setColor] = useState([]);
  const [material, setMaterial] = useState([]);
  let [checkBadge, setCheckBadge] = useState(['All']);
  const [isFilter, setIsFilter] = useState(false);

  const fetchMaterial = async () => {
    try{
      let res = await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        }
      });
      let data = await res.json();
      return data.material;
    }catch(err) {
      console.log(err)
    }
  }
  const fetchColorApi = async () => {
    try{
      let res = await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors', {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        }
      });
      let data = await res.json();
      return data.colors;
    }catch(err) {
      console.log(err)
    }
  }
  // const [currentPage, setCurrentpage] = useState(1);
  const recordPerPage = 6;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = allProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(allProducts.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)
  // console.log(records)
  useEffect(() => {
    let productsData = products;
    if(productsData !== null) {
      setAllProducts(products.products);
      setFinalData(products.products);
      setMainProductData(products.products); 
    }
    
    setFinalDupData(records);
    fetchColorApi().then((res) => {
      setColor(res)
    })
    fetchMaterial().then((res) => {
      setMaterial(res)
    })
  }, [currentPage]);

  const sortBy = (val, type, text) => {
    let arrVal = checkBadge;
    let filterData;
    if(type == 'color') {
      if(val !== 'All') {
        filterData = finalData.filter((i,n) => {
          return i.colorId === val;
        });
      } else {
        filterData = finalData
      }
    }
    if(type == 'material') {
      if(val !== 'All') {
        filterData = finalData.filter((i,n) => {
          return i.materialId === val;
        });
      } else {
        filterData = finalData
      }
    }
    setAllProducts(filterData)
    arrVal[1] = text;
    //if(arrVal.includes(!text)){
    //arrVal.push(text);
    //}
    
    setCheckBadge(arrVal);
  }

  const clearFilter = (val,index) => {
    setIsFilter(!isFilter)
    let arrVal = checkBadge;
    if(arrVal[index] == val) {
      arrVal.splice(index, 1);
    }
    setCheckBadge(arrVal)
    resetData(checkBadge, index)
  }

  const resetData = (badge, index) => {
    let badgeArr = ['All']
    if (badge.length === 1) {
      setCheckBadge(badgeArr)
      setAllProducts(mainProductData)
    }
  }
  return(
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-2 ps-md-4">
          <h6>Materials</h6>
          <ul className="custom-nav p-0">
            <li onClick={ () => sortBy('all', 'material', 'All') }>All</li>
            {
              material.map((mat, key) => {
                return(
                  <li key={key} id={mat.id} onClick={ () => sortBy(mat.id, 'material', mat.name) }>{mat.name}</li>
                )
              })
            }
          </ul>
          <h6>Color</h6>
          <ul className="custom-nav p-0">
            <li onClick={ () => sortBy('all', 'color', 'All') }>All</li>
            {
              color.map((col, key) => {
                return(
                  <li key={key} id={col.id} onClick={ () => sortBy(col.id, 'color', col.name) }>{col.name}</li>
                )
              })
            }
          </ul>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-12">
                <h5>Featured Products</h5>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                {
                  checkBadge.map((badge, i) => {
                    return(
                      <>
                      <span key={i} class="badge bagde-gray rounded-0 p-2 text-capitalize">{badge}&nbsp;{badge !== 'All' && <a href="javascript:void(0)" className="text-white fw-bold" onClick={ (e) => {clearFilter(badge,i)}}><AiOutlineClose color="#000" /></a>}</span>&nbsp;
                      </>
                    )
                  })
                }
              </div>
            </div>
            
            <div className="row row-cols-lg-3 row-cols-1 g-2 g-lg-4 me-md-5">
              {
                //finalData.length <= 0 ?
                records.map((item, key) => {
                  return(
                    <>
                    <Productcard
                      product={item}
                      img={item.image} 
                      name={item.name}
                      color='balck'
                      material='Cotton'
                      price={item.price}
                    />
                    </>
                  )
                })
              }
            </div>
            <div className="row">
              <div className="col-12">
                <nav aria-label="...">
                  <ul className="pagination custom-pagination justify-content-center m-0 my-3">
                      {
                        numbers.map((n, i) => {
                          return(
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                              <a className="page-link" href="javascript:void(0)" onClick={() => setCurrentpage(n)}>{n}</a>
                            </li>
                          )
                        })
                      }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureProduct;