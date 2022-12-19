import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
    </div>
  );
}

export default App;
