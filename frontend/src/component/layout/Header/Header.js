import React from "react";

import logo from "../../../images/logo.png";

import Nav from "react-bootstrap/Nav";

import "./Head.css";
import { useSelector } from "react-redux";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

function Header(props) {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="center">
      <div className="container">
        <Nav className="navbar">
          <a className="title" href="/">
            Ecommerce
          </a>
          <a className="nav" href="/">
            Home
          </a>
          <a className="nav" href="/products">
            Products
          </a>
          {isAuthenticated ? (
            <a className="nav" href="/logout">
              Logout
            </a>
          ) : (
            <a className="nav" href="/login">
              Login
            </a>
          )}
        </Nav>
      </div>
    </div>
  );
}

export default Header;
