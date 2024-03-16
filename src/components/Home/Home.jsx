import React from "react";
import "./Home.Styled.css";
import Navbars from "../Navbar/Navbars";
import NavbarSocialMedia from "../NavbarSocialMedia/NavbarSocialMedia";
import Introduction from "../Introduction/Introduction";
import MainHome from "../MainHome/MainHome";

export default function Home() {
  return (
    <div className="home-body">
      <NavbarSocialMedia />
      <Navbars />
      <MainHome />
      <Introduction />
    </div>
  );
}
