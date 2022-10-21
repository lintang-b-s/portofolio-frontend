import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Img from "../img/Img";

const Card = (props) => {
  return (
    <div className={`dkCard card ${props.cardClassName}`}>
      {props.imgTop && (
        <Link to={props.imgLink}>
          <div className={props.imageWrapperClassName}>
            <Img
              className={`card-img-top ${props.imageClassName}`}
              src={props.imgSrc}
              alt={props.imageAlt}
              height={props.imgHeight}
              width={props.imgWidth}
            />
          </div>
        </Link>
      )}
      {props.children}
    </div>
  );
};

Card.defaultProps = {
  cardClassName: "",
  imageClassName: "",
  imageWrapperClassName: "",
  imgLink: "",
  imgWidth: 380,
  imgHeight: 213,
};

Card.propTypes = {
  cardClassName: PropTypes.string,
  imgTop: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imageClassName: PropTypes.string,
  imageWrapperClassName: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
};

export default Card;
