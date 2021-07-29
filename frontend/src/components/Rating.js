import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div>
      <div className="product-rating">
        <span className="product-stars">
          <FontAwesomeIcon
            key={1}
            icon={rating >= 1 ? faStar : rating >= 0.5 ? faStarHalf : null}
            className="rating-stars"
          />
          <FontAwesomeIcon
            key={2}
            icon={rating >= 2 ? faStar : rating >= 1.5 ? faStarHalf : null}
            className="rating-stars"
          />
          <FontAwesomeIcon
            key={3}
            icon={rating >= 3 ? faStar : rating >= 2.5 ? faStarHalf : null}
            className="rating-stars"
          />
          <FontAwesomeIcon
            key={4}
            icon={rating >= 4 ? faStar : rating >= 3.5 ? faStarHalf : null}
            className="rating-stars"
          />
          <FontAwesomeIcon
            key={5}
            icon={rating >= 5 ? faStar : rating >= 4.5 ? faStarHalf : null}
            className="rating-stars"
          />
        </span>
        <span className="display-products--number-of-reviews">
          {" "}
          {numReviews} ratings{" "}
        </span>
      </div>
    </div>
  );
}
