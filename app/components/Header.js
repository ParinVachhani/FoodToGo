import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {
  componentDidMount() {
    // Initialize Foundation
    $(document).foundation();
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const rightNav = this.props.token ? (
      <div className="top-bar-right">
        <ul className="vertical medium-horizontal menu">
          <li><Link to="/account" activeClassName="active">My Account</Link></li>
          <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
        </ul>
      </div>
    ) : (
      <div className="top-bar-right">
        <ul className="vertical medium-horizontal menu">
          <li><Link to="/login" activeClassName="active">Log in</Link></li>
          <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
        </ul>
      </div>
    );
    return (
      <div className="top-bar">
        <div className="top-bar-title">
          <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <span className="menu-icon light" data-toggle></span>
          </span>
          <IndexLink to="/">Project name</IndexLink>
        </div>
        <div id="responsive-menu">
          <div className="top-bar-left">
            <ul className="vertical medium-horizontal menu">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
          </div>
          {rightNav}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
