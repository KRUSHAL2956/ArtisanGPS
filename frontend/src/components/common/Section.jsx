import React from 'react';

/**
 * Base Section component skeleton.
 * Implements standard `.section` styling defined in layout.css.
 */
const Section = ({ children, className = '', id, ...props }) => {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
