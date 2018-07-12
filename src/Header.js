/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import "./Header.css";

const Header = (props) => 
    <header className="headerContainer">
      <h1>{props.title}</h1>
    </header>

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
