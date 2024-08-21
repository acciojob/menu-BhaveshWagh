// src/App.js
import { useState } from "react";
import menuItems from "../RestaurantData";

function App() {
  const [items, setItems] = useState(menuItems);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={() => filterItems("all")}>
            All
          </button>
          <button
            className="filter-btn btn"
            onClick={() => filterItems("breakfast")}
          >
            Breakfast
          </button>
          <button className="filter-btn" onClick={() => filterItems("lunch")}>
            Lunch
          </button>
          <button className="filter-btn" onClick={() => filterItems("shakes")}>
            Shakes
          </button>
        </div>
        <div className="section-center">
          {items.map((menuItem) => {
            const { id, title, img, desc, price } = menuItem;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
