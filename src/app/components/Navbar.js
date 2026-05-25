// app/components/Navbar.js
'use client';
import Link from 'next/link';
import { useTheme } from '../layout';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary border-bottom py-3">
      <div className="container">
        <Link href="/terminal_public" className="navbar-brand d-flex align-items-center gap-2 fw-bold text-primary">
          <div className="bg-body-secondary p-1 rounded border d-flex gap-1 align-items-center" style={{ fontSize: '0.75rem' }}>
            <span className="px-1 text-white bg-warning rounded-circle">🇵🇭</span>
            <span className="text-body-secondary">BFAR - NIFTC Kiosk</span>
          </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center gap-2 mt-3 mt-lg-0">
            <li className="nav-item"><Link href="/terminal_public" className="nav-link fw-semibold text-secondary">Home</Link></li>
            <li className="nav-item"><Link href="/terminal_public/01services" className="nav-link fw-semibold text-secondary">Services</Link></li>
            <li className="nav-item"><Link href="/terminal_public/00arta-steps" className="nav-link fw-semibold text-secondary">ARTA Steps</Link></li>
            <li className="nav-item"><Link href="/terminal_public/03charter" className="nav-link fw-semibold text-secondary">Charter</Link></li>
            <li className="nav-item"><Link href="/terminal_public/04survey" className="nav-link fw-semibold text-secondary">Survey</Link></li>
            <li className="nav-item"><Link href="/terminal_public/05contact" className="nav-link fw-semibold text-secondary">Contact</Link></li>
            
            {/* Global Dark Mode Toggle Button */}
            <li className="nav-item ms-lg-2">
              <button 
                onClick={toggleTheme} 
                className={`btn btn-sm rounded-pill px-3 ${theme === 'dark' ? 'btn-outline-warning' : 'btn-outline-dark'}`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <i className="bi bi-sun-fill me-1"></i> Light Mode
                  </>
                ) : (
                  <>
                    <i className="bi bi-moon-stars-fill me-1"></i> Dark Mode
                  </>
                )}
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                <i className="bi bi-translate me-1"></i> EN / FIL
              </button>
            </li>
            <li className="nav-item">
              <Link href="/terminal_public" className="btn btn-primary btn-sm rounded-pill px-3 bg-gradient">
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}