import React from "react";
import "./Img.scss";
import PropTypes from "prop-types";

const Img = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`dkImg ${props.className}`}
      height={props.height}
      width={props.width}
      loading="lazy"
    />
  );
};

Img.defaultProps = {
  className: "",
};

Img.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Img;
