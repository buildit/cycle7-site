/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import Helmet from "react-helmet";

const handleNavClick = (e, ref) => {
  e.preventDefault();

  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          bodyAttributes={{
            class: "grav-o-full-bleed"
          }}
        >
          <title>{data.site.siteMetadata.title}</title>
          </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} handleNavClick={handleNavClick}/>
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
