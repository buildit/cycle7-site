import React, { Component } from "react";
import { Link } from "gatsby";
import { Link as ScrollLink } from 'react-scroll'

const linkActiveClass = "grav-c-nav-menu--active";
const linkOffset = -40;

class HeaderHome extends Component {

  constructor() {
    super();

    this.state = {
      navIsPressed: false
    };
  }

  handleSetActive = to => {
    
    if (to === "contact") {
      const contactField = document.getElementById("name");
      
      contactField.focus();
    }
  };

  toggleNav = () => {
    this.setState({
      navIsPressed: !this.state.navIsPressed
    })
  }

  render() {
    return (
      <header className="grav-c-page-header grav-c-page-header--sticky">
        <div>
          <button
            className="grav-c-toggle-menu"
            type="button"
            aria-pressed={this.state.navIsPressed}
            aria-label="Toggle navigation menu"
            onClick={this.toggleNav}
          >
            <span className="grav-c-toggle-menu__icon"></span>
          </button>
          <nav className="grav-c-nav-menu">
            <ul>
              <li>
                <ScrollLink
                  className="grav-c-nav-link"
                  activeClass={linkActiveClass}
                  to="team"
                  href="/#team"
                  spy={true}
                  smooth={true}
                  offset={linkOffset}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Team
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="grav-c-nav-link"
                  activeClass={linkActiveClass}
                  to="process"
                  href="#process"
                  spy={true}
                  smooth={true}
                  offset={linkOffset}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Process
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="grav-c-nav-link"
                  activeClass={linkActiveClass}
                  to="whatsnext"
                  href="#whatsnext"
                  spy={true}
                  smooth={true}
                  offset={linkOffset}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Next Steps
                </ScrollLink>
              </li>
              <li>
                <Link
                  className="grav-c-nav-link"
                  to="/faq"
                >
                  FAQs
                </Link>
              </li>
              <li className="grav-c-nav-menu__hero">
                <ScrollLink
                  className="grav-c-nav-link"
                  activeClass="pop"
                  to="contact"
                  href="#contact"
                  spy={true}
                  smooth={true}
                  offset={linkOffset}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Get in touch <span>↓</span>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
