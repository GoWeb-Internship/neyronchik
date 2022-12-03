import React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "src/components/Headings/Headings";
import { Carusel } from "components/Carusel/Carusel";
import boy from "img/gallery/boy.svg";
import * as s from "./Gallery.module.css";

export const Gallery = ({ images }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { gallery_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className="w-full py-5" id="gallery">
      <div className={`container ${s.wrapper}`}>
        <Headings className="mb-20 text-sky-500" type="h2">
          {gallery_title}
        </Headings>

        <Carusel type="gallery" images={images} />
      </div>
    </section>
  );
};
