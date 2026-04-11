import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Product.module.css';
import { FavouritesContext } from '../context/FavouritesContext';

const DogsList = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites, setFavorites } = useContext(FavouritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(Object.keys(data.message)));
  }, []);

  const toggleFavorite = (breed) => {
    const isFavorite = favorites.includes(breed);
    if (isFavorite) {
      setFavorites(favorites.filter((f) => f !== breed));
    } else {
      setFavorites([...favorites, breed]);
    }
  };

  const filteredBreeds = breeds.filter((breed, index) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    const isNumber = !isNaN(term) && term !== "";

    if (isNumber) {
      return (index + 1).toString() === term;
    } else {
      return breed.toLowerCase().includes(term);
    }
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wybierz rasę psa</h1>

      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="Szukaj rasy..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.breedsList}>
        {filteredBreeds.map((breed) => {
          const isFavorite = favorites.includes(breed);
          return (
            <div key={breed} className={styles.breedCard}>
              <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{breed}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className={styles.button}
                  onClick={() => navigate(`/products/${breed}`)}
                >
                  Zdjęcie
                </button>
                <button
                  className={`${styles.button} ${isFavorite ? styles.isFavorite : ""}`}
                  onClick={() => toggleFavorite(breed)}
                >
                  {isFavorite ? "🤍" : "❤️"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DogsList;