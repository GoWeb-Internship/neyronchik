import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { BsChevronDown } from "react-icons/bs";
import Backdrop from "./Backdrop";

const showLanguage = (lang) => {
  return lang === "uk" ? "UA" : lang.toUpperCase();
};

const LanguageSwitch = () => {
  const [open, setOpen] = React.useState(false);
  const { languages, originalPath, language } = useI18next();

  const handleOpen = () => {
    console.log("click");
    setOpen(!open);
  };

  const langArray = languages.filter((lang) => lang !== language);

  return (
    <div>
      <button
        type="button"
        aria-label="open language switcher"
        onClick={handleOpen}
        className="flex items-center"
      >
        <BsChevronDown />
        <p>{showLanguage(language)}</p>
      </button>
      {open && (
        <>
          <ul className="relative z-20 w-full">
            {langArray.map((lng) => {
              return (
                <li key={lng}>
                  <Link to={originalPath} language={lng} onClick={handleOpen}>
                    <p>{showLanguage(lng)}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Backdrop bcDropClose={handleOpen} />
        </>
      )}
    </div>
  );
};

export default LanguageSwitch;
