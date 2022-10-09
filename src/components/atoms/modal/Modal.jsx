import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = (props) => {
    function onProceedHandler() {
        props.onClick()
    }
  return (
    <div
      className="dkModal modal fade"
      id={props.id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {props.exitButtonLabel ? props.exitButtonLabel : "Cancel"}
            </button>
            <button type="button" className="btn btn-primary" onClick={onProceedHandler()}>
              {props.proceedButtonLabel ? props.proceedButtonLabel : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  title: "Sample Title",
  id: "exampleId",
};

Modal.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Modal;
