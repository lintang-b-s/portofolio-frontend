import PropTypes from "prop-types";

const Message = ({ variant, children, isDismissible }) => {
  return (
    <div
      className={`alert ${variant ? `alert-${variant}` : ""} ${
        isDismissible && " alert-warning alert-dismissible fade show"
      }`}
    >
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
  isDismissible: false,
};

Message.propTypes = {
  variant: PropTypes.string,
  isDismissible: PropTypes.bool,
};

export default Message;
