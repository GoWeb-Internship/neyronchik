import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Contacts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ContactsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { contacts_identifier: { eq: "contacts" } } }
        ) {
          edges {
            node {
              frontmatter {
                email
                en_address
                en_contacts_title
                latitude
                longitude
                phone_add
                phone_main
                title
                uk_address
                uk_contacts_title
              }
            }
          }
        }
      }
    `
  );

  const { language } = useI18next();
  const { edges } = allMarkdownRemark;

  return edges.map((edge) => {
    const { frontmatter } = edge.node;
    return (
      <section className="w-full " id="hero">
        <div className="container border-2">
          <Headings type="h2">Contacts</Headings>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
        </div>
      </section>
    );
  });
};
