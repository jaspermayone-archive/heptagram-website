import React from "react";

import HeptagramLogo from "../Assets/full-heptagram-logo.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
function Header() {
  const redirect = () => {
    window.location.href = "https://www.heptagrambotproject.com/"; //We will implement this once the backend is figured out.
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={HeptagramLogo} alt="Heptagram Logo" className="logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item second">
            <Link to="/" className="nav-link home active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://discord.gg/yHFQWNtNDt" className="nav-link server">
              Support Server
            </a>
          </li>
          <li className="nav-item">
            <Link to="/bot-commands" className="nav-link commands">
              Commands
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://api.heptagrambotproject.com"
              className="nav-link api"
            >
              API
            </a>
          </li>
          {/*  <li className="nav-item">
              <Link to="/dashboard">
                <button className="nav-user">
                  <img
                    className="nav-user"
                    alt="User avatar"
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpeg?size=64`}
                  />
                </button>
              </Link>
            </li> */}
          <li>
            <button onClick={redirect} type="button" className="nav-discord">
              Sign in with Discord
            </button>
          </li>
        </ul>
        <div className="hamburger" id="app">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}

export default Header;
