import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const Listing = memo(({ listing }) => {
  const { name, slug, images, price } = listing;
  // console.log(name);
  return (
    <article className="listing">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single listing" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/listings/${slug}`} className="btn-primary listing-link">
          features
        </Link>
      </div>
      <p className="listing-info">{name}</p>
    </article>
  );
});

Listing.propTypes = {
  listing: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Listing;