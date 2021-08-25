import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './StyledNavLink.scss';
export const NavLink = ({
  onClick,
  className,
  activeClassName,
  to,
  children,
  ref,
  ...props
}) => {
  return (
    <Link
      {...props}
      innerRef={ref}
      onClick={onClick}
      className={`styled-link ${className}`}
      activeClassName={activeClassName ? activeClassName : 'active-styled-link'}
      exact
      to={to}
    >
      {children}
    </Link>
  );
};
