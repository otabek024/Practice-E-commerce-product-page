import React from 'react'
import './intro.css'
import Shopping from './Shopping'
import { lists } from './lists'

const Navbar = () => {

  const listItems = lists.map((list)=> 
    <li>{list}</li>
    )

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SNEAKERS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <i className="far fa-shopping-cart">
          <h1><Shopping key={lists.id} /></h1>
         
        </i>
        <i className="fas fa-user-circle"></i>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
