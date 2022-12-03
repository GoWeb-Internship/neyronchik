import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Markdown from 'markdown-to-jsx';
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "src/components/Headings/Headings";

import { ServicesCard } from "components/ServicesCard/ServicesCard";

export const Services = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___service_range }
        filter: {
          frontmatter: {
            services_identifier: { eq: "services" }
            en_service_title: { ne: "Service-example (do not delete!)" }
          }
        }
      ) {
        nodes {
          frontmatter {
            en_service_title
            uk_service_title
            service_list {
              en_service_description
              uk_service_description
              service_duration
              service_price
            }
          }
        }
      }
    }
  `);

  const { nodes } = allMarkdownRemark;

  const { language } = useI18next();
  const { t } = useTranslation();
  const { services_title } = t("titles", {
    returnObjects: true,
  });
  const { servicesBtn, servicesHideBtn } = t("button", {
    returnObjects: true,
  });

  return (
    <section
      className={` w-full overflow-hidden transition-all duration-[2500ms] ease-linear`}
      id="services"
    >
      <div className={` container border-2`}>
        <Headings type="h2">{services_title}</Headings>
        <div>
          {nodes &&
            nodes?.map(({ frontmatter }) => (
              <ServicesCard
                data={frontmatter}
                key={frontmatter.en_service_title}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
