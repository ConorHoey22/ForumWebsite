import React from 'react';

import { Link } from 'react-router-dom';
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <a class='navbar-brand' href='/'>
          Forum
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' />
        </button>

        <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li class='nav-item'>
              <Link to='/Register'>Register</Link>
            </li>
            <li class='nav-item'>
              <Link to='/Login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
