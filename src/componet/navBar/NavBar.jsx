
import './navbar.css';
import logo from './express-logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
       
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img src={logo} alt="Upfront Courier Logo" className="logo-img" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
            TRACK A SHIPMENT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
            CONTACT US
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
            MAKE PAYMENT
            </Link>
          </li>
          <li>
          <button className="track-btn">Track</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
