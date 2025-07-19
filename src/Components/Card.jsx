
import React, { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="Card">
      <img src={image} className="image" alt={name} />

      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>

      <div className="description">
        {description}
        <span className="Read-more" onClick={readmoreHandler}>
          {readmore ? "Show Less" : "Read more"}
        </span>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
