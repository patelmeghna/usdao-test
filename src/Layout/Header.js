import React, { useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {

    const [toggle, setToggle] = useState("false");

    const toggleClass = () => {
        setToggle(!toggle);
    }

    let location = useLocation();
    
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="usdao" />
          </Link>
        </div>

        <div
          onClick={toggleClass}
          class={toggle ? "button_container" : "button_container active"}
          id="toggle"
        >
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>

        <div className={toggle ? "navlinks" : "navlinks open"}>
          <Link onClick={toggleClass} to="/asset" className={`nav_link ${location.pathname === "/asset" ? "active" : "" }`}>
            Asset Token
          </Link>
          <Link onClick={toggleClass} to="/gov" className={`nav_link ${location.pathname === "/gov" ? "active" : "" }`}>
            Governance
          </Link>
          <Link onClick={toggleClass} to="/stablecoin" className={`nav_link ${location.pathname === "/stablecoin" ? "active" : "" }`}>
            Stablecoin
          </Link>
          <Link onClick={toggleClass} to="/community" className={`nav_link ${location.pathname === "/community" ? "active" : "" }`}>
            Community
          </Link>
          <Link onClick={toggleClass} to="/ecosystem" className={`nav_link ${location.pathname === "/ecosystem" ? "active" : "" }`}>
            Ecosystem
          </Link>

          {/* <button className="btn btn-border-gradient text-uppercase">
            Launch App
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Header;
