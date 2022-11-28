import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

import InstaFeeds from "../components/InstaFeeds/InstaFeeds";

export const News = () => {
  return (
    <section className="w-full " id="news">
      <div className="container border-2">
        <Headings type="h2">News</Headings>

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
