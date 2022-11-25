import React, { useState, useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

// import * as s from './Banner.module.css'

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

  // const ClsBtn = <button onClick={handleClick}>X</button>
  // const { t } = useTranslation();

  const { language } = useI18next();

  const { markdownRemark } = useStaticQuery(
    graphql`
      query BannerQuery {
        markdownRemark(frontmatter: { promo_identifier: { eq: "banner" } }) {
          frontmatter {
            en_promo_body
            en_promo_title
            promo_displayed
            uk_promo_body
            uk_promo_title
          }
        }
      }
    `
  );

  const { frontmatter } = markdownRemark;

  return (
    frontmatter.promo_displayed && (
      <div className={`${isHidden ? "hidden" : "flex"}`}>
        <h2 className="text-xl font-bold">
          {frontmatter[`${language}_promo_title`]}
        </h2>
        <strong className="ext-xl font-normal">
          {frontmatter[`${language}_promo_body`]}
        </strong>
        <button
          className="flex h-[16px] w-[16px] justify-center"
          onClick={handleClick}
        >
          Кнопка "закрыть Х"
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
