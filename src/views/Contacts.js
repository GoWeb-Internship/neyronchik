import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { useJsApiLoader } from "@react-google-maps/api";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
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
    <section className="relative w-full pt-16 text-center" id="contacts">
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
        <div className="flex justify-end px-[53px] py-[60px] text-neutral-900">
          <div className="rounded-[20px] border border-[#FAFAFA] bg-sky-200 p-7 text-[16px] font-medium tracking-[-0.019em] shadow-[0_0_19px_5px_rgba(52,101,123,0.15)_inset_-20px_-20px_40px_rgba(255,255,255,0.2)_inset_20px_20px_40px_rgba(255,255,255,0.2)]">
            {/* <Headings type="h3" className="text-[16px] font-medium">
              {contactUs}
            </Headings> */}
            <h3 className="mb-10 text-[16px] font-medium tracking-[-0.019em]">
              {contactUs}
            </h3>
            <address className="flex text-left not-italic ">
              <div className="flex-col border-r-2 border-neutral-900 pr-3">
                <a
                  href={`tel:${frontmatter.phone_main}`}
                  className="mb-4 block"
                >
                  {frontmatter.phone_main}
                </a>
                {frontmatter.phone_add && (
                  <a href={`tel:${frontmatter.phone_add}`} className="block">
                    {frontmatter.phone_add}
                  </a>
                )}
                <a href={`mailto:${frontmatter.email}`} className="mb-7 block">
                  {frontmatter.email}
                </a>
                <ul className="mb-7 flex">
                  <li className="mr-3 flex h-8 w-8 items-center justify-center rounded border border-neutral-900">
                    <a href="">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li className="flex h-8 w-8 items-center justify-center rounded border border-neutral-900">
                    <a href="">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
                {/* <Headings type="h3">{socials}</Headings> */}
                <h3 className="mb-4">{socials}</h3>
                <ul className="flex">
                  <li className="mr-3 flex h-8 w-8 items-center justify-center rounded border border-neutral-900">
                    <a href="">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="flex h-8 w-8 items-center justify-center rounded border border-neutral-900">
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-[166px] pl-3">
                <p>{frontmatter[`${language}_city`]}</p>
                <p className="mb-8">{frontmatter[`${language}_address`]}</p>
                <p>
                  Часи роботи: <br /> з 9:00 до 17:00
                </p>
              </div>
            </address>
          </div>
        </div>
        {/* <div>{isLoaded && <Map center={center} />}</div> */}
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
