import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Header = () => {
  return (
    <header className="w-full " id="header">
      <div className="container border-2">
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </header>
  );
};
