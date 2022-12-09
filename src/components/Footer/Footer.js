import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as s from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  // const { neyronchiki, rights } = t("footer", {
  //   returnObjects: true,
  // });
  const { title, weAre, rights } = t("page", {
    returnObjects: true,
  });

  return (
    <footer className="w-full text-neutral-900" id="footer">
      <div className={s.wrapper}>
        &#169; {new Date().getFullYear()} {title} - {weAre.toLowerCase()}.{" "}
        {rights}
      </div>
    </footer>
  );
};
export default Footer;
