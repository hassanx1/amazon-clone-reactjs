import React from "react";
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>UGX </small>

          <strong>{price}</strong>
        </p>
        <Button>Remove from cart</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
