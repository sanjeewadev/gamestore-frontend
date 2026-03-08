import { useState, useEffect } from "react";
import "./StoreFront.css";

function StoreFront() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7100/api/Games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="storefront-wrapper">
      <header className="storefront-header">
        <h1 className="storefront-title">Digital Game Store</h1>
        <p className="storefront-subtitle">Find your next adventure today.</p>
      </header>

      <div className="game-grid">
        {games.map((game) => (
          <article className="game-card" key={game.gameID}>
            <img
              src={
                game.imageUrl ||
                "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400"
              }
              alt={game.gameName}
              className="game-image"
            />
            <h2 className="game-name">{game.gameName}</h2>
            <p className="game-desc">{game.description}</p>
            <div className="game-price">${game.price.toFixed(2)}</div>
            <button className="btn-buy">Add to Cart</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default StoreFront;
