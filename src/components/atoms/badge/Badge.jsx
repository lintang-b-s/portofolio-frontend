import React from "react";
import PropTypes from "prop-types";

const Badge = (props) => {
  return (
    <span className={`dkBadge badge bg-${props.variant} ${props.className}`}>
      {props.children}
    </span>
  );
};

Badge.defaultProps = {
  variant: "primary",
};

Badge.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Badge;
