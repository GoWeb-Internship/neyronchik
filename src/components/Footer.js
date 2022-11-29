import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

const Footer = () => {
  return (
    <footer className="w-full " id="footer">
      <div className="container border-2 bg-red-500">
        <div>
          {new Date().getFullYear()} Нейрончики - логопедичний центр. <br />
          Усі права захищені
        </div>
      </div>
    </footer>
  );
};
export default Footer;
