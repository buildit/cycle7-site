import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

class Header extends Component {
  handleSetActive = to => {
    console.log(to);
  };

  render() {
    return (
      <header className="grav-c-page-header grav-c-page-header--sticky">
        <div>
          <div class="grav-c-page-header__logo">
            LOGO?
          </div>
          <button class="grav-c-toggle-menu" type="button" aria-pressed="false" aria-label="Toggle navigation menu">
            <span class="grav-c-toggle-menu__icon"></span>
          </button>
          <nav class="grav-c-nav-menu">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="outcomes"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Outcomes
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="strategy"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  The team
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="process"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  The process
                </Link>
              </li>
              <li className="grav-c-nav-menu__hero">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )};      
}

export default Header;
