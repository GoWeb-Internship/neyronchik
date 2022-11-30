import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { useJsApiLoader } from "@react-google-maps/api";
// import { Grid } from "src/components";
// import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";
import Map from "../components/Map/Map";

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

  const divStyle = {
    backgroundColor: "green",
    width: "100%",
    width: "640px",
    height: "432px",
  };
  const textStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: "-1",
    width: "100%",
    height: "432px",
    backgroundColor: "#FEBF29",
  };

  const greenDiv = {
    width: "604px",
  };

  const wrapper = {
    height: "432px",
  };

  return (
    <section className="relative w-full pt-16 text-center" id="contacts">
      <Headings type="h2" className="mb-20">
        {contacts_title}
      </Headings>
      <div style={textStyle}></div>
      <div className="grid grid-cols-2" style={wrapper}>
        <div className="flex justify-end p-6">
          <div className="bg-amber-200  py-7 pl-11" style={greenDiv}>
            <Headings type="h3">{contactUs}</Headings>
            <address className=" flex text-left not-italic">
              <div className="flex-col border-r-2 pr-3">
                <a href={`tel:${frontmatter.phone_main}`} className="block">
                  {frontmatter.phone_main}
                </a>
                {frontmatter.phone_add && (
                  <a href={`tel:${frontmatter.phone_add}`} className="block">
                    {frontmatter.phone_add}
                  </a>
                )}
                <a href={`mailto:${frontmatter.email}`} className="block">
                  {frontmatter.email}
                </a>
                <ul className="flex">
                  <li className="mr-2">
                    <a href="">Telegram</a>
                  </li>
                  <li>
                    <a href="">Viber</a>
                  </li>
                </ul>
                <Headings type="h3">{socials}</Headings>
                <ul className="flex">
                  <li className="mr-2">
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Insta</a>
                  </li>
                </ul>
              </div>
              <div className="pl-3">
                <p>{frontmatter[`${language}_city`]}</p>
                <p>{frontmatter[`${language}_address`]}</p>
                <p>
                  Часи роботи: <br /> з 9:00 до 17:00
                </p>
              </div>
            </address>
          </div>
        </div>
        <div>{isLoaded && <Map center={center} />}</div>
      </div>
    </section>
  );
};

// const { allMarkdownRemark } = useStaticQuery(
//   graphql`
//     query ContactsQuery {
//       allMarkdownRemark(
//         filter: { frontmatter: { contacts_identifier: { eq: "contacts" } } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               email
//               en_address
//               en_contacts_title
//               latitude
//               longitude
//               phone_add
//               phone_main
//               title
//               uk_address
//               uk_contacts_title
//             }
//           }
//         }
//       }
//     }
//   `
// );

// const { edges } = allMarkdownRemark;
