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

  // Updated Kiosk Service Directory Payload matching the screenshots exactly
  const serviceItems = [
    { 
      id: 1, 
      title: '1. Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for FREE', 
      shortTitle: 'Distribution of Fish Seed for FREE',
      icon: 'bi-fish', // Based on the small fish icon
      colorClass: 'border-success-subtle bg-success-subtle bg-opacity-25' 
    },
    { 
      id: 2, 
      title: '2. Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) with Payment', 
      shortTitle: 'Distribution of Fish Seed with PAYMENT',
      icon: 'bi-cash-coin', 
      colorClass: 'border-warning-subtle bg-warning-subtle bg-opacity-25' 
    },
    { 
      id: 3, 
      title: '3. Processing of Request for Technical Assistance, Distribution of Information, Education and Communication (IEC) Materials', 
      shortTitle: 'Distribution of IEC Materials',
      icon: 'bi-bookshelf', 
      colorClass: 'border-purple-subtle bg-purple-subtle bg-opacity-25' 
    },
    { 
      id: 4, 
      title: '4. Processing of Request for Training Requested by Clients', 
      shortTitle: 'Technical Assistance/ Advisory for Walk-in Clients',
      icon: 'bi-mortarboard-fill', 
      colorClass: 'border-info-subtle bg-info-subtle bg-opacity-25' 
    },
    { 
      id: 5, 
      title: "5. Processing of Request for Technical Assistance for Fish Farmer's Seminar", 
      shortTitle: 'Fish Farmers Seminar',
      icon: 'bi-person-video3', 
      colorClass: 'border-orange-subtle bg-orange-subtle bg-opacity-25' 
    },
    { 
      id: 6, 
      title: '6. Processing of Request for Technical Assistance for on-Site Visit/Inspection', 
      shortTitle: 'Technical Assistance for Site Visit/ Ocular Inspection',
      icon: 'bi-truck-flatbed', 
      colorClass: 'border-success-subtle bg-success-subtle bg-opacity-25' 
    },
    { 
      id: 7, 
      title: '7. Processing of Request for Technical Assistance for Inquiries (Through Email and Walk-in)', 
      shortTitle: 'Technical Assistance for Inquiries (Through Email and Walk-in)',
      icon: 'bi-envelope-paper-heart', 
      colorClass: 'border-primary-subtle bg-primary-subtle bg-opacity-25' 
    },
    { 
      id: 8, 
      title: '8. Processing of Request for Technical Assistance for Inquiries (Through SMS, Phone call and Facebook Messenger)', 
      shortTitle: 'Technical Assistance for Inquiries (Through SMS, Phone call and Facebook Messenger)',
      icon: 'bi-chat-left-text', 
      colorClass: 'border-warning-subtle bg-warning-subtle bg-opacity-25' 
    },
    { 
      id: 9, 
      title: '9. Processing of Request for Accommodation at BFAR-NIFTC Dormitory', 
      shortTitle: 'Accommodation at BFAR-NIFTC Dormitory',
      icon: 'bi-house-heart', 
      colorClass: 'border-pink-subtle bg-pink-subtle bg-opacity-25' 
    },
    { 
      id: 10, 
      title: '10. Technical Assistance for On-the-Job Training', 
      shortTitle: 'Technical Assistance for On-the-Job Training',
      icon: 'bi-tools', 
      colorClass: 'border-secondary-subtle bg-secondary-subtle bg-opacity-25' 
    }
  ];

  const handleSelectService = (id) => {
    setSelectedService(selectedService === id ? null : id);
    setDetails(''); 
  };

  const handleAudioListen = (text, e) => {
    e.stopPropagation(); 
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex flex-column pb-5">
      
      {/* --- REPUBLIKANG PILIPINAS OFFICIAL HEADER --- */}
      <div className="bg-white border-bottom shadow-sm py-3 px-4 position-relative overflow-hidden">
        {/* Decorative Top Accent Banner bar */}
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
            <p className="m-0 text-muted" style={{ fontSize: '0.65rem' }}>Telephone No.: 0997-745-9961 | Email: niftc@bfar.da.gov.ph</p>
          </div>

          <div className="d-flex align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Bureau_of_Fisheries_and_Aquatic_Resources_%28BFAR%29.svg" alt="BFAR Logo" style={{ height: '65px', width: 'auto' }} />
          </div>
        </div>
      </div>

      <div className="container my-4 flex-grow-1">
        
        {/* --- STEP PROGRESS COMPONENT --- */}
        <div className="d-flex justify-content-end mb-4">
          <div className="bg-white px-2 py-1 rounded-pill d-inline-flex gap-1 border shadow-sm align-items-center" style={{ fontSize: '0.68rem' }}>
            <span className="badge bg-primary px-3 py-1.5 rounded-pill fw-semibold">1 Assistance</span>
            <span className="text-muted opacity-50 px-2">2 Profile</span>
            <span className="text-muted opacity-50 px-2">3 Charter</span>
            <span className="text-muted opacity-50 px-2">4 Survey</span>
          </div>
        </div>

        {/* --- MAIN INTERACTIVE SELECTION PANEL --- */}
        <div className="card border-0 shadow rounded-4 overflow-hidden bg-white">
          <div className="bg-primary p-3 text-white d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-clipboard-check text-white fs-4"></i>
              </div>
              <div>
                <h2 className="h5 fw-bold mb-0 text-uppercase tracking-wide" style={{ fontSize: '1.15rem', letterSpacing: '0.3px' }}>
                  TECHNICAL ASSISTANCE REQUESTED
                </h2>
                <p className="m-0 opacity-75" style={{ fontSize: '0.78rem' }}>Tap each service you need. Use the QR icon to share or print.</p>
              </div>
            </div>
            <button 
              onClick={(e) => handleAudioListen("Technical Assistance Requested. Tap each service you need.", e)}
              className="btn btn-outline-light btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
              style={{ fontSize: '0.8rem' }}
            >
              <i className="bi bi-volume-up"></i> Listen
            </button>
          </div>

          <div className="card-body p-4 bg-light bg-opacity-20">
            <div className="row g-3">
              {serviceItems.map((item) => {
                const isSelected = selectedService === item.id;
                return (
                  <div className="col-12 col-md-6" key={item.id}>
                    <div 
                      onClick={() => handleSelectService(item.id)}
                      className={`card h-100 border rounded-4 p-3 position-relative ${
                        isSelected ? 'border-success bg-success bg-opacity-10 shadow-sm' : item.colorClass
                      }`}
                      style={{ cursor: 'pointer', transition: 'all 0.15s ease-in-out' }}
                    >
                      <div className="d-flex align-items-start justify-content-between gap-2">
                        <div className="d-flex gap-3 align-items-start">
                          <div className="p-2 bg-white rounded-3 fs-5 d-flex align-items-center justify-content-center border shadow-sm flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                            <i className={`bi ${item.icon} text-primary`}></i>
                          </div>
                          <div>
                            <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>{item.title}</h6>
                          </div>
                        </div>

                        {/* Listen Row Sub-action */}
                        <button 
                          onClick={(e) => handleAudioListen(item.title, e)} 
                          className="btn btn-outline-primary btn-sm rounded-pill px-2 py-0.5 d-flex align-items-center gap-1 flex-shrink-0"
                          style={{ fontSize: '0.68rem' }}
                        >
                          <i className="bi bi-volume-up"></i> Listen
                        </button>
                      </div>

                      {/* Interactive Selection Trigger Controls */}
                      <div className="d-flex gap-2 mt-3 align-items-center">
                        {isSelected ? (
                          <button className="btn btn-success btn-sm rounded-2 px-3 py-1 fw-semibold d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
                            <i className="bi bi-check-lg"></i> Selected
                          </button>
                        ) : (
                          <button className="btn btn-white border shadow-sm btn-sm rounded-2 px-3 py-1 text-muted fw-semibold" style={{ fontSize: '0.72rem' }}>
                            Tap to select
                          </button>
                        )}
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveQrService(item);
                          }}
                          className="btn btn-white border shadow-sm btn-sm rounded-2 px-2 py-1 text-muted d-flex align-items-center gap-1" 
                          style={{ fontSize: '0.72rem' }}
                        >
                          <i className="bi bi-qr-code"></i> QR
                        </button>
                      </div>

                      {/* --- COLLAPSIBLE COMPLIANCE DETAILED REMARKS INPUT PANEL --- */}
                      {isSelected && (
                        <div className="mt-3 p-3 bg-white rounded-3 border border-success border-opacity-20" onClick={(e) => e.stopPropagation()}>
                          <label className="form-label text-secondary small mb-1" style={{ fontSize: '0.75rem' }}>
                            Please specify details:
                          </label>
                          <div className="border rounded-2 p-1 bg-light d-flex align-items-center gap-2 mb-2" style={{ maxWidth: '140px' }}>
                            <i className="bi bi-keyboard text-muted ms-1" style={{ fontSize: '0.75rem' }}></i>
                            <span className="text-muted" style={{ fontSize: '0.65rem' }}>or type below</span>
                          </div>
                          <textarea 
                            rows="2"
                            className="form-control form-control-sm text-dark bg-white border border-secondary-subtle"
                            placeholder={`Enter details for ${item.shortTitle}`}
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            style={{ fontSize: '0.78rem' }}
                          ></textarea>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Action Footer bar Control elements */}
          <div className="card-footer p-3 bg-white border-top d-flex justify-content-between align-items-center px-4">
            <span className="text-muted fw-normal" style={{ fontSize: '0.8rem' }}>
              {selectedService ? '1 service(s) selected' : 'Tap one or more services above'}
            </span>
            <Link 
              href="/02profile" 
              className={`btn px-4 py-1.5 rounded-2 fw-semibold text-white ${selectedService ? 'btn-primary' : 'btn-secondary disabled opacity-50'}`}
              style={{ fontSize: '0.82rem' }}
            >
              Continue <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

      </div>

      {/* --- MODAL SYSTEM COMPONENT (QR OVERLAY HUD DISPLAY) --- */}
      {activeQrService && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '380px' }}>
            <div className="modal-content border-0 shadow-lg rounded-4 p-2 bg-white">
              <div className="modal-header border-0 pb-0 justify-content-end">
                <button type="button" className="btn-close shadow-none" onClick={() => setActiveQrService(null)} aria-label="Close" style={{ fontSize: '0.75rem' }}></button>
              </div>
              <div className="modal-body text-center pt-0 px-3">
                <span className="text-primary text-uppercase fw-bold tracking-wider d-block mb-1" style={{ fontSize: '0.62rem', letterSpacing: '0.5px' }}>Scan to Request This Service</span>
                <h5 className="fw-bold text-dark mb-3 px-1" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{activeQrService.shortTitle}</h5>
                
                {/* Hardware Barcode Simulated Container block */}
                <div className="p-2 d-inline-block mb-3">
                  <div className="d-flex align-items-center justify-content-center bg-white" style={{ width: '170px', height: '170px' }}>
                    <i className="bi bi-qr-code text-dark" style={{ fontSize: '10.5rem', lineHeight: '1' }}></i>
                  </div>
                </div>

                <p className="text-muted text-center px-1 mb-4" style={{ fontSize: '0.7rem', lineHeight: '1.4' }}>
                  Outside clients can scan this QR with their phone camera to skip the checklist and go straight to filling out their information.
                </p>

                <button onClick={() => setActiveQrService(null)} className="btn btn-primary w-100 rounded-3 fw-semibold py-2 mb-2" style={{ fontSize: '0.85rem' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}