import React, { useState } from "react";
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { removeProduct } from "../redux/slice/cartdataSlice";
const Cartproduct = ({product, key}) => {
  const dispatch = useDispatch();
  let [popupText, setPopupText] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  const deleteProduct = (index) => {
    dispatch(removeProduct(index));
    setPopupText('Product has been removed from your cart');
    setIsAdd(true)
    setInterval(() => {
      setIsAdd(false)
    }, 3000)
  }
  return(
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-3 bg-transparent border-0 rounded-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} className="img img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body py-0">
                  <h5 class="card-title fs-18 fw-500">{product.name}</h5>
                  <div className="d-flex">
                    <small className="text-black text-uppercase fs-14 fw-700">Black</small>&nbsp;&nbsp;
                    <small className="text-muted text-uppercase fs-14 fw-400">Coton</small>
                  </div>
                  <p className="text-black text-uppercase fs-14 text-custom-primary-theme fw-400">INR {product.price}</p>
                  <button type="button" className="btn btn-sm btn-secondary rounded-0" onClick={ () => deleteProduct(key)}>Remove&nbsp;<AiOutlineClose /></button>
                </div>
              </div>
            </div>
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
            <AiFillCheckCircle fontSize={'40px'} color="green" />
            <p className="text-center my-2">{popupText}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Cartproduct