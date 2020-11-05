import React from 'react';
import './QuoteCard.css';

function QuoteCard({cartoon}) {
    return (
      <figure className="QuoteCard">
        <img src={cartoon.image} alt={cartoon.character} />
        <figcaption>
          <blockquote>{cartoon.quote}</blockquote>
          <p>
            <cite>{cartoon.character}</cite>
            <span>&#9733;</span>
          </p>
        </figcaption>
      </figure>
    );

}

export default QuoteCard;