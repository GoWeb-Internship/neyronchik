import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
// import { Grid } from "src/components";
// import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

import InstaFeeds from "../../components/InstaFeeds/InstaFeeds";

import { newsBg } from "./News.module.css";

export const News = () => {
  const { t } = useTranslation();
  const { news_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className={`w-full pb-14 ${newsBg}`} id="news">
      <div className="pr-3 pl-3">
        <h1 className="mb-10 text-center font-adigiana text-[40px] font-normal leading-[100%] text-[#0EA5E9]">
          {news_title}
        </h1>

        <InstaFeeds />
      </div>
    </section>
  );
};
