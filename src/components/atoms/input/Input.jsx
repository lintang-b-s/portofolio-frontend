import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      className={`dkInput ${props.className}`}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      multiple={props.multiple}
    />
  );
};

Input.defaultProps = {
  className: "",
  multiple: false,
  required: false,
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
};

export default Input;
