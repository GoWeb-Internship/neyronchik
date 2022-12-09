import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { BsX } from "react-icons/bs";

// import * as s from "./Banner.module.css";

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
        className={`${
          isHidden
            ? "hidden"
            : "relative bg-sky-500 text-center text-neutral-50"
        }`}
      >
        <div className="container relative mr-auto ml-auto h-11 py-3">
          <p className="font-light leading-[1.5]">
            {promo_title} {frontmatter[`${language}_promo_body`]}
          </p>
          <button
            className="absolute top-3 right-[83px] flex h-5 w-5 items-center justify-center"
            onClick={handleClick}
          >
            <BsX size="1.3rem" />
          </button>
        </div>
      </div>
    )
  );
};

// <div className={`${isVisible ? ${s.bannerVisible} : ${s.bannerHidden}}`}>
//   <h2 className={s.bannerTitle}>Акція місяця!!! </h2>
//   <strong className={s.bannerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
//   <button className={s.bannerClsBtn}onClick={handleClick}>X</button>
// </div>
