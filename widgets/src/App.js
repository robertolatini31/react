import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "cosa è react?",
    content: "react è un framework js",
  },
  {
    title: "perrchè usi react",
    content: "è la libreria preferita dalla maggior parte degli ingegneri",
  },
];

const options = [
  {
    label: "il colore rosso",
    value: "red",
  },
  {
    label: "il colore verde",
    value: "green",
  },
  {
    label: "il colore blu",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Scegli un colore"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
