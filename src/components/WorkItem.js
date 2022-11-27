import React from "react";

export const WorkItem = ({ doctor }) => {
  return (
    <li>
      <div>
        <p>{doctor}</p>
        <p>працює над:</p>
        <p>content</p>
      </div>
    </li>
  );
};
