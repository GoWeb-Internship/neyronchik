import classnames from "classnames";
import { Headings } from "components/Headings/Headings";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import React from "react";
import * as s from "./Why.module.css";

import { WhyOther } from "components/WhyOther/WhyOther";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { WhyMobile } from "../../components/WhyMobile/WhyMobile";

export const Why = () => {
  const breakpoints = useBreakpoint();

  const { t } = useTranslation();

  const { whyUs_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section id="why">
      <div className={"containerPaddingBottom container"}>
        <Headings className={s.header}>{whyUs_title}</Headings>
        {breakpoints.notSm && <WhyOther />}
        {breakpoints.sm && <WhyMobile />}
      </div>
    </section>
  );
};
