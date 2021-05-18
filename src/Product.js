import React from "react";
import "./Product.css";
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({title, price, image, rating}) {
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
      <Button>Add to Cart</Button>
    </div>
  );
}

export default Product;
