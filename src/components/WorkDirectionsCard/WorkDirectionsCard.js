import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

import { textShadow, cardBg } from "./WorkDirectionsCard.module.css";

export const WorkDirectionsCard = ({ frontmatter }) => {
  // console.log(frontmatter);

  const { language } = useI18next();

  return (
    frontmatter && (
      <div className="h-[396px] w-[320px] pt-5 mdOnly:h-[356px] mdOnly:w-[488px]">
        <div
          className={`${cardBg} flex h-full flex-col items-center rounded-[20px] bg-[#0EA5E9] shadow-directions-card`}
        >
          <div className="relative -top-5 h-[72px] w-[224px] overflow-hidden rounded-[10px] border border-solid border-[#FAFAFA] bg-directions-card px-1 pt-4 text-center backdrop-blur-sm mdOnly:-top-6 mdOnly:mb-3 mdOnly:h-[96px] mdOnly:w-[360px] mdOnly:rounded-[20px] mdOnly:pt-7 mdOnly:backdrop-blur-[8px]">
            <h3
              className={`${textShadow} font-adigiana text-[28px] font-normal leading-[100%] text-[#FAFAFA]`}
            >
              {frontmatter[`${language}_work_specialist`]}
            </h3>
            <p className="text-sm font-light leading-[150%] text-directions-black mdOnly:font-medium">
              {frontmatter[`${language}_work_text`]}
            </p>
          </div>
          <div className="innerScrollDirections scrollBarFirefox h-[260px] overflow-y-auto pl-2 pr-[14px] smOnly:ml-[14px] smOnly:mr-3 mdOnly:h-[184px] mdOnly:w-[480px] mdOnly:pl-5">
            <ul className="list-outside list-disc pl-[14px] text-directions-white ">
              {frontmatter.work_list?.map((list, index) => (
                <li key={index} className="mb-4 items-center">
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
