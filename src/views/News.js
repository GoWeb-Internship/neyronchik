import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

import InstaFeeds from "../components/InstaFeeds/InstaFeeds";

export const News = () => {
  const { t } = useTranslation();
  const { news_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className="w-full " id="news">
      <div className="container border-2">
        <Headings type="h2">{news_title}</Headings>

        <div
        // style={{
        //   width: "100%",
        //   height: "200px",
        //   backgroundColor: "grey",
        // }}
        >
          <InstaFeeds />
        </div>
      </div>
    </section>
  );
};
