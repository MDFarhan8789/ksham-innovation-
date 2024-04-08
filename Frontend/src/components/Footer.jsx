// components/Footer.js
import React, { useEffect, useState } from "react";
import "./Footer.css"; // Import your CSS file

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentHeight = document.getElementById("content").offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition + window.innerHeight >= contentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="content">
      <footer id="footer" style={{ display: showFooter ? "block" : "none" }}>
        <div className="row">
          <div className="col">
            <img className="logo" src="brand.png" alt="logo.png" />
            <p>Copyright &copy; Ksham Innovation 2023.</p>
            <p>All Rights Reserved</p>
          </div>
          <div className="col">
            <p>
              <a href="#">Privacy Policy</a> | <a href="#">Trademark</a> |{" "}
              <a href="#">Patent</a>
            </p>
          </div>
          <div className="col">
            <h3>
              Office{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>IIT Kanpur</p>
            <p className="email-id">kshaminno@outlook.com</p>
            <h4>+91 - 0123456789</h4>
          </div>
          <div className="col">
            <h3>
              Follow Us On{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <div className="icon">
              <img className="linkedin" src="./linkedin.png" alt="" />
              <img className="insta" src="./insta.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
