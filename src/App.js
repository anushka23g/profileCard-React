import React from "react";
import "./styles.css";
import Card from "./Card.js";
import Faker from 'faker';

export default function App() {
  return (
<div className="App">
    <Card name={Faker.name.findName()} email = {Faker.internet.email()} profession="SDE-1" image="https://www.w3schools.com/howto/img_avatar.png" />
    <Card name={Faker.name.findName()} email = {Faker.internet.email()} profession="Analyst" image="https://www.w3schools.com/howto/img_avatar2.png"/>
    <Card name={Faker.name.findName()} email = {Faker.internet.email()} profession="SDE-2" image="https://www.w3schools.com/howto/img_avatar.png"/>
    <Card name={Faker.name.findName()} email = {Faker.internet.email()} profession="SE" image="https://www.w3schools.com/howto/img_avatar.png"/>
    
</div>
  );
}
