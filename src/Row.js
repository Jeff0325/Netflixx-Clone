import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Modal from './modal';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1); // ✅ current page

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchUrl}&page=${page}`); // ✅ add page param
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl, page]); // ✅ refetch when page changes

  const handleClick = async (movie) => {
    try {
      const request = await axios.get(`/movie/${movie.id}/videos?api_key=e12ab1670ad1b292576363b01abe223c`);
      const trailer = request.data.results.find(
        video => video.type === "Trailer" && video.site === "YouTube"
      );

      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        setShowModal(true);
      } else {
        setTrailerUrl("");
        setShowModal(false);
        console.log("Trailer not found");
      }
    } catch (err) {
      console.error("Error fetching trailer:", err);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      {/* ✅ Pagination Buttons */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {page}</span>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>

      {showModal && trailerUrl && (
        <Modal trailerUrl={trailerUrl} onClose={() => {
          setShowModal(false);
          setTrailerUrl("");
        }} />
      )}
    </div>
  );
}

export default Row;
