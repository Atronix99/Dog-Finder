import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Product.module.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="center">
      <div className="heroSection">
        <h1 className="heroTitle">Witaj w DogFinder 🐾</h1>
        <p className="heroSubtitle">
          Odkryj setki ras psów, przeglądaj zdjęcia i zapisuj swoje ulubione.
        </p>
        <button 
          className={`${styles.button} bigButton`} 
          onClick={() => navigate('/products')}
        >
          Przeglądaj rasy
        </button>
      </div>
    </div>
  )
}

export default Home;