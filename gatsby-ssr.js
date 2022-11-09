import React from "react"
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
  ])
}