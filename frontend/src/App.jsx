import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Espacios from './pages/Espacios'
import Reservas from './pages/Reservas'
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
          <Route
              path="/"
              element={<Navigate to="/espacios" replace />}
          />
          <Route
              path="/espacios"
              element={<Espacios />}
          />
          <Route
              path="/reservas"
              element={<Reservas />}
          />
      </Routes>


    </>
  )
}

export default App
