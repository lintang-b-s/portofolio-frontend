import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  const styles = {
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    margin: props.margin,
    padding: props.padding,
    color: props.color,
    fontSize: props.size,
  };
  return <i className={`dkIcon ${props.className}`} style={styles} />;
};

Icon.defaultProps = {
  className: "",
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
};

export default Icon;
