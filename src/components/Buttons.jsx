const Buttons = ({ filterList }) => {
  return (
    <nav className="nav">
      <button onClick={() => filterList("all")}>All</button>
      <button onClick={() => filterList("html")}>HTML</button>
      <button onClick={() => filterList("css")}>CSS</button>
      <button onClick={() => filterList("javascript")}>JavaScript</button>
    </nav>
  );
};

export default Buttons;
