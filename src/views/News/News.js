import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
// import { Grid } from "src/components";
// import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

import InstaFeeds from "../../components/InstaFeeds/InstaFeeds";

import { newsBg, textShadow } from "./News.module.css";

export const News = () => {
  const { t } = useTranslation();
  const { news_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className={`w-full ${newsBg} pb-14`} id="news">
      <div className="md:mr-auto md:ml-auto md:w-[768px] xl:w-[1116px] notXl:pr-3 notXl:pl-3">
        <h1
          className={`${textShadow} mb-10 text-center font-adigiana text-[40px] font-normal leading-[100%] text-[#0EA5E9] md:text-[52px] md:leading-[150%]`}
        >
          {news_title}
        </h1>

        <InstaFeeds />
      </div>
    </section>
  );
};
