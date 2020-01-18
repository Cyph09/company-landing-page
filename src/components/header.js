import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <h1>
        <Link to="/">COBUS</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/process">Process</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;