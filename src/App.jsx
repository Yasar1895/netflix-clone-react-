import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Modal from "./components/Modal";
import moviesData from "./data/movies";

export default function App() {
  const [selected, setSelected] = useState(null);

  const heroMovie = moviesData[0];
  const popular = moviesData.slice(0, 3);
  const trending = moviesData.slice(2);

  return (
    <div className="app">
      <Navbar />
      <Hero movie={heroMovie} />
      <main className="container">
        <MovieRow title="Popular on Cloneflix" movies={popular} onSelect={setSelected} />
        <MovieRow title="Trending Now" movies={trending} onSelect={setSelected} />
      </main>

      <Modal movie={selected} onClose={() => setSelected(null)} />

      <footer className="footer">
        <p>Built with ❤️ — Netflix clone (frontend only)</p>
      </footer>
    </div>
  );
}
