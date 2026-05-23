// app/page.js
'use client';

import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  const handleListen = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  };

  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="container mt-4 mb-5">
        <div className="card border-0 bg-primary bg-gradient rounded-4 text-white p-4 p-md-5 shadow-lg position-relative overflow-hidden">
          <div className="row align-items-center g-4 position-relative z-1">
            <div className="col-12 col-lg-7">
              <span className="badge bg-white bg-opacity-20 text-white rounded-pill mb-3 px-3 py-1 text-uppercase tracking-wider fw-bold small">
                <i className="bi bi-building me-1"></i> Government Service Kiosk
              </span>
              <h1 className="display-5 fw-black tracking-tight mb-3">
                BFAR-National Inland Fisheries Technology Center
              </h1>
              <p className="lead opacity-90 mb-4 max-w-xl">
                A modern, accessible kiosk for fisherfolk, farmers, and citizens to request technical assistance and provide feedback to BFAR.
              </p>
              
              {/* Connected CTA Buttons */}
              <div className="d-flex flex-wrap gap-2">
                <Link href="/01services" className="btn btn-white btn-lg rounded-pill px-4 fw-black text-primary shadow bg-white">
                  Get Started <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <Link href="/00arta-steps" className="btn btn-warning btn-lg rounded-pill px-4 fw-black text-dark shadow">
                  <i className="bi bi-eye-fill me-1"></i> View ARTA Steps
                </Link>
                <button 
                  onClick={() => handleListen("Welcome to BFAR National Inland Fisheries Technology Center. Tap Get Started to begin.")}
                  className="btn btn-outline-light btn-lg rounded-pill px-4 fw-bold"
                >
                  <i className="bi bi-volume-up-fill"></i> Learn More
                </button>
              </div>
            </div>

            {/* Graphics Right Panel */}
            <div className="col-12 col-lg-5 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-4 border border-white border-opacity-10 shadow-sm">
                <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                  <span className="fs-1">🐟</span>
                  <span className="fs-1">🌾</span>
                  <span className="fs-1">🏛️</span>
                </div>
                <h5 className="fw-bold tracking-widest text-uppercase text-warning" style={{ fontSize: '0.8rem' }}>ANTI-RED TAPE AUTHORITY</h5>
                <p className="small m-0 text-white-50">RA 11032 Citizen's Charter Digital Compliance System</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- QUICK ACTION SECTIONS --- */}
      <div className="container mb-5">
        <div className="row g-4">
          
          {/* Box 1: Technical Assistance */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-body text-start border-bottom border-primary border-3 transition-hover">
              <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3 d-inline-block mb-3" style={{ width: '54px' }}>
                <i className="bi bi-file-earmark-text-fill fs-4"></i>
              </div>
              <h5 className="fw-black text-body-emphasis mb-2">Technical Assistance</h5>
              <p className="text-muted small flex-grow-1">Request help for fisheries, aquaculture, and agricultural concerns directly.</p>
              <Link href="/01services" className="btn btn-link p-0 text-decoration-none fw-bold text-primary small mt-auto d-flex align-items-center gap-1">
                Open service <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Box 2: Citizen's Charter */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-body text-start border-bottom border-warning border-3 transition-hover">
              <div className="p-3 bg-warning bg-opacity-10 text-warning rounded-3 d-inline-block mb-3" style={{ width: '54px' }}>
                <i className="bi bi-journal-check fs-4"></i>
              </div>
              <h5 className="fw-black text-body-emphasis mb-2">Citizen's Charter</h5>
              <p className="text-muted small flex-grow-1">Know your rights and the primary technical services we are mandated to deliver.</p>
              <Link href="/00arta-steps" className="btn btn-link p-0 text-decoration-none fw-bold text-warning small mt-auto d-flex align-items-center gap-1">
                Open service <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Box 3: Client Feedback */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-body text-start border-bottom border-success border-3 transition-hover">
              <div className="p-3 bg-success bg-opacity-10 text-success rounded-3 d-inline-block mb-3" style={{ width: '54px' }}>
                <i className="bi bi-chat-left-heart-fill fs-4"></i>
              </div>
              <h5 className="fw-black text-body-emphasis mb-2">Client Feedback</h5>
              <p className="text-muted small flex-grow-1">Share your experience via our interactive emoji survey matrices to improve public service.</p>
              <Link href="/04survey" className="btn btn-link p-0 text-decoration-none fw-bold text-success small mt-auto d-flex align-items-center gap-1">
                Open service <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* --- HOW IT WORKS WORKFLOW MAP --- */}
      <div className="container mb-5">
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-body-tertiary">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
            <div>
              <h4 className="fw-black text-body-emphasis m-0">How it works</h4>
              <p className="text-muted small m-0">Four quick steps. The voice assistant below can guide you anytime.</p>
            </div>
            <span className="badge bg-light border text-body-emphasis rounded-pill px-3 py-2">~5 minutes</span>
          </div>

          <div className="row g-4 position-relative">
            {[
              { num: '1', title: 'Technical Assistance', desc: 'Select requested support lines', url: '/services' },
              { num: '2', title: 'Client Profile', desc: 'Fill up kiosk demographics form', url: '/profile' },
              { num: '3', title: 'Citizen\'s Charter', desc: 'Review active service indicators', url: '/charter' },
              { num: '4', title: 'Survey & Feedback', desc: 'Rate experience dimensions', url: '/survey' }
            ].map((step, idx) => (
              <div className="col-12 col-sm-6 col-md-3 text-center position-relative" key={step.num}>
                <Link href={step.url} className="text-decoration-none group-hover">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold shadow-sm mb-3" style={{ width: '40px', height: '40px' }}>
                    {step.num}
                  </div>
                  <h6 className="fw-bold text-body-emphasis mb-1 small">{step.title}</h6>
                  <p className="text-muted text-center m-0" style={{ fontSize: '0.65rem' }}>{step.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOOTER INFORMATIONAL COMPONENT --- */}
      <footer className="container mb-4">
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="card border p-3 rounded-3 bg-body d-flex flex-row align-items-center gap-3 shadow-xs">
              <i className="bi bi-telephone text-primary fs-4"></i>
              <div>
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.55rem' }}>Telephone Number</span>
                <span className="fw-bold text-body-emphasis small">0997-745-9961</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border p-3 rounded-3 bg-body d-flex flex-row align-items-center gap-3 shadow-xs">
              <i className="bi bi-envelope text-primary fs-4"></i>
              <div>
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.55rem' }}>Email Address</span>
                <span className="fw-bold text-body-emphasis small">niftc@bfar.da.gov.ph</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border p-3 rounded-3 bg-body d-flex flex-row align-items-center gap-3 shadow-xs">
              <i className="bi bi-geo-alt text-primary fs-4"></i>
              <div>
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.55rem' }}>Center Location</span>
                <span className="fw-bold text-body-emphasis text-truncate d-block small" style={{ maxWidth: '160px' }}>Tanay, Rizal, Philippines</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border p-3 rounded-3 bg-body d-flex flex-row align-items-center gap-3 shadow-xs">
              <i className="bi bi-clock text-primary fs-4"></i>
              <div>
                <span className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '0.55rem' }}>Office Hours</span>
                <span className="fw-bold text-body-emphasis small">Mon-Fri - 8AM-5PM</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}