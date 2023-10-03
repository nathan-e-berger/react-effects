import { useState, useEffect } from "react";
import CardList from "./CardList";

const BASE_API_URL = "https://deckofcardsapi.com/api/deck";
/**
 *   make one fetch for new deck after first component render
 *
 * state:
 *  - cardsLeft
 *  -deckId
 *
 *   need:
 *   -presentation component to render card (Card)
 *   -button that fetches one card from api
 */
function CardDeck() {
  // const [cardsLeft, setCardsLeft] = useState();
  // const [DeckId, setDeckId] = useState();
  const [deckData, setDeckData] = useState({
    id: "",
    cardsLeft: null,
    cardsDrawn: []
  })

  useEffect(function callDeckFetcher() {
    async function deckFetcher() {
      const response = await fetch(`${BASE_API_URL}/new/shuffle/`);
      const data = await response.json();
      // setDeckId(data.deck_id);
      // setCardsLeft(data.remaining);
      setDeckData( d => ({
        ...d,
        id: data.deck_id,
        cardsLeft: data.remaining
    }));
    }
    deckFetcher();
  }, []);

  // useEffect(function callCardFetcher() {
  //   async function cardFetcher() {
  //     const response = await fetch(`${BASE_API_URL}/${deckData.id}/draw/?count=1`);
  //     const data = await response.json();
  //     //setCardsLeft(data.remaining);
  //   }
  //   cardFetcher();
  // }, []);

  async function cardFetcher() {
    // if (deckData.cardsLeft === 0) {
    //   //TODO: try, catch, display alert.
    //   throw new Error("The deck is empty");
    //   // alert("There are no cards left!");
    //   // setDeckData(d => ({ ...d }));
    // }

    try {
    const response = await fetch(`${BASE_API_URL}/${deckData.id}/draw/?count=52`);
    const data = await response.json();
    setDeckData( d => ({
      ...d,
      cardsLeft: data.remaining,
      cardsDrawn: [...d.cardsDrawn, ...data.cards]

    })

    );
      } catch (err) {
      alert("There are no cards left in the deck.");
    }

  }

  return (
    <div className="CardDeck">
      <button className="CardDeck-draw-btn" onClick={cardFetcher}>Draw a card!</button>
      <CardList cards={deckData.cardsDrawn}/>
    </div>
  )
};

export default CardDeck;