import React from "react";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const styles = {
    width: `${props.progressValue}%`,
  };
  const wrapperStyles = props.wrapperStyles;
  return (
    <div
      className={`dkProgressBar progress ${props.className && props.className}`}
      style={wrapperStyles}
      id={props.id}
    >
      <div
        className={`progress-bar ${props.progressBarClassName}}`}
        role="progressbar"
        style={styles}
        aria-valuenow={props.progressValue}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

ProgressBar.defaultProps = {
  progressValue: 50,
  progressBarClassName: "",
  className: "",
  id: "default-id",
};
ProgressBar.propTypes = {
  className: PropTypes.string,
  progressBarClassName: PropTypes.string,
  progressValue: PropTypes.number,
  wrapperStyles: PropTypes.object,
  id: PropTypes.string,
};

export default ProgressBar;
