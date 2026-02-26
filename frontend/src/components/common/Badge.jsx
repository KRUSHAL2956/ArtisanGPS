import React from 'react';

/**
 * Base Badge component skeleton.
 * Will implement structural styling references.
 */
const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
