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
            onClick={this.toggleNav }
          >
            <span className="grav-c-toggle-menu__icon"></span>
          </button>

          <nav className="grav-c-nav-menu">
            <ul>
              <li>
                <Link className="grav-c-nav-link" to="/">
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
