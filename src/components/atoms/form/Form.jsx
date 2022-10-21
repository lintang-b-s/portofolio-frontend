import React from "react";
import "./Form.scss";
import PropTypes from "prop-types";

const Form = (props) => {
  return (
    <form className={`dkForm ${props.className}`} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

Form.defaultProps = {
  className: "",
};

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
