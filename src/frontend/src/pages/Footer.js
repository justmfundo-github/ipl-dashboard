import "./Footer.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <>
        <hr />
        <div className="overview">
          <h2>
            {/* <p>
              This project's core was built based on an IPL project tutorial from JavaBrains
              <br />
            </p> */}
            <p className="user-instructions">
              <br />
              This project's core was built based on an IPL project tutorial from JavaBrains and then upgraded/improved by this author.
              <br />
            </p>
          </h2>
        </div>
      </>
    </div>
  );
}

export default Footer;
