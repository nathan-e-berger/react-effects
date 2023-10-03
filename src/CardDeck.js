import { useState, useEffect } from "react";
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
  const [cardsLeft, setCardsLeft] = useState();
  const [DeckId, setDeckId] = useState();

  useEffect(function callDeckFetcher() {
    async function deckFetcher() {
      const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/");
      const data = await response.json();
      setDeckId(data.deck_id);
      setCardsLeft(data.remaining);
    }
    deckFetcher();
  }, []);

  useEffect(function callCardFetcher() {
    async function cardFetcher() {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${DeckId}/draw/?count=1`);
      const data = await response.json();
      setCardsLeft(data.remaining);
    }
    cardFetcher();
  }, []);

  // return (
  //   <Card />
  // )
};

export default CardDeck;