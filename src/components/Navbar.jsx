import React from 'react'
import { NavLink } from 'react-router-dom'
import francis from "../franciscolor.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <img src={francis} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}aria-current="page" to="/sobrenosotros">Sobre Nosotros</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}aria-current="page" to="/nuestromenu">Nuestro Menú</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/crud">Reservaciones</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar