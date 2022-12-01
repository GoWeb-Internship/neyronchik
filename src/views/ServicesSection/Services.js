import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Markdown from 'markdown-to-jsx';
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "src/components/Headings/Headings";

import ServicesItem from "./ServicesItem";
import AnimateHeight from "react-animate-height";

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
  const { servicesBtn, servicesHideBtn } = t("button", {
    returnObjects: true,
  });

  let styles;
  let serviceCard;
  let serviceSection;
  // if (typeof window !== `undefined`) {
  // }

  useEffect(() => {
    serviceSection = document.getElementById("services");
    console.log(serviceSection);

    serviceCard = document.getElementById("service-card");
    styles = getComputedStyle(serviceCard);
    console.log(styles.height);
  }, []);

  const [height, setHeight] = useState(0.1);

  const visibleServices = nodes?.slice(0, 3);
  // console.log(visibleServices);
  const hideServices = nodes.length > 3 ? nodes?.slice(3) : null;
  // console.log(hideServices);

  return (
    <section
      className={` w-full overflow-hidden transition-all duration-[2500ms] ease-linear`}
      id="services"
    >
      <div className={` container border-2`}>
        <Headings type="h2">{services_title}</Headings>
        <div>
          {visibleServices &&
            visibleServices?.map(({ frontmatter }) => (
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

          {hideServices && (
            <div>
              <AnimateHeight
                id="example-panel"
                duration={700}
                height={height}
                aria-hidden="false"
              >
                {hideServices &&
                  hideServices?.map(({ frontmatter }) => (
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
              </AnimateHeight>
              <button
                className="h-10 w-48 bg-green-500"
                type="button"
                aria-expanded={height !== 0.1}
                aria-controls="example-panel"
                onClick={() => setHeight(height === 0.1 ? "auto" : 0.1)}
              >
                {height === 0.1 ? `${servicesBtn}` : `${servicesHideBtn}`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
