import React from "react";
import "./Product.css";
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {useStateValue} from "./Providers/StateProvider";

function Product({id, title, price, image, rating}) {
  const [{basket}, dispatch] = useStateValue();

  // console.log("this is the basket >>>", basket);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <Col>
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>UGX</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            <p>star</p>
          </div>
        </div>
      </Col>

      <img src={image} alt="" />
      <Button onClick={addToCart}>Add to Cart</Button>
    </div>
  );
}

export default Product;
