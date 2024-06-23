import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

const demoGames = [
  {
    category: "Puzzle",
    title: "Puzzle Game 1",
    description: "A fun puzzle game...",
    image: "/images/games/puzzle1.jpg", // Update with the actual image path
    rating: 4.5,
    favorite: false
  },
  {
    category: "Action",
    title: "Action Game 1",
    description: "An exciting action game...",
    image: "/images/games/action1.jpg", // Update with the actual image path
    rating: 4.7,
    favorite: true
  },
  {
    category: "Strategy",
    title: "Strategy Game 1",
    description: "A challenging strategy game...",
    image: "/images/games/strategy1.jpg", // Update with the actual image path
    rating: 4.3,
    favorite: false
  },
  // Add more demo games
];

const categories = ["All", "Puzzle", "Action", "Strategy", "Adventure"];

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const filteredGames = demoGames.filter(game =>
    (selectedCategory === 'All' || game.category === selectedCategory) &&
    (game.title.toLowerCase().includes(searchTerm.toLowerCase()) || game.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!favoritesOnly || game.favorite)
  );

  return (
    <div className="games-page">
      <div className="top-bar">
        {/* Added menu icon */}
        <div className="menu-icon">
          <Link to="/"><i className="fas fa-bars"></i></Link>
        </div>
        <h1 className="title">Games</h1>
        <input
          type="text"
          placeholder="Search games..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filters">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          <label className="favorites-toggle">
            <input
              type="checkbox"
              checked={favoritesOnly}
              onChange={(e) => setFavoritesOnly(e.target.checked)}
            />
            Show Favorites Only
          </label>
        </div>
      </div>
      <div className="content">
        <div className="main-content">
          <section className="items">
            <h2>All Games</h2>
            <div className="item-list">
              {filteredGames.map((game, index) => (
                <div key={index} className="item">
                  <img src={game.image} alt={game.title} className="item-image" />
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <p>Rating: {game.rating}</p>
                  <button className={`favorite-button ${game.favorite ? 'favorite' : ''}`}>
                    {game.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Games;
