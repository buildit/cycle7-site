import React, { Component } from "react";
import { Link } from "gatsby";
import { navigate } from '@reach/router';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      navIsPressed: false
    };
  }

  contactClick = (e) => {
    e.preventDefault();
    navigate('/#contact');
  }

  toggleNav = () => {
    this.setState({navIsPressed: true})
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
            onClick={this.toggleNav }
          >
            <span className="grav-c-toggle-menu__icon"></span>
          </button>

          <nav className="grav-c-nav-menu">
            <ul>
              <li>
                <Link className="grav-c-nav-link" to="/">
                <svg width="76" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M6.24 9.5l8.672 4.878.872.49-.98 1.744-.872-.49-12-6.75L.382 8.5l1.55-.872 12-6.75.871-.49.98 1.743-.87.49L6.238 7.5h68.934v2H6.239z" fillRule="nonzero"/></svg>
                  Home
                </Link>
              </li>
              <li><a className="grav-c-nav-link" href="/#contact" onClick={this.contactClick}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
