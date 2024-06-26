import "./Header.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [display] = useState(path === "/" ? true : false);

  return (
    <div className="header-section">
      <h1 className="app-name">
        <Link to="/">IPL DashBoard </Link>
      </h1>
      {display && (
        <>
          <hr />
          <div className="overview">
            <h2>
              <p>
                A simple project than consumes database information on cricket games, scores and teams.
                <br />
                Built using java Spring boot. Uses REST API to expose data to a React front end.
                <br />
              </p>
              <p className="user-instructions">
                <br />
                View each team's win loss history from the year of the league's inception to 2020.
                <br />
              </p>
            </h2>
          </div>
        </>
      )}
      <hr />
    </div>
  );
}

export default Header;
