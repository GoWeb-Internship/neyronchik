import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Contacts = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query ContactQuery {
        markdownRemark(
          frontmatter: { contacts_identifier: { eq: "contacts" } }
        ) {
          frontmatter {
            email
            en_address
            latitude
            longitude
            phone_add
            phone_main
            uk_address
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

  return (
    <section className="w-full " id="contacts">
      <div className="container border-2">
        <Headings type="h2">{contacts_title}</Headings>
        <div className="flex flex-col">
          <p>Зв'яжіться с нами або завітайте у гості</p>
          <a href={`tel:${frontmatter.phone_main}`}>{frontmatter.phone_main}</a>
          <a href={`tel:${frontmatter.phone_add}`}>{frontmatter.phone_add}</a>
          <a href="">Telegram</a>
          <a href="">Viber</a>
          <p>Ми у соціальних мережах:</p>
          <a href="">Facebook</a>
          <a href="">Insta</a>
          <p>{frontmatter[`${language}_address`]}</p>
          <p>Часи роботи: з 9:00 до 17:00</p>
          <div className="bg-red-300">
            Мапа <br />
            {frontmatter.latitude} <br />
            {frontmatter.longitude}
          </div>
        </div>
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
