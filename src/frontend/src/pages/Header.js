import "./Header.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState(path == "/" ? true : false);

  return (
    <div className="header-section">
      <h1 className="app-name">
        <Link to="/">IPL DashBoard </Link>
      </h1>
      {display && (
        <>
          <hr />
          <div class="overview">
            <h2>
              <p>
                A simple project than consumes database information on cricket games, scores and teams.
                <br />A java Spring boot built REST API exposing data to a React front end.
                <br />
              </p>
              <p>
                <br />
                View each team's win loss history from the league's inception to 2020.
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
