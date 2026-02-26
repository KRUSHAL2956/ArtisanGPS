import React from 'react';

/**
 * Base Card component skeleton.
 * Will implement structural styling references.
 */
const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
