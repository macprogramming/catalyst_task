import React, { useState } from "react";
import { addProduct } from "../redux/slice/cartdataSlice";
import { useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { AiFillCheckCircle } from 'react-icons/ai';
const Productcard = (props) => {
  const dispatch = useDispatch();
  let [popupText, setPopupText] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  const addToCart = (item) => {
    dispatch(addProduct(item));
    setPopupText('Product has been added to your cart');
    setIsAdd(true)
    setInterval(() => {
      setIsAdd(false)
    }, 3000)
  }
  return(
    <>
      <div className="col">
        <div class="card rounded-0 border-0">
          <div className="product_card">
            <img src={props.img} alt={props.name} loading="lazy" className="img img-fluid w-100" />
            <div className="addCart">
              <button className="btn" type="button" onClick={ () => addToCart(props.product)}>Add Cart</button>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title fs-18 fw-50 fw-500">{props.name}</h5>
            <div className="d-flex">
              <small className="text-black text-uppercase fs-14 fs-700">{props.color}</small>&nbsp;&nbsp;
              <small className="text-muted text-uppercase fs-14 fw-400">{props.material}</small>
            </div>
            <p className="text-black text-uppercase fs-14 text-custom-primary-theme fw-400">INR {props.price}</p>
          </div>
        </div>
      </div>

      <Modal
        show={isAdd}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="text-center">
            <AiFillCheckCircle fontSize={'40px'} color="#CA4022" />
            <p className="text-center my-2">{popupText}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Productcard;