// src/App.jsx
import React from 'react';
import './index.css';               // global styles

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';         // make sure this file exists and matches capitalization
import MovieCard from './components/MovieCard';

// Data
import movies from './movies';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
