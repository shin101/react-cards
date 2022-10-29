import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useFetch } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const { addCard, cards, pokeCards } = useFetch();
  console.log(cards, pokeCards)

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard("https://deckofcardsapi.com/api/deck/new/draw/", "poker")}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.code} front={card.image} />
        ))}
      </div>
    </div>
  );
};

CardTable.defaultProps = {};

export default CardTable;


// // notes
// const data = useFetch("https://deckofcardsapi.com/api/deck/new/draw/");
// if (data.isLoading){
//   return <div>Loading...</div>;
// }
// if (data.error) {
//   return <div>Sorry, something went wrong. </div>
// }
// const { status, message } = data.response;