// app/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const handleListen = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex flex-column pb-5">
      {/* REPUBLIKANG PILIPINAS OFFICIAL HEADER */}
      <div className="bg-white border-bottom shadow-sm py-3 px-4 position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 end-0 d-flex" style={{ height: '8px' }}>
          <div className="bg-success flex-grow-1" style={{ width: '15%' }}></div>
          <div className="bg-warning flex-grow-1" style={{ width: '45%' }}></div>
          <div className="bg-primary flex-grow-1" style={{ width: '40%' }}></div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-between mt-1">
          <div className="d-flex align-items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_the_Philippines.svg/1200px-Coat_of_arms_of_the_Philippines.svg.png" alt="Bagong Pilipinas" style={{ height: '65px', width: 'auto' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Department_of_Agriculture_%28DA%29_PH.svg" alt="Department of Agriculture" style={{ height: '55px', width: 'auto' }} />
          </div>
          <div className="text-center flex-grow-1 mx-3">
            <p className="m-0 text-secondary fw-semibold small" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>Republic of the Philippines</p>
            <p className="m-0 text-secondary fw-semibold small" style={{ fontSize: '0.75rem' }}>Department of Agriculture</p>
            <p className="m-0 text-dark fw-bold small" style={{ fontSize: '0.8rem' }}>Bureau of Fisheries and Aquatic Resources</p>
            <h1 className="h6 fw-black text-primary m-0 mt-2 tracking-wide" style={{ fontSize: '0.85rem', fontWeight: '800' }}>NATIONAL INLAND FISHERIES TECHNOLOGY CENTER</h1>
            <p className="m-0 text-muted" style={{ fontSize: '0.65rem' }}>Km. 53 Manila East Road, Sitio Suyoc, Brgy. Tandang Kutyo, Tanay, Rizal</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Bureau_of_Fisheries_and_Aquatic_Resources_%28BFAR%29.svg" alt="BFAR Logo" style={{ height: '65px', width: 'auto' }} />
          </div>
        </div>
      </div>

      <div className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center" style={{ maxWidth: '900px' }}>
        <div className="card border-0 shadow rounded-4 overflow-hidden w-100 bg-white">
          
          {/* Main Action Banner */}
          <div className="bg-primary p-4 text-white d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-display text-white fs-3"></i>
              </div>
              <div>
                <h2 className="h5 fw-bold mb-0 text-uppercase tracking-wide" style={{ fontSize: '1.2rem' }}>System Access Portal</h2>
                <p className="m-0 opacity-75" style={{ fontSize: '0.8rem' }}>Select your operational destination view platform environment below.</p>
              </div>
            </div>
            <button onClick={() => handleListen("System Access Portal. Choose Public Access Kiosk or Admin Dashboard Controller Console.")} className="btn btn-outline-light btn-sm rounded-pill px-3" style={{ fontSize: '0.8rem' }}>
              <i className="bi bi-volume-up"></i> Listen
            </button>
          </div>

          {/* Core Grid Selection Operations Block */}
          <div className="card-body p-4 bg-light bg-opacity-25">
            <div className="row g-4">
              
              {/* BUTTON 1: PUBLIC ACCESS KIOSK */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border rounded-4 bg-white p-4 d-flex flex-column transition-hover shadow-xs border-success-subtle" style={{ borderLeftWidth: '5px !important' }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="bg-success bg-opacity-10 text-success rounded-3 p-3 d-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px' }}>
                      <i className="bi bi-person-bounding-box fs-3"></i>
                    </div>
                    <span className="badge bg-success bg-opacity-10 text-success fw-bold text-uppercase px-2.5 py-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Citizen Terminal</span>
                  </div>
                  
                  <h4 className="fw-black text-dark mb-2" style={{ fontWeight: '800', fontSize: '1.2rem' }}>Public Kiosk Entry</h4>
                  <p className="text-muted small flex-grow-1 mb-4" style={{ lineHeight: '1.5' }}>
                    Access the interactive Citizen's Charter workflow module. Register technical assistance requests, submit client demographics, and process operational satisfaction scorecards.
                  </p>
                  
                  <Link href="/terminal_public" className="btn btn-success w-100 py-2.5 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2 text-white shadow-xs">
                    Launch Client Terminal <i className="bi bi-arrow-right-short fs-5"></i>
                  </Link>
                </div>
              </div>

              {/* BUTTON 2: ADMIN LOGISTICS ENTRY */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border rounded-4 bg-white p-4 d-flex flex-column transition-hover shadow-xs border-primary-subtle" style={{ borderLeftWidth: '5px !important' }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 d-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px' }}>
                      <i className="bi bi-shield-lock-fill fs-3"></i>
                    </div>
                    <span className="badge bg-primary bg-opacity-10 text-primary fw-bold text-uppercase px-2.5 py-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Management Control</span>
                  </div>

                  <h4 className="fw-black text-dark mb-2" style={{ fontWeight: '800', fontSize: '1.2rem' }}>Admin Dashboard Panel</h4>
                  <p className="text-muted small flex-grow-1 mb-4" style={{ lineHeight: '1.5' }}>
                    Secure terminal access point reserved for authorized personnel. Authenticate backend privileges to monitor live transaction metrics logs, view submitted data matrices, and generate analytics.
                  </p>

                  <Link href="/terminal_admin" className="btn btn-primary w-100 py-2.5 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2 text-white shadow-xs">
                    Access Management Console <i className="bi bi-lock-fill small"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Compliance Info Legal Text Footer Row */}
          <div className="card-footer bg-white border-top p-3 text-center">
            <span className="text-muted text-uppercase fw-bold font-monospace tracking-wider" style={{ fontSize: '0.65rem' }}>
              RA 11032 Ease of Doing Business Compliance System — Anti-Red Tape Authority Digital Framework
            </span>
          </div>

        </div>
      </div>

      {/* FOOTER SERVICE METADATA LOGS INFO PANELS */}
      <footer className="container mt-auto" style={{ maxWidth: '900px' }}>
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="card border p-2.5 rounded-3 bg-white d-flex flex-row align-items-center gap-2 shadow-xs">
              <i className="bi bi-telephone text-primary fs-5"></i>
              <div className="text-truncate">
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.5rem' }}>Telephone Contact</span>
                <span className="fw-bold text-dark small" style={{ fontSize: '0.75rem' }}>0997-745-9961</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border p-2.5 rounded-3 bg-white d-flex flex-row align-items-center gap-2 shadow-xs">
              <i className="bi bi-envelope text-primary fs-5"></i>
              <div className="text-truncate">
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.5rem' }}>Secure Email</span>
                <span className="fw-bold text-dark small" style={{ fontSize: '0.75rem' }}>niftc@bfar.da.gov.ph</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border p-2.5 rounded-3 bg-white d-flex flex-row align-items-center gap-2 shadow-xs">
              <i className="bi bi-geo-alt text-primary fs-5"></i>
              <div className="text-truncate">
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.5rem' }}>Center Location</span>
                <span className="fw-bold text-dark small text-truncate d-block" style={{ fontSize: '0.75rem' }}>Tanay, Rizal, PH</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border p-2.5 rounded-3 bg-white d-flex flex-row align-items-center gap-2 shadow-xs">
              <i className="bi bi-clock text-primary fs-5"></i>
              <div className="text-truncate">
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.5rem' }}>Operational Hours</span>
                <span className="fw-bold text-dark small" style={{ fontSize: '0.75rem' }}>Mon-Fri - 8AM-5PM</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}