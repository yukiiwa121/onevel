import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotels" element={<SearchResultsPage />} />
    </Routes>
  )
}

export default App
