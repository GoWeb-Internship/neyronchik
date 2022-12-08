// import React from "react";
// import { Link } from "gatsby";
// import { useTranslation } from "gatsby-plugin-react-i18next";
// import classnames from "classnames";
// import instagram from "../../../static/img/social/instagram.svg";
// import logo from "../../../static/img/logo.svg";
// import { Banner } from "src/views/Banner/Banner";
// import { capitalizeFirstLetter } from "utils/capitalizeFirst";
// import LanguageSwitch from "components/LanguageSwitch/LanguageSwitch";
// import * as s from "./Navbar.module.css";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const header = t("header", {
//     returnObjects: true,
//   });
//   const titlesArray = Object.values(header);

//   return (
//     <nav
//       className={s.navSection}
//       role="navigation"
//       aria-label="main-navigation"
//     >
//       <Banner />
//       <div className={classnames("container", s.navContainer)}>
//         <div className="mr-6">
//           <Link to="/" title="Logo">
//             <img src={logo} alt="Neyronchik" />
//           </Link>
//         </div>
//         <ul id="navMenu" className="flex grow justify-between">
//           {titlesArray.map((section) => (
//             <li key={section}>
//               <Link to={"#" + section}>{capitalizeFirstLetter(section)}</Link>
//             </li>
//           ))}
//         </ul>{" "}
// <div className={s.phone}>+3216549873</div>
// <ul className={s.socialContainer}>
//   <li className={s.socialItem}>
//     <a
//       href="https://instagram.com"
//       target="_blank"
//       rel="noopener noreferrer nofollow"
//     >
//       <span>
//         <img src={instagram} alt="instagram" />
//       </span>
//     </a>
//   </li>
//   <li className={s.socialItem}>
//     <a
//       href="https://instagram.com"
//       target="_blank"
//       rel="noopener noreferrer nofollow"
//     >
//       <span>
//         <img src={instagram} alt="instagram" />
//       </span>
//     </a>
//   </li>
//   <li className={s.socialItem}>
//     <a
//       href="https://instagram.com"
//       target="_blank"
//       rel="noopener noreferrer nofollow"
//     >
//       <span>
//         <img src={instagram} alt="instagram" />
//       </span>
//     </a>
//   </li>
// </ul>
// <LanguageSwitch className="ml-8" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
