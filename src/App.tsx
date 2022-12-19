import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { PlaceHolder } from "./components/PlaceHolder";
import { Oscar } from "./components/Oscar";

function App() {
  const personDetails = {
    name: "Arun",
    age: 10,
  };

  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name={"Vishwas"} count={10} isLoggedIn={true} />
      <Person personDetails={personDetails} />
      <PersonList names={personList} />
      <Status status="loading" />
      <PlaceHolder>Heading Text!</PlaceHolder>
      <Oscar>
        <PlaceHolder>Child Node Text!</PlaceHolder>
      </Oscar>
      <Greet name="Ayyappan" isLoggedIn={true} />
    </div>
  );
}

export default App;
