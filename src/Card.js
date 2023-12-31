
/**
 * props:
 * -card object like: {
            "code": "6H",
            "image": "https://deckofcardsapi.com/static/img/6H.png",
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/6H.svg",
                          "png": "https://deckofcardsapi.com/static/img/6H.png"
                      },
            "value": "6",
            "suit": "HEARTS"
        }
 */
function Card({card}) {
  return (
    <div className="Card">
      <img className="Card-img" src={card.image}/>
    </div>
  );
}

export default Card;