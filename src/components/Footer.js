import * as React from "react";

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
