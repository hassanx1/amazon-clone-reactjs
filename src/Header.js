import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header_search">
        {/* <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" /> */}
        <InputGroup className="m-3" size="lg">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            // className="header_searchInput"
          />
          <InputGroup.Append>
            <InputGroup className="header_searchIcon">
              <SearchIcon />
            </InputGroup>
          </InputGroup.Append>
        </InputGroup>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
