import * as React from "react";

const Footer = () => {
  return (
    <footer className="w-full " id="footer">
      <div className="container border-2 text-center">
        <div>
          &#169; {new Date().getFullYear()} Нейрончики - логопедичний центр. Усі
          права захищені
        </div>
      </div>
    </footer>
  );
};
export default Footer;
