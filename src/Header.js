import React from 'react';
import './Header.css';

function Header() {
    return ( 
        <div className="header">
        <img className = 'header_logo'
        src = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />

        <div className = 'header_search' >
        <input className = 'header_searchInput'
        type = 'text' />
        </div>

        <div className = 'header_nav' >

        <div className = 'header_option' >
            <span classname="header_optionLineOne">Hello Guest</span>
            <span classname="header_optionLineTwo">Sign In</span>
             </div>

         <div className = 'header_option' > 
         
         <span classname="header_optionLinOne">Returns</span>
         <span classname="header_optionLineTwo">Orders</span>
         </div>

          <div className = 'header_option' > 
          <span classname="header_optionLineOne">Your</span>
          <span classname="header_optionLineTwo">prime</span>

          </div> 

    

          </div >

           </div >
    )
}

export default Header