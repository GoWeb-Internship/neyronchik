import React from "react";

import { Headings } from "src/components/Headings/Headings";
import { Carusel } from "components/Carusel/Carusel";

export const Gallery = () => {
  return (
    <section className="w-full py-5" id="gallery">
      <div className="container relative">
        <Headings className="mb-5 " type="h2">
          Gallery
        </Headings>

        <Carusel type="gallery" />
      </div>
    </section>
  );
};
