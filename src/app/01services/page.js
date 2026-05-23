// app/01services/page.js
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function ServicesPage() {
  // Application State
  const [selectedService, setSelectedService] = useState(null);
  const [details, setDetails] = useState('');
  const [activeQrService, setActiveQrService] = useState(null);

  // Kiosk Service Directory Payload with matching layout icons
  const serviceItems = [
    { id: 1, title: 'Distribution of Fish Seed for FREE', icon: 'bi-tsunami', colorClass: 'border-success-subtle bg-success-subtle bg-opacity-10' },
    { id: 2, title: 'Distribution of Fish Seed with PAYMENT', icon: 'bi-cash-coin', colorClass: 'border-warning-subtle bg-warning-subtle bg-opacity-10' },
    { id: 3, title: 'Distribution of IEC Materials', icon: 'bi-book', colorClass: 'border-purple-subtle bg-purple-subtle bg-opacity-10' },
    { id: 4, title: 'Technical Assistance/ Advisory for Walk-in Clients', icon: 'bi-person-workspace', colorClass: 'border-primary-subtle bg-primary-subtle bg-opacity-10' },
    { id: 5, title: 'Fish Farmers Seminar', icon: 'bi-people', colorClass: 'border-orange-subtle bg-orange-subtle bg-opacity-10' },
    { id: 6, title: 'Technical Assistance for Site Visit/ Ocular Inspection', icon: 'bi-truck', colorClass: 'border-info-subtle bg-info-subtle bg-opacity-10' },
    { id: 7, title: 'Technical Assistance for On-the-Job Training', icon: 'bi-tools', colorClass: 'border-secondary-subtle bg-secondary-subtle bg-opacity-10' },
    { id: 8, title: 'Regular/ National Training', icon: 'bi-mortarboard', colorClass: 'border-teal-subtle bg-teal-subtle bg-opacity-10' },
    { id: 9, title: 'FISHYALAN/ Agri-Fisheries Project', icon: 'bi-sprout', colorClass: 'border-danger-subtle bg-danger-subtle bg-opacity-10' },
    { id: 10, title: 'Others', icon: 'bi-question-circle', colorClass: 'border-pink-subtle bg-pink-subtle bg-opacity-10' }
  ];

  const handleSelectService = (id) => {
    setSelectedService(selectedService === id ? null : id);
    setDetails(''); // Clear internal buffer upon reset
  };

  const handleAudioListen = (text, e) => {
    e.stopPropagation(); // Avoid triggering card state changes
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container my-4 flex-grow-1">
        
        {/* --- STEP PROGRESS COMPONENT HEADER --- */}
        <div className="d-flex justify-content-center mb-4">
          <div className="bg-body-secondary p-2 rounded-pill d-inline-flex gap-2 border shadow-sm fs-7">
            <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold"><i className="bi bi-1-circle me-1"></i> Assistance</span>
            <span className="text-muted px-2 py-1">2. Profile</span>
            <span className="text-muted px-2 py-1">3. Charter</span>
            <span className="text-muted px-2 py-1">4. Survey</span>
          </div>
        </div>

        {/* --- MAIN INTERACTIVE SELECTION GRID PANEL --- */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-body">
          <div className="bg-primary p-4 text-white d-flex justify-content-between align-items-center bg-gradient">
            <div>
              <h2 className="h4 fw-bold mb-1 d-flex align-items-center gap-2">
                <i className="bi bi-file-earmark-ruled"></i> TECHNICAL ASSISTANCE REQUESTED
              </h2>
              <p className="m-0 small opacity-75">Tap each service you need. Use the QR icon to share or print configuration context blocks.</p>
            </div>
            <button 
              onClick={(e) => handleAudioListen("Technical Assistance Requested. Tap each service you need.", e)}
              className="btn btn-light btn-sm rounded-pill px-3 fw-bold text-primary shadow-sm"
            >
              <i className="bi bi-volume-up-fill me-1"></i> Listen
            </button>
          </div>

          <div className="card-body p-4">
            <div className="row g-3">
              {serviceItems.map((item) => {
                const isSelected = selectedService === item.id;
                return (
                  <div className="col-12 col-md-6" key={item.id}>
                    <div 
                      onClick={() => handleSelectService(item.id)}
                      className={`card h-100 border rounded-4 p-3 cursor-pointer transition-all ${
                        isSelected ? 'border-success bg-success bg-opacity-10 shadow' : item.colorClass
                      }`}
                      style={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}
                    >
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div className={`p-2 rounded-3 fs-4 d-flex align-items-center justify-content-center ${isSelected ? 'bg-success text-white' : 'bg-body text-primary shadow-xs'}`} style={{ width: '45px', height: '45px' }}>
                            <i className={`bi ${item.icon}`}></i>
                          </div>
                          <div>
                            <h6 className="fw-bold m-0 text-body-emphasis small-title">{item.title}</h6>
                          </div>
                        </div>

                        {/* Card Sub-actions */}
                        <div className="d-flex gap-1 align-items-center">
                          <button 
                            onClick={(e) => handleAudioListen(item.title, e)} 
                            className="btn btn-link btn-xs text-muted p-1" 
                            title="Listen"
                          >
                            <i className="bi bi-volume-up fs-5"></i>
                          </button>
                        </div>
                      </div>

                      {/* Explicit Interactive Control Tray */}
                      <div className="d-flex gap-2 mt-3 align-items-center">
                        <button className={`btn btn-xs rounded-pill px-3 fw-bold ${isSelected ? 'btn-success text-white' : 'btn-outline-primary bg-body'}`} style={{ fontSize: '0.7rem' }}>
                          {isSelected ? (
                            <><i className="bi bi-check-lg me-1"></i> Selected</>
                          ) : 'Tap to select'}
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveQrService(item);
                          }}
                          className="btn btn-outline-secondary btn-xs rounded-pill px-2 bg-body" 
                          style={{ fontSize: '0.7rem' }}
                        >
                          <i className="bi bi-qr-code me-1"></i> QR
                        </button>
                      </div>

                      {/* --- COLLAPSIBLE TEXT INPUT PANEL --- */}
                      {isSelected && (
                        <div className="mt-3 p-3 bg-body rounded-3 border border-success border-opacity-20 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                          <label className="form-label text-success fw-bold small mb-2 d-flex align-items-center gap-1">
                            <i className="bi bi-pencil-square"></i> Please specify details:
                          </label>
                          <div className="input-group input-group-sm mb-2">
                            <span className="input-group-text bg-light text-muted"><i className="bi bi-keyboard"></i></span>
                            <span className="input-group-text bg-light text-muted small" style={{ fontSize: '0.65rem' }}>or type below</span>
                          </div>
                          <textarea 
                            rows="2"
                            className="form-control form-control-sm text-body bg-body-tertiary"
                            placeholder={`Enter special compliance instructions or request remarks for: ${item.title}`}
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                          ></textarea>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Action Footer Control bar */}
          <div className="card-footer p-3 bg-body-tertiary border-top d-flex justify-content-between align-items-center px-4">
            <span className="text-muted small fw-semibold">
              {selectedService ? '1 service(s) selected' : 'Top one or more services above'}
            </span>
            <Link 
              href="/02profile" 
              className={`btn px-4 py-2 rounded-pill fw-bold bg-gradient ${selectedService ? 'btn-primary' : 'btn-secondary disabled'}`}
            >
              Continue <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

      </div>

      {/* --- STANDALONE MODAL COMPONENT (QR CODE OVERLAY SCREEN) --- */}
      {activeQrService && (
        <div className="modal fade show d-block backdrop-blur" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
            <div className="modal-content border-0 shadow-lg rounded-4 p-3 bg-body">
              <div className="modal-header border-0 pb-0 justify-content-end">
                <button type="button" className="btn-close" onClick={() => setActiveQrService(null)} aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pt-0">
                <span className="text-primary text-uppercase fw-black tracking-widest d-block mb-1" style={{ fontSize: '0.65rem' }}>Scan to Request This Service</span>
                <h5 className="fw-bold text-body-emphasis mb-3 px-2" style={{ fontSize: '1rem' }}>{activeQrService.title}</h5>
                
                {/* Visual Placeholder container representing standard system hardware barcodes */}
                <div className="bg-white p-3 rounded-4 d-inline-block border shadow-xs mb-3">
                  <div className="d-flex align-items-center justify-content-center bg-light rounded" style={{ width: '180px', height: '180px' }}>
                    <i className="bi bi-qr-code text-dark" style={{ fontSize: '10rem' }}></i>
                  </div>
                </div>

                <p className="text-muted text-center px-2 mb-3" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                  Outside clients can scan this QR with their phone camera to skip the kiosk queue step checklist and fill data entries on their mobile devices immediately.
                </p>

                <button onClick={() => setActiveQrService(null)} className="btn btn-primary w-100 rounded-pill fw-bold bg-gradient">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 