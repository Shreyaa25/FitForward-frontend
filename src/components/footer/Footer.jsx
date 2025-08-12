import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 FitForward Platform. All rights reserved. <br /> Made
          by <a href="https://www.sakec.ac.in/">2SN</a>
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/shahanchor/">
            <AiFillFacebook />
          </a>
          <a href="https://x.com/sakectweets">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/sakec_chembur/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
