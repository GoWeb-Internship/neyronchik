import React from "react";
import { Link } from "gatsby";
import instagram from "img/social/instagram.svg";
import facebook from "img/social/facebook.svg";
import logo from "img/logo.png";
import { Banner } from "src/views/Banner/Banner";

import LanguageSwitch from "components/LanguageSwitch/LanguageSwitch";
import * as s from "./Navbar.module.css";
import classnames from "classnames";
const sections = ["about", "team", "services", "gallery", "news", "contacts"];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Navbar = () => {
  return (
    <>
      <nav
        className={s.navSection}
        role="navigation"
        aria-label="main-navigation"
      >
        <Banner />
        <div className={classnames("container", s.navContainer)}>
          <div className="mr-6">
            <Link to="/" title="Logo">
              <img src={logo} alt="Neyronchik" />
            </Link>
          </div>
          <ul id="navMenu" className="flex grow justify-between">
            {sections.map((section) => (
              <li key={section}>
                <Link to={"#" + section}>{capitalizeFirstLetter(section)}</Link>
              </li>
            ))}
          </ul>{" "}
          <div className={s.phone}>+3216549873</div>
          <ul className={s.socialContainer}>
            <li className={s.socialItem}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span>
                  <img src={instagram} alt="instagram" />
                </span>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span>
                  <img src={instagram} alt="instagram" />
                </span>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span>
                  <img src={instagram} alt="instagram" />
                </span>
              </a>
            </li>
          </ul>
          <LanguageSwitch className="ml-8" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
