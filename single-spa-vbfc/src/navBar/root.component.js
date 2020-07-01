import React from 'react'
import {navigateToUrl} from 'single-spa'
const NavBar = () => (
  <div>
    <nav>
      <div className="nav-wrapper container">
        <a href="/" onClick={navigateToUrl} className="brand-logo">CONX</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/loan" onClick={navigateToUrl}>Loan</a></li>
          <li><a href="/borrow" onClick={navigateToUrl}>Borrow</a></li>
          <li><a href="/hire" onClick={navigateToUrl}>Hire</a></li>
          <li><a>Hello [User]</a></li>
        </ul>
      </div>
    </nav>
    
  </div>
)
export default NavBar