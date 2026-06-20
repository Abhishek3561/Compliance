import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">

          <div className="logo">
            <img src="/assets/Logo.png" alt="Logo" />
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li className="menu-close" onClick={() => setMenuOpen(false)}>✕</li>
            <li className="active-link"><img src="/assets/Home.png" alt="" className="nav-icon" />Home</li>
            <li><img src="/assets/AboutUs.png" alt="" className="nav-icon" />About Us</li>
            <li><img src="/assets/Our Services.png" alt="" className="nav-icon" />Our Services</li>
            <li><img src="/assets/Pricing.png" alt="" className="nav-icon" />Pricing</li>
            <li><img src="/assets/FAQ.png" alt="" className="nav-icon" />FAQ</li>
            <li><img src="/assets/Contact.png" alt="" className="nav-icon" />Contact</li>
            <li className="drawer-contact">
              <button className="contact-btn">
                <img src="/assets/Contact-icon.png" alt="" />
                Contact Us
              </button>
            </li>
          </ul>

          {menuOpen && (
            <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
          )}

          <button className="contact-btn desktop-contact">
            <img src="/assets/Contact-icon.png" alt="" />
            Contact Us
          </button>

          <div
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <img src="/assets/Menu.png" alt="menu" />
          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;