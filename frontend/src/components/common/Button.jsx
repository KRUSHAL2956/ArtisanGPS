import React from 'react';

/**
 * Base Button component skeleton.
 * Will implement structural styling references.
 */
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
