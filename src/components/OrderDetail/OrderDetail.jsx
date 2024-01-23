import React from "react";
import LineItem from "../LineItem/LineItem";
import styles from "./OrderDetail.module.css";
import { useImg } from "../../context/ImgContext";
import { Link } from "react-router-dom";

function OrderDetail({ order, handleChangeQty, handleCheckout}) {
  const {selectedImg} = useImg()

  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div className={styles.OrderDetail}>
      <div className={styles.sectionHeading}>
        {order.isPaid ? (
          <span>
            ORDER <span className="smaller">{order.orderId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className={styles.selectedImgContainer}>
        <h3>Your Image:</h3>
          <img src={URL.createObjectURL(selectedImg)} alt="selected" className={styles.selectedImg} />
        
        </div>
      <div
        className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}
      >
        {lineItems.length ? (
          <>
            {lineItems}
            <section className={styles.total}>
              {order.isPaid ? (
                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
              ) : (
                 <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
               
              )}
              <span>{order.totalQty}</span>
              <span className={styles.right}>
                ${order.orderTotal.toFixed(2)}
              </span>
            </section>
          </>
        ) : (
          <div className={styles.hungry}>Make a choice!</div>
        )}
        {/* <div className={styles.selectedImgContainer}>
          <img src={URL.createObjectURL(selectedImg)} alt="selected" className={styles.selectedImg} />
        
        </div> */}
      </div>
    </div>
  );
}

export default OrderDetail;
