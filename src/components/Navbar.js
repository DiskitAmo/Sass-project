import { Link } from "gatsby"
import React from "react"
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link className="home" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="home" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="home" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="home" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
