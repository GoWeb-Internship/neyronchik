import React from "react";
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/static/fonts/e-Ukraine-Regular.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
      key="Ukraine"
    />,
    <link
      rel="preload"
      href="/static/fonts/Adigiana_Extreme.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Adigiana"
    />,
  ]);
};
