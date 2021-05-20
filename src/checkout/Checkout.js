import React from "react";
import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Subtotal from "../Subtotal/Subtotal";
import {useStateValue} from "../Providers/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <Container fluid>
      <div className="checkout">
        {/* <div className="checkout_left"> */}
        {/* <Row>
        <Col>
    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
    </Col>
    </Row> */}

        <Row>
          <Col lg={8} md={8} xs={12}>
            <Row m-3>
              <Col>
                <img
                  className="checkout__ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  alt=""
                />
              </Col>
            </Row>
            <h1 className="checkout__title">Your Shopping Basket</h1>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </Col>

          {/* <Col lg={3} md={3} xs={12}>
              <h1>Subtotal</h1>
            </Col> */}
          <Subtotal />
        </Row>
        {/* </div> */}
      </div>
    </Container>
  );
}

export default Checkout;
