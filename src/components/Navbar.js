import React from "react";
import { Link } from "gatsby";
import instagram from "../img/social/instagram.svg";
import facebook from "../img/social/facebook.svg";
import logo from "../img/logo.svg";

const sections = ["about", "team", "services", "gallery", "news", "contacts"];

const Navbar = () => {
  return (
    <nav
      className="absolute left-1/2 top-0 w-full "
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container flex h-32 items-center bg-yellow-200 py-4">
        <div>
          <Link to="/" title="Logo">
            <img
              src={logo}
              alt="Neyronchik"
              style={{ backgroundColor: "red", width: "164px", height: "80px" }}
            />
          </Link>
        </div>
        <ul id="navMenu" className="flex ">
          {sections.map((section) => (
            <li>
              <Link to={"#" + section}>{section}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex">
          <li className="h-10 w-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer nodeffer"
            >
              <span className="icon">
                <img src={instagram} alt="instagram" />
              </span>
            </a>
          </li>
          <li className="h-10 w-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer nodeffer"
            >
              <span className="icon">
                <img src={facebook} alt="facebook" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
