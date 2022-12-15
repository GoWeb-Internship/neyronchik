import React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Heading } from "src/components/Heading/Heading";
import { CaruselGallery } from "components/CaruselGallery/CaruselGallery";
import * as s from "./Gallery.module.css";

export const Gallery = ({ images }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { gallery_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section id="gallery">
      <div className={`containerPaddingBottom  ${s.wrapper}`}>
        <Heading className="sm:mb-24 md:mb-[100px]  xl:mb-[130px]" type="h2">
          {gallery_title}
        </Heading>

        <CaruselGallery images={images.edges} />
      </div>
    </section>
  );
};
