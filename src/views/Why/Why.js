import classnames from "classnames";
import { Heading } from "components/Heading/Heading";
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
        <Heading className={s.header}>{whyUs_title}</Heading>
        {breakpoints.notSm && <WhyOther />}
        {breakpoints.sm && <WhyMobile />}
      </div>
    </section>
  );
};
