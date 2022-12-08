import React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import { textShadow, cardBg } from "./WorkDirectionsCard.module.css";
// import { innerScroll } from "../../styles/scroll.css";

export const WorkDirectionsCard = ({ frontmatter }) => {
  console.log(frontmatter);

  const { language } = useI18next();

  return (
    frontmatter && (
      <div className="h-[396px] w-[320px] pt-5">
        <div
          className={`${cardBg} flex h-full flex-col items-center rounded-[20px] bg-[#0EA5E9] shadow-directions-card`}
        >
          <div className="relative -top-5 h-[72px] w-[224px] overflow-hidden rounded-[10px] border border-solid border-[#FAFAFA] bg-directions-card px-1 pt-4 text-center backdrop-blur-sm">
            <h3
              className={`${textShadow} font-adigiana text-[28px] font-normal leading-[100%] text-[#FAFAFA]`}
            >
              {frontmatter[`${language}_work_specialist`]}
            </h3>
            <p className="text-sm font-light leading-[150%] text-directions-black">
              {frontmatter[`${language}_work_text`]}
            </p>
          </div>
          <div className={`h-[260px] overflow-y-auto pl-[14px] pr-5`}>
            <ul className="list-outside list-disc pl-[14px] text-directions-white">
              {frontmatter.work_list?.map((list, index) => (
                <li key={index}>
                  <span className="text-sm font-light leading-[150%] text-directions-white">
                    {list[`${language}_work_description`]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};
