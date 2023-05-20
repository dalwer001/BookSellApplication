import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import {FaUser} from "react-icons/fa";
import {FaCartPlus} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import logo from "../../../assests/logo/book_store.png";

 const Header = () => {
  return (
    <ReactNavbar
    logo={logo}
    burgerColor="tomato"
    navColor1="#fff"
    burgerColorHover="crimson"
    logoWidth="50%"
    logoHoverColor="crimson"
    link1Size="1.2rem"
    link1Color="#121212"
    link1Padding="1vmax"
    link1ColorHover="crimson"
    nav2justifyContent="flex-end"
    link1Margin="1vmax"
    link2Margin="0"
    link3Margin="0"
    link4Margin="1vmax"
    nav3justifyContent="flex-start"
    link1Family="sans-serif"
    link1Text="Home"
    link2Text="Products"
    link3Text="Contact"
    link4Text="About"
    link1Url="/"
    link2Url="/products"
    link3Url="/contact"
    link4Url="/about"
    nav4justifyContent="flex-start"
    searchIconMargin="0.5vmax"
    cartIconMargin="1vmax"
    profileIconMargin="0.5vmax"
    profileIcon={true}
    ProfileIconElement={FaUser}
    profileIconColor="rgba(35, 35, 35,0.8)"
    cartIcon={true}
    CartIconElement={FaCartPlus}
    cartIconColor="rgba(35, 35, 35,0.8)"
    searchIcon={true}
    SearchIconElement={FaSearch}
    searchIconColor="rgba(35, 35, 35,0.8)"
    />
  )
}

export default Header;