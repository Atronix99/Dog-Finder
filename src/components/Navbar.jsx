import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import { FavouritesContext } from '../context/FavouritesContext'

const Navbar = () => {
  const { favorites } = useContext(FavouritesContext)
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        🐶 <span>DogFinder</span>
      </div>
      
      <div className={styles.links}>
        <NavLink 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`} 
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`} 
          to="/products"
        >
          Rasy
        </NavLink>
      </div>

      <NavLink 
        className={({ isActive }) => `${styles.favBadge} ${isActive ? styles.favActive : ""}`} 
        to="/favorites"
      >
        <span className={styles.favText}>Ulubione: </span><strong>{favorites.length}</strong>
      </NavLink>
    </nav>
  )
}

export default Navbar