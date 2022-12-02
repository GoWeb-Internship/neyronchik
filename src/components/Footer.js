import * as React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-neutral-900" id="footer">
      <div className="container py-7 text-center text-[14px] font-light leading-[21px] tracking-[-0.019em]">
        &#169; {new Date().getFullYear()} Нейрончики - логопедичний центр. Усі
        права захищені
      </div>
    </footer>
  );
};
export default Footer;
