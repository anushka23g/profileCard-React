import React, { useState } from "react";
import "./styles.css";
import Card from "./Card.js";
import Faker from "faker";
import "./App.css";

export default function App() {
  const [showCard, setShowCard] = useState(true);

  const [cards, setCards] = useState([
    {
      name: "a",
      id: "weadz"
    },
    {
      name: "b",
      id: "fargv"
    },
    {
      name: "c",
      id: "agrr"
    }
  ]);

  const changeNameHandler=(event,id)=>{

    const cardIndex=cards.findIndex(card=>card.id==id);
    const cards_copy=[...cards];
cards_copy[cardIndex].name=event.target.value;
setCards(cards_copy);  
}

  const toggleShowCard = () => setShowCard(!showCard);

  const deleteCardHandler = (cindex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cindex, 1);
    setCards(cards_copy);
  };
  const cardsMarkup =
    showCard &&
    cards.map((card, index) => (
      <Card
        name={card.name}
        key={card.id}
        email={Faker.internet.email()}
        profession="SDE-1"
        image="https://www.w3schools.com/howto/img_avatar.png"
        onDelete={() => deleteCardHandler(index)}
        onChangeName={
(event)=> changeNameHandler(event,card.id)
        }
      />
    ));

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>
        toggle Show/hide
      </button>
      {cardsMarkup}
    </div>
  );
}
