import { useState, useEffect } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [games, setGames] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    fetch("https://localhost:7100/api/Games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddGame = (e) => {
    e.preventDefault();
    const newGameData = {
      gameName: newName,
      gameCategory: "General",
      price: parseFloat(newPrice),
      description: "Added from Admin Dashboard",
      imageUrl: "",
      dateModified: new Date().toISOString(),
    };

    fetch("https://localhost:7100/api/Games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGameData),
    })
      .then((res) => res.json())
      .then((savedGame) => {
        setGames([...games, savedGame]);
        setNewName("");
        setNewPrice("");
      })
      .catch((err) => console.error("Failed to add game", err));
  };

  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <p className="admin-subtitle">
          Manage your store inventory and product listings.
        </p>
      </header>

      <section className="admin-form-card">
        <h2 className="form-title">Add New Product</h2>
        <form onSubmit={handleAddGame} className="admin-form">
          <input
            type="text"
            placeholder="Enter Game Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="number"
            placeholder="Enter Price ($)"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="btn-add">
            Add to Database
          </button>
        </form>
      </section>

      <h2 className="form-title">Current Inventory</h2>
      <div className="table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Game Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.gameID}>
                <td>
                  <strong>#{game.gameID}</strong>
                </td>
                <td>{game.gameName}</td>
                <td>${game.price.toFixed(2)}</td>
                <td>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
