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
          Rasy psów
        </NavLink>
      </div>
      <div className={styles.favBadge}>
        Ulubione: <strong>{favorites.length}</strong>
      </div>
    </nav>
  )
}

export default Navbar