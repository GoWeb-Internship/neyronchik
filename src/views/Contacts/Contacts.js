import { useJsApiLoader } from "@react-google-maps/api";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

import { Heading } from "src/components/Heading/Heading";
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

  return (
    <section className={s.section} id="contacts">
      <Heading type="h2" className={s.sectionTitle}>
        {contacts_title}
      </Heading>

      <div
        className={s.wrapper}
        // className="grid h-[432px] grid-cols-2"
      >
        {/* <div className={s.background}></div> */}
        <Contact
          contactUs={contactUs}
          phone_main={frontmatter.phone_main}
          phone_add={frontmatter.phone_add}
          email={frontmatter.email}
          socials={socials}
          city={frontmatter[`${language}_city`]}
          address={frontmatter[`${language}_address`]}
        />
        {/* <div className="bg-slate-600 sm:h-full sm:w-full"></div> */}
        <div>{isLoaded && <Map center={center} />}</div>
      </div>
    </section>
  );
};
