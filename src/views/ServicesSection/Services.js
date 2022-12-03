import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Markdown from 'markdown-to-jsx';
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "src/components/Headings/Headings";

import ServicesItem from "./ServicesItem";

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
              <div
                key={frontmatter.en_service_title}
                id="service-card"
                className="mb-2"
              >
                <p className="text-2xl">
                  {frontmatter[`${language}_service_title`]}
                </p>
                <ServicesItem data={frontmatter.service_list} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
