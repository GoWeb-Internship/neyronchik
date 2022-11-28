import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full " id="footer">
      <div className="container border-2 text-center">
        <div>
          {new Date().getFullYear()} Нейрончики - логопедичний центр. Усі права
          захищені
        </div>
      </div>
    </footer>
  );
};
