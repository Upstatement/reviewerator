import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { className } from 'utils';

const Link = ({ children, className: customClassName, to, }) => {
  return (
    <NavLink to={to} {...className(customClassName)}>
      {children}
    </NavLink>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default Link;
