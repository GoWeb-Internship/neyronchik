import * as React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';
// import useSiteMetadata from "queries/SiteMetadata";
// import { withPrefix } from "gatsby";

const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
