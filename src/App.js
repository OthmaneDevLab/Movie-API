 import React from 'react'
 import Navbar from './components/navbar/navbar'
 import MovieList from './components/MovieList/MovieList'
import './App.css'
export default function App() {
  return (
    <div className='app'>
      <Navbar/>
      <MovieList/>
    </div>

  )
}
