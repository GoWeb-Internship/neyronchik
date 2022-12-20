import React from "react";
import { Tab } from "@headlessui/react";

import { WorkDirectionsCard } from "../WorkDirectionsCard/WorkDirectionsCard";

export const Tabs = ({ list }) => {
  console.log(list);

  return (
    <Tab.Group
      as="div"
      vertical
      className="flex flex-row-reverse justify-end smOnly:hidden"
    >
      <Tab.List as="ul" className="pt-5">
        {list &&
          list.map(({ frontmatter }, index) => {
            return (
              <Tab as="li" key={index}>
                {({ selected }) => (
                  <div>
                    <p
                      className={
                        selected
                          ? `h-[84px] w-[216px] bg-slate-500`
                          : `h-[84px] w-[216px] cursor-pointer bg-red-400 text-center`
                      }
                    >
                      {frontmatter.en_work_specialist}
                    </p>
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
              <Tab.Panel as="div" key={index}>
                <WorkDirectionsCard frontmatter={frontmatter} />
              </Tab.Panel>
            );
          })}
      </Tab.Panels>
    </Tab.Group>
  );
};
