import React from "react";
import { Headings } from "components/Headings/Headings";
import * as s from "./Why.module.css";
import { HandInCircle } from "components/HandInCircle/HandInCircle";
import classnames from "classnames";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { WhyOther } from "components/WhyOther/WhyOther";
import { WhyMobile } from "../../components/WhyMobile/WhyMobile";

export const Why = () => {
  const breakpoints = useBreakpoint();

  const { t } = useTranslation();

  const { whyUs_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section id="why">
      <div className={classnames("container", s.whyContainer)}>
        <Headings className={s.header}>{whyUs_title}</Headings>
        {breakpoints.notSm && <WhyOther />}
        {breakpoints.sm && <WhyMobile />}
      </div>
    </section>
  );
};
