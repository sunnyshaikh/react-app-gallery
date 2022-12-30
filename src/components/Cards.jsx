const Cards = ({ lists }) => {
  return (
    <div className="cards">
      {lists.map((list) => (
        <div className="card" key={list.id}>
          <div>
            <div className="card-header">
              <img src={list.img} alt="" />
            </div>
            <div className="card-body">
              <h1>{list.title}</h1>
              <p style={{ marginTop: ".5rem", opacity: ".75" }}>{list.desc}</p>
            </div>
            <div className="card-footer">
              <p className="tag">{list.tag}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
