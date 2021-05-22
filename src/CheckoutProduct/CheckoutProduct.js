import React from "react";
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutProduct.css";
import {useStateValue} from "../Providers/StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>UGX </small>

          <strong>{price}</strong>
        </p>
        <Button onClick={removeFromCart}>Remove from cart</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
