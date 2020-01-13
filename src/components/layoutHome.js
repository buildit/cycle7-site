/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import HeaderHome from "./headerHome";
import Footer from "./footer";
import Helmet from "react-helmet";
import { animateScroll as scroll } from "react-scroll";

class LayoutHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showScollToTop: false
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollCalc = () => {
    const winHeight = window.innerHeight;
    const scrollY = window.scrollY;

    scrollY > winHeight ? this.setState({
        showScollToTop: true
      })
    : this.setState({
        showScollToTop: false
      });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollCalc);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollCalc);
  }

  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQueryHome {
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
                class: "grav-u-color-scheme-teal-white grav-o-full-bleed"
              }}
            >
              <title> {data.site.siteMetadata.title} </title>{" "}
            </Helmet>
            <HeaderHome siteTitle={data.site.siteMetadata.title} />{" "}
            <main> {children} </main> <Footer />
            {this.state.showScollToTop ? (
              <button
                className="grav-c-page-footer__back-to-top"
                onClick={this.scrollToTop}
              >
                {" "}
                Back to top{" "}
              </button>
            ) : null}{" "}
          </>
        )}
      />
    );
  }
}

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHome;
