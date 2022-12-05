import React from "react";
import { Link } from "gatsby";
import instagram from "../../../static/img/social/instagram.svg";
import logo from "../../../static/img/logo.svg";
import { Banner } from "src/views/Banner/Banner";
import { capitalizeFirstLetter } from "utils/capitalizeFirst";
import LanguageSwitch from "components/LanguageSwitch/LanguageSwitch";
import * as s from "./Navbar.module.css";
import classnames from "classnames";

const sections = ["about", "team", "services", "gallery", "news", "contacts"];

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
