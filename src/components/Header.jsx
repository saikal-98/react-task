import React from "react";
import "./Styles.css";

const Header = () => {
  return (
    <div id="nav">
      <img
        className="logo-nav"
        width={100}
        src="https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo_4x.png"
        alt=""
      />
      <ul id="navbar">
        <li>
          Home <a href="nav"></a>
        </li>
        <li>
          Section <a href="section"></a>
        </li>
        <li>
          Footer <a href="footer"></a>
        </li>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>
            <img
              width={15}
              src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
              alt=""
            />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
