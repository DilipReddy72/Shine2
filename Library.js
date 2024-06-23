import React, { useState } from 'react';
import './Library.css';

const demoData = [
  {
    type: "book",
    title: "Book Title 1",
    author: "Author Name",
    coverImage: "/images/library/books/Book1.png", // Updated path
    rating: 4.5,
    reviews: 120,
    favorite: false
  },
  {
    type: "blog",
    title: "Blog Title 1",
    author: "Author Name",
    summary: "A short summary of the blog...",
    image: "/images/library/blogs/Blog1.png", // Updated path
    rating: 4.0,
    reviews: 80,
    favorite: true
  },
  {
    type: "music",
    title: "Song Title 1",
    artist: "Artist Name",
    coverImage: "/images/library/songs/Song1.png", // Updated path
    rating: 4.7,
    reviews: 200,
    favorite: false
  },
  // Add more demo items
];

const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const filteredData = demoData.filter(item =>
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.author?.toLowerCase().includes(searchTerm.toLowerCase()) || item.artist?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!favoritesOnly || item.favorite)
  );

  return (
    <div className="library-page">
      <div className="top-bar">
        <h1 className="title">Library</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="favorites-toggle">
          <label>
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
            <h2>All Items</h2>
            <div className="item-list">
              {filteredData.map((item, index) => (
                <div key={index} className="item">
                  <img src={item.coverImage || item.image} alt={item.title} className="item-image" />
                  <h3>{item.title}</h3>
                  <p>{item.author || item.artist}</p>
                  <p>Rating: {item.rating} ({item.reviews} reviews)</p>
                  <button className={`favorite-button ${item.favorite ? 'favorite' : ''}`}>
                    {item.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
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

export default Library;
