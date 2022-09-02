import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/profile/Profile'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route 
          path='/*'
          element={<Home />}
        />
        <Route
          path='profile/*'
          element={<Profile />}
        />
      </Routes>
      <Footer />
    </div>
  )
}
export default App