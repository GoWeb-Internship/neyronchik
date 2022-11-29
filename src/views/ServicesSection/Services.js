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
  // console.log(allMarkdownRemark);
  const { nodes } = allMarkdownRemark;
  // console.table(nodes);

  // const visibleServices = nodes?.slice(0);
  // console.log(visibleServices);

  const { language } = useI18next();
  const { t } = useTranslation();
  const { services_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className="w-full " id="services">
      <div className="container border-2">
        <Headings type="h2">{services_title}</Headings>
        <ul>
          {nodes?.map(({ frontmatter }) => (
            <li key={frontmatter.en_service_title}>
              <p className="text-2xl">
                {frontmatter[`${language}_service_title`]}
              </p>
              <ServicesItem data={frontmatter.service_list} />
            </li>
          ))}
        </ul>

        {nodes.length > 3 && (
          <button className="h-10 w-48 bg-green-500" type="button">
            See more...
          </button>
        )}

        {/* <div className="flex  h-[600px] w-full flex-row flex-wrap overflow-y-hidden">
          <div className="h-80 w-64 bg-orange-400">
            <p>service 1</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 2</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 3</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 4</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 5</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 6</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
