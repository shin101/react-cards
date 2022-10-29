import { useState } from "react";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipState = () => {
    setIsFacingUp(isUp => !isUp);
  }
  return [isFacingUp, flipState]
}

const useFetch = () => {
  const [cards, setCards] = useState([]);
  const [pokeCards, setPokeCards] = useState([]);
  
  const addCard = async (url, type) => {
    const res = await fetch(url);
    const response = await res.json();

    if (type === "pokemon") {
      setPokeCards(cards => [...cards, response]);
    } else {
      setCards(cards => [...cards, response.cards[0]]);
    }
  }

  return { addCard, cards, pokeCards };
};

export default useFlip;
export { useFetch, useFlip };