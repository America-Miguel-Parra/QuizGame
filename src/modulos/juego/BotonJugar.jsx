import React from 'react'
import { Link } from 'react-router-dom'

const BotonJugar = () => {
  return (
    <Link to="/juego">
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button
          className="btn btn-outline-warning bi bi-controller"
          type="button">
          Jugar
        </button>
      </div>
    </Link>
  )
}

export default BotonJugar