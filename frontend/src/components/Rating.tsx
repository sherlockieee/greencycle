import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";

type RatingProps = {
  rating: Number;
  numReviews: Number;
}

export default function Rating(props: RatingProps) {
  const { rating, numReviews } = props;
  return (
    <div>
      <div className="product-rating">
        <span className="product-stars">
          {rating >= 0.5 && (
            <FontAwesomeIcon
              key={1}
              icon={rating >= 1 ? faStar : faStarHalf}
              className="rating-stars"
            />
          )}
          {rating >= 1.5 && (
            <FontAwesomeIcon
              key={2}
              icon={rating >= 2 ? faStar : faStarHalf}
              className="rating-stars"
            />
          )}
          {rating >= 2.5 && (
            <FontAwesomeIcon
              key={3}
              icon={rating >= 3 ? faStar : faStarHalf}
              className="rating-stars"
            />
          )}
          {rating >= 3.5 && (
            <FontAwesomeIcon
              key={4}
              icon={rating >= 4 ? faStar : faStarHalf}
              className="rating-stars"
            />
          )}
          {rating >= 4.5 && (
            <FontAwesomeIcon
              key={5}
              icon={rating >= 5 ? faStar : faStarHalf}
              className="rating-stars"
            />
          )}
        </span>
        <span className="display-products--number-of-reviews">
          {numReviews} ratings
        </span>
      </div>
    </div>
  );
}
