import React from 'react';

/**
 * Base Container component skeleton.
 * Implements standard `.container` styling defined in layout.css.
 */
const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
