import React, { useState, useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import * as s from "./Banner.module.css";

export const Banner = () => {
  const [isHidden, setHidden] = useState(false);

  // This runs when the page is loaded.
  useEffect(() => {
    if (sessionStorage.getItem("hidden-banner")) {
      setHidden(true);
    }
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("hidden-banner", "true");
    setHidden(true);
  };

  const { language } = useI18next();
  const { t } = useTranslation();
  const { promo_title } = t("titles", {
    returnObjects: true,
  });

  const { markdownRemark } = useStaticQuery(
    graphql`
      query BannerQuery {
        markdownRemark(frontmatter: { promo_identifier: { eq: "banner" } }) {
          frontmatter {
            promo_displayed
            en_promo_body
            uk_promo_body
          }
        }
      }
    `
  );

  const { frontmatter } = markdownRemark;

  return (
    frontmatter.promo_displayed && (
      <div
        className={`container ${
          isHidden ? "hidden" : "flex bg-black text-center text-white"
        }`}
      >
        <div className="flex w-full ">
          <h2 className="text-xl font-bold">{promo_title}</h2>
          <strong className="ext-xl font-normal">
            {frontmatter[`${language}_promo_body`]}
          </strong>
        </div>
        <button
          className="ml-5 flex h-[16px] w-[16px] justify-center font-black "
          onClick={handleClick}
        >
          Х
        </button>
      </div>
    )
  );
};

// <div className={`${isVisible ? ${s.bannerVisible} : ${s.bannerHidden}}`}>
//   <h2 className={s.bannerTitle}>Акція місяця!!! </h2>
//   <strong className={s.bannerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
//   <button className={s.bannerClsBtn}onClick={handleClick}>X</button>
// </div>
