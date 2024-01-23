import React from "react";
import { Link } from "react-router-dom";
import LineItem from "../../components/LineItem/LineItem";
import styles from "./CheckOut.css";
import CheckOutTextImg from "./check-out-text-img.png";

function CheckOut({ handleCheckout }) {
  return (
    <div className="CheckOut">
      {/* <h1>Checkout</h1> */}
      <img src={CheckOutTextImg} alt="" className="check-out-text-image" />
      <div className="check-out-form">
        <div className="form-div">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" required />

            <label htmlFor="creditCard">Credit Card Number:</label>
            <input type="text" id="creditCard" name="creditCard" required />

            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" required />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />
            <Link to="/orders">
              <button type="submit" onClick={handleCheckout}>
                Place Order
              </button>
            </Link>
          </form>
        </div>
        <div className="fakeInfo">
          <p>Name: Naruto</p>
          <p>Address: Leaf village</p>
          <p>Credit Card: 1111-2222-3333-444</p>
          <p>Expiration Date: 01/02/3333</p>
          <p>CVV: 123</p>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
