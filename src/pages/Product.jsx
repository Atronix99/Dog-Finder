import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './Products.module.css';

const DogDetail = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [breedsList, setBreedsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreedsList(Object.keys(data.message)))
      .catch(err => console.error("Błąd listy ras:", err));
  }, []);

  const fetchImage = useCallback(async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${id}/images/random`);
      const data = await response.json();

      if (data.status === "error") {
        navigate('/404', { replace: true });
        return;
      }

      setImageUrl(data.message);
    } catch (error) {
      console.error("Błąd sieci:", error);
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  const currentIndex = breedsList.indexOf(id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < breedsList.length - 1;

  const goToPrev = () => {
    if (hasPrev && !loading) navigate(`/products/${breedsList[currentIndex - 1]}`);
  };

  const goToNext = () => {
    if (hasNext && !loading) navigate(`/products/${breedsList[currentIndex + 1]}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        ← Cofnij
      </button>
      
      <div className={styles.dogHero}>
        <h1 style={{ textTransform: 'capitalize' }}>Rasa: {id}</h1>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={id} 
            className={styles.dogImage} 
            style={{ opacity: loading ? 0.5 : 1 }} 
          />
        ) : (
          <p>Ładowanie zdjęcia...</p>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={goToPrev} disabled={!hasPrev || loading}>
          Poprzednia
        </button>
        <button className={styles.button} onClick={fetchImage} disabled={loading}>
          Losuj inne
        </button>
        <button className={styles.button} onClick={goToNext} disabled={!hasNext || loading}>
          Następna
        </button>
      </div>
    </div>
  );
};

export default DogDetail;