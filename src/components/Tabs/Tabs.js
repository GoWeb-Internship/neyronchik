import React from "react";
import { Tab } from "@headlessui/react";

import { WorkDirectionsCard } from "../WorkDirectionsCard/WorkDirectionsCard";

import { textShadow } from "./Tabs.module.css";

export const Tabs = ({ list }) => {
  console.log(list);

  return (
    <Tab.Group
      as="div"
      vertical
      className="flex flex-row-reverse justify-end px-3 smOnly:hidden"
    >
      <Tab.List as="ul" className="pt-5">
        {list &&
          list.map(({ frontmatter }, index) => {
            return (
              <Tab
                as="li"
                key={index}
                className="h-84[px] relative flex w-[232px] cursor-pointer items-center justify-center focus:outline-none"
              >
                {({ selected }) => (
                  <div
                    className={`flex items-center justify-center overflow-hidden rounded-[10px] font-adigiana text-[28px] font-normal leading-[100%] text-[#FAFAFA] ${textShadow} h-[84px] w-[216px]  bg-[#0EA5E9] shadow-directions-card`}
                  >
                    <p className="z-10">{frontmatter.en_work_specialist}</p>
                    <div
                      className={
                        selected
                          ? `shadow-tab-selected absolute h-[60px] w-[232px] rounded-[10px]  border border-solid border-[#FAFAFA] bg-directions-card backdrop-blur-[8px]`
                          : `absolute h-[60px] w-[232px] bg-directions-card opacity-0`
                      }
                    ></div>
                  </div>
                )}
              </Tab>
            );
          })}
      </Tab.List>
      <Tab.Panels as="div">
        {list &&
          list.map(({ frontmatter }, index) => {
            return (
              <Tab.Panel as="div" key={index} className="mr-6">
                <WorkDirectionsCard frontmatter={frontmatter} />
              </Tab.Panel>
            );
          })}
      </Tab.Panels>
    </Tab.Group>
  );
};
