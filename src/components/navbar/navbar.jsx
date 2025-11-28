import React from 'react'
import DarkMode from '../DarkMode'
import './Navbar.css'
export default function navbar() {
  return (
   <nav className='navbar'>
        <h1>MovieManiac</h1>
        <div className="navbar_links">
          <a href=""><DarkMode/></a>
            <a href="">Populaire 🙂</a>
            <a href="">Top Rated ❤</a>
            <a href="">Populaire 😘</a>
            
        </div>
      </nav>
  )
}
