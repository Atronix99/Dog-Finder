import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Product.module.css';
import { FavouritesContext } from '../context/FavouritesContext';

const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavouritesContext);
  const navigate = useNavigate();

  const removeFavorite = (breed) => {
    setFavorites(favorites.filter((f) => f !== breed));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Twoje ulubione rasy ❤️</h1>
      
      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>Nie masz jeszcze żadnych ulubionych ras.</p>
          <button className={styles.button} onClick={() => navigate('/products')}>
            Przeglądaj rasy
          </button>
        </div>
      ) : (
        <div>
          {favorites.map((breed) => (
            <div key={breed} className={styles.breedCard}>
              <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{breed}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className={styles.button} 
                  onClick={() => navigate(`/products/${breed}`, { state: { fromFavorites: true } })}
                >
                  Zdjęcie
                </button>
                <button
                  className={`${styles.button} ${styles.isFavorite}`}
                  onClick={() => removeFavorite(breed)}
                >
                  Usuń 🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;