import React from "react";
import Card from "./Card";

/** Function to render a card list component.
 *
 * Props: an array of card objects, like: [{
            "code": "6H",
            "image": "https://deckofcardsapi.com/static/img/6H.png",
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/6H.svg",
                          "png": "https://deckofcardsapi.com/static/img/6H.png"
                      },
            "value": "6",
            "suit": "HEARTS"
        } ...]
 *
 */
function CardList({cards}) {
  return (
    <div className="CardList">
      {cards.map(card => (<Card key={card.code} card={card}/>))}
    </div>
  )
}

export default CardList;