import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Heading } from "src/components/Heading/Heading";

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
        <Heading className="mb-[100px]">{news_title}</Heading>

        <InstaFeeds />
      </div>
    </section>
  );
};
