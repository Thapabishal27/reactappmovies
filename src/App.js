import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3da3be6c";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="App">
      <h1>MOVIES AND SERIES</h1>
      <div className="search">
        <input
          placeholder="search movies"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchInput)}
        />
      </div>
      <div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
