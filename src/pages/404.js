import * as React from "react";
import Layout from "src/components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <Link to="/">Go Home</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
