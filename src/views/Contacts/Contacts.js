import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { useJsApiLoader } from "@react-google-maps/api";
// import {
//   FaTelegramPlane,
//   FaWhatsapp,
//   FaFacebookF,
//   FaInstagram,
// } from "react-icons/fa";
// import { Grid } from "src/components";
// import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
// import { Headings } from "src/components/Headings/Headings";
import { Contact, Map } from "../../components";
import * as s from "./Contacts.module.css";

export const Contacts = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query ContactQuery {
        markdownRemark(
          frontmatter: { contacts_identifier: { eq: "contacts" } }
        ) {
          frontmatter {
            en_address
            en_city
            uk_address
            uk_city
            phone_main
            phone_add
            email
            latitude
            longitude
          }
        }
      }
    `
  );

  const { frontmatter } = markdownRemark;
  const { language } = useI18next();
  const { t } = useTranslation();
  const { contacts_title } = t("titles", {
    returnObjects: true,
  });
  const { contactUs, socials } = t("contactsSection", {
    returnObjects: true,
  });

  const center = {
    lat: frontmatter.latitude,
    lng: frontmatter.longitude,
  };

  const GATSBY_GOOGLE_API_KEY = process.env.GATSBY_GOOGLE_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GATSBY_GOOGLE_API_KEY,
  });

  // H2
  // font-family: 'Adigiana Extreme';
  // font-style: normal;
  // /* Sky/500 */
  // color: #0EA5E9;
  // text-shadow: 2px 1px 0px #000000;

  // H3
  // font-family: 'e-Ukraine';
  // font-style: normal;

  //   font-family: 'e-Ukraine';
  // font-style: normal;
  // font-weight: 500;
  // font-size: 16px;
  // line-height: 150%;
  // /* or 24px */

  // display: flex;
  // align-items: center;
  // letter-spacing: -0.019em;

  return (
    <section className={s.section} id="contacts">
      {/* <Headings
        type="h2"
        className="text mb-20 text-[52px] font-normal leading-normal tracking-[0.02em]"
      >
        {contacts_title}
      </Headings> */}
      <h2 className="text mb-20 text-[52px] font-normal leading-normal tracking-[0.02em]">
        {contacts_title}
      </h2>
      <div className="absolute bottom-0 left-0 -z-10 h-[432px] w-full bg-sky-500"></div>
      <div className="grid h-[432px] grid-cols-2">
        <Contact
          contactUs={contactUs}
          phone_main={frontmatter.phone_main}
          phone_add={frontmatter.phone_add}
          email={frontmatter.email}
          socials={socials}
          city={frontmatter[`${language}_city`]}
          address={frontmatter[`${language}_address`]}
        />
        {/* <div>{isLoaded && <Map center={center} />}</div> */}
      </div>
    </section>
  );
};
