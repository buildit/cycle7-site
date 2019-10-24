import PropTypes from "prop-types";
import React from "react";
import ScrollIntoView from 'react-scroll-into-view';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ScrollIntoView selector="#contact-us">
        <button>
          Contact us
        </button>
      </ScrollIntoView>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
