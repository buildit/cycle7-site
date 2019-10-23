import PropTypes from "prop-types";
import React, {createRef} from "react";

const ref = createRef();

const handleClick = (e) => {
  e.preventDefault();

  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

const Header = ({ siteTitle }) => (
  <>
  <header>
    <nav>
      <a onClick={handleClick} href="#contact-us">Contact us</a>
    </nav>
  </header>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div

  ref={ref}
  style={{ height: '250px', border: '1px solid black' }}>HELLO</div>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
