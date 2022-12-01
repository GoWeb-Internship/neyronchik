import * as React from "react";
import { graphql } from "gatsby";
// import Layout from "src/components/Layout";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";

const NotFoundPage = () => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { title, description, button } = t("404", {
    returnObjects: true,
  });

  return (
    <main>
      <section>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link
            className="inline-block w-48 bg-green-500 pt-4  pb-4 text-center"
            to="/"
          >
            {button}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
