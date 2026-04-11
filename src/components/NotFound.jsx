import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id="center" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <span style={{ fontSize: '5rem' }}>🦴</span>
      <h1>404 - Zgubiłeś się?</h1>
      <p>Niestety, nie znaleźliśmy takiej strony</p>
      <Link 
        to="/" 
        style={{ textDecoration: 'none', fontWeight: 'bold', marginTop: '20px', display: 'block' }}
      >
        Wróć do domu
      </Link>
    </div>
  )
}

export default NotFound