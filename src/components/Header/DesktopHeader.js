import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Banner } from "../Banner/Banner";
import DesktopNavbar from "./DesktopNavbar";
import LanguageSwitch from "components/LanguageSwitch/LanguageSwitch";
import * as s from "./Header.module.css";

const DesktopHeader = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query HeaderQuery {
        markdownRemark(
          frontmatter: { contacts_identifier: { eq: "contacts" } }
        ) {
          frontmatter {
            phone_main
            phone_add
          }
        }
      }
    `
  );

  const { frontmatter } = markdownRemark;

  return (
    <header className={s.desktop}>
      <Banner />
      <div className="mr-auto ml-auto flex h-[72px] max-w-[1280px] items-center justify-between py-1 pl-[42px] pr-[83px] text-[14px] text-neutral-900">
        <DesktopNavbar />
        <a
          href={`tel:${frontmatter.phone_main}`}
          className="mr-6 w-[166px] font-medium leading-[1.5]"
        >
          {frontmatter.phone_main}
        </a>
        <ul className="flex items-center">
          <li className="mr-3 flex h-6 w-6 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="mr-3 flex h-6 w-6 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="flex h-6 w-6 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
        <LanguageSwitch className="ml-8" />
      </div>
    </header>
  );
};

export default DesktopHeader;
