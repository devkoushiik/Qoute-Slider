import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  console.log(people);
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          disabled={index === 0 ? true : false}
          onClick={() => setIndex(index - 1)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          disabled={index === people.length - 1 ? true : false}
          onClick={() => setIndex(index + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">Random Quote</button>
    </article>
  );
};

export default Review;

//
