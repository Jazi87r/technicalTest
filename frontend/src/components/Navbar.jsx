import { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
        <nav>
            <Link to ="/espacios"> espacios</Link>
            <Link to ="/reservas">reservas</Link>
        </nav>
    </>
  )
}

export default Navbar