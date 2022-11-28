import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import useSiteMetadata from "queries/SiteMetadata";
// import { withPrefix } from "gatsby";

export const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata();
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
