import React from "react";

import "./NavbarSocialMedia.Styled.css";

export default function NavbarSocialMedia() {
  return (
    <div className="navbar-social-media">
      <h2>
        {" "}
        <i className="fa-brands fa-facebook"></i>
      </h2>
      <h2>
        <i className="fa-brands fa-square-instagram"></i>
      </h2>
      <h2>
        <i className="fa-solid fa-phone"></i>
      </h2>
    </div>
  );
}
