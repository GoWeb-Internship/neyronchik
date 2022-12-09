import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Logo from "../../../static/img/logo.inline.svg";
import * as s from "./Header.module.css";

const DesktopNavbar = () => {
  const { t } = useTranslation();
  const header = t("header", {
    returnObjects: true,
  });
  const titlesArray = Object.values(header);

  return (
    <nav
      role="navigation"
      aria-label="main-navigation"
      className="mr-6 flex items-center text-neutral-900"
    >
      <Link to="/" title="Logo" className="mr-6">
        <Logo className="h-[64px] w-[164px]" />
      </Link>
      <ul className="flex font-light leading-[1.5]">
        {titlesArray.map((title) => (
          <li key={title} className={s.navItem}>
            <Link to={"#" + title} className="py-1">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
