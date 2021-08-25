import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonLink = ({
  className,
  children,
  to,
  size,
  variant,
  ref,
  ...props
}) => {
  return (
    <Button
      className={className}
      {...props}
      variant={variant}
      size={size}
      style={{ padding: 0 }}
    >
      <Link
        style={{
          display: 'block',
          margin: 0,
          padding: '10px',

          color: 'white',
          textDecoration: 'none',
        }}
        innerRef={ref}
        to={to}
      >
        {children}
      </Link>
    </Button>
  );
};
export default ButtonLink;
