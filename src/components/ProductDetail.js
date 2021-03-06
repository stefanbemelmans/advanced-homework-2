import React from "react";
import PropTypes from "prop-types";

export default function ProductDetail(props) {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={props.imgUrl} alt="logo" />
      <h3>{props.name} </h3>
      <p>{props.description}}</p>
      <h4>{props.price}</h4>
      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
    </div>


  );

}

ProductDetail.propTypes = {
  imgUrl: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string


};
