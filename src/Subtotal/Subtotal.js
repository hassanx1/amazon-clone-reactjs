import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Subtotal.css";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../Providers/StateProvider";
import {getBasketTotal} from "../Reducer/reducer";

function Subtotal() {
  const [{basket}] = useStateValue();

  return (
    <Col lg={4} md={4} xs={12}>
      <div className="subtotal">
        <h1>Subtotal</h1>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order conatains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"UGX "}
        />
        <Row>
          <Button variant="warning" size="sm" block>
            Proceed to checkout
          </Button>
        </Row>
      </div>
    </Col>
  );
}

export default Subtotal;
