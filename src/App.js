import { useState } from "react";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

import List from "./content";

import "./styles.css";

export default function App() {
  const [list, setList] = useState(List);

  const filterList = (tag) => {
    if (tag === "all") {
      setList(List);
      return;
    }
    const filtered = List.filter((li) => li.tag === tag);
    setList(filtered);
  };

  return (
    <div className="app">
      <Navbar />
      <Buttons filterList={filterList} />
      <Cards lists={list} />
    </div>
  );
}
