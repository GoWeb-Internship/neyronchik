import * as React from "react";
import Footer from "components/Footer/Footer";
// import Navbar from "components/Header/Navbar";
import DesktopHeader from "./Header/DesktopHeader";
// import useSiteMetadata from "queries/SiteMetadata";
// import { withPrefix } from "gatsby";

const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata();
  return (
    <>
      <DesktopHeader />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
