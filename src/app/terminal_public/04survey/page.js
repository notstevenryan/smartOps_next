// app/terminal_public/04survey/page.js
'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

export default function SurveyPage() {
  // Navigation Sub-States: 'form' | 'review' | 'thanks'
  const [viewState, setViewState] = useState('form');
  
  // Survey Matrix Response State
  const [ratings, setRatings] = useState({
    SQD0: null,
    SQD1: null,
    SQD2: null,
    SQD3: null,
    SQD4: null,
    SQD5: null,
    SQD6: null,
    SQD7: null,
    SQD8: null
  });
  const [suggestions, setSuggestions] = useState('');

  // Structured Survey Schema tracking images 1825a5.png and 1825cc.png
  const questionsList = [
    { id: 'SQD0', dimension: 'Satisfaction', text: 'I am satisfied with the service/s that I availed in the Bureau.', icon: 'bi-star-fill text-warning' },
    { id: 'SQD1', dimension: 'Responsiveness', text: 'I spent a reasonable amount of time for my transaction/s.', icon: 'bi-clock-history text-secondary' },
    { id: 'SQD2', dimension: 'Reliability', text: 'The office/s followed the transaction\'s requirements and steps based on the information provided.', icon: 'bi-file-earmark-text text-success' },
    { id: 'SQD3', dimension: 'Access and Facilities', text: 'The transaction/s was conducted in an easily accessible and comfortable environment.', icon: 'bi-building text-info' },
    { id: 'SQD4', dimension: 'Communication', text: 'I easily found information about my transaction/s from the office or other platforms.', icon: 'bi- megaphone text-danger' },
    { id: 'SQD5', dimension: 'Costs', text: 'I paid a reasonable amount of fees for my transaction/s.', icon: 'bi-wallet2 text-success' },
    { id: 'SQD6', dimension: 'Integrity', text: 'I feel the office was fair to everyone, or "walang palakasan", during my transaction/s.', icon: 'bi-scales text-primary' },
    { id: 'SQD7', dimension: 'Assurance', text: 'The BFAR staff I transacted with was courteous, approachable, and well-informed.', icon: 'bi-person-badge text-warning' },
    { id: 'SQD8', dimension: 'Outcome', text: 'I got what I needed from the Bureau, or (if denied) denial of request/s was sufficiently explained to me.', icon: 'bi-bullseye text-danger' }
  ];

  const ratingScales = [
    { value: '1', label: 'Very Bad', emoji: '😡' },
    { value: '2', label: 'Bad', emoji: '😟' },
    { value: '3', label: 'Okay', emoji: '😐' },
    { value: '4', label: 'Good', emoji: '😊' },
    { value: '5', label: 'Very Good', emoji: '😁' },
    { value: 'N/A', label: 'N/A', emoji: '🤷' }
  ];

  // Mock stored preview variables from prior screen sections (image_180a66.png)
  const technicalAssistance = { service: 'Distribution of Fish Seed for FREE', details: 'sample' };
  const clientProfile = {
    name: 'hello world', sex: 'Female (Babae)', categories: ['Youth 18-30 yrs old'],
    birthday: '2004-12-25', contactNumber: '09090909090', address: 'sample, sample, sample', office: 'sample'
  };
  const citizensCharter = {
    date: '2026-05-23', clientType: 'Citizen', officeVisited: 'NIFTC Tanay', serviceAccessed: 'free fish seed',
    cc1: 'I know what a CC is and I saw this office\'s CC', cc2: 'Somewhat easy to see', cc3: 'Helped very much'
  };

  const handleSelectRating = (qId, val) => {
    setRatings({ ...ratings, [qId]: val });
  };

  const handleListen = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  };

  // --- RENDERING BLOCK 3: THANK YOU SCREEN ---
  if (viewState === 'thanks') {
    return (
      <>
        <Navbar />

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
            </div>
            <div className="d-flex align-items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Bureau_of_Fisheries_and_Aquatic_Resources_%28BFAR%29.svg" alt="BFAR Logo" style={{ height: '65px', width: 'auto' }} />
            </div>
          </div>
        </div>

        <div className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="card border-0 shadow rounded-4 p-5 text-center bg-white" style={{ maxWidth: '600px' }}>
            <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
              <i className="bi bi-check-lg display-4 fw-bold"></i>
            </div>
            <h1 className="fw-black text-dark mb-3" style={{ fontWeight: '800' }}>Thank You!</h1>
            <p className="text-muted fs-6 px-3 mb-4" style={{ lineHeight: '1.6' }}>
              Your feedback and request answers have been successfully submitted. Please proceed to the attending technician at the counter window.
            </p>
            <button onClick={() => window.location.reload()} className="btn btn-primary px-5 py-2.5 rounded-2 fw-semibold">
              Finish & Return Home
            </button>
          </div>
        </div>
      </div>
    </>
    );
  }

  // --- RENDERING BLOCK 2: PREVIEW ANSWERS (CONFIRMATION) VIEW ---
  if (viewState === 'review') {
    return (
          <>
            <Navbar />
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
            </div>
            <div className="d-flex align-items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Bureau_of_Fisheries_and_Aquatic_Resources_%28BFAR%29.svg" alt="BFAR Logo" style={{ height: '65px', width: 'auto' }} />
            </div>
          </div>
        </div>

        <div className="container my-4 flex-grow-1" style={{ maxWidth: '960px' }}>
          <div className="d-flex justify-content-end mb-4">
            <div className="bg-white px-2 py-1 rounded-pill d-inline-flex gap-1 border shadow-sm align-items-center" style={{ fontSize: '0.68rem' }}>
              <span className="text-muted opacity-50 px-2">1 Assistance</span>
              <span className="text-muted opacity-50 px-2">2 Profile</span>
              <span className="text-muted opacity-50 px-2">3 Charter</span>
              <span className="badge bg-primary px-3 py-1.5 rounded-pill fw-semibold">4 Survey</span>
            </div>
          </div>

          <div className="card border-0 shadow rounded-4 overflow-hidden bg-white">
            <div className="bg-primary p-3 text-white d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-white bg-opacity-20 rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <i className="bi bi-bar-chart-steps text-white fs-4"></i>
                </div>
                <div>
                  <h2 className="h5 fw-bold mb-0 text-uppercase tracking-wide" style={{ fontSize: '1.15rem' }}>Survey Questions Dimension</h2>
                  <p className="m-0 opacity-75" style={{ fontSize: '0.78rem' }}>Review all parameters listed below.</p>
                </div>
              </div>
            </div>

            <div className="card-body p-4 bg-light bg-opacity-10 d-flex flex-column gap-3">
              {/* Review Notification Alert Box */}
              <div className="border border-success-subtle bg-success-subtle bg-opacity-25 rounded-4 p-3 d-flex align-items-center gap-3">
                <i className="bi bi-check-square-fill text-success fs-2"></i>
                <div>
                  <h6 className="fw-bold text-success-emphasis m-0" style={{ fontSize: '0.9rem' }}>Review Your Answers</h6>
                  <p className="text-success m-0" style={{ fontSize: '0.75rem' }}>Please check everything before submitting.</p>
                </div>
              </div>

              {/* TECHNICAL ASSISTANCE SUMMARY PANEL */}
              <div className="card border rounded-4 bg-white">
                <div className="p-3 border-bottom bg-light bg-opacity-20 d-flex align-items-center gap-2">
                  <i className="bi bi-clipboard text-secondary"></i>
                  <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.85rem' }}>Technical Assistance Requested</h6>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center gap-2 text-dark small fw-semibold">
                    <span>{technicalAssistance.service}</span>
                    <i className="bi bi-chevron-down text-muted" style={{ fontSize: '0.7rem' }}></i>
                  </div>
                  <div className="d-flex align-items-center gap-1 text-muted mt-1 ps-3" style={{ fontSize: '0.8rem' }}>
                    <i className="bi bi-arrow-return-right small text-secondary"></i>
                    <span className="fst-italic">{technicalAssistance.details}</span>
                  </div>
                </div>
              </div>

              {/* CLIENT PROFILE SUMMARY TABLE */}
              <div className="card border rounded-4 bg-white">
                <div className="p-3 border-bottom bg-light bg-opacity-20 d-flex align-items-center gap-2">
                  <i className="bi bi-person text-primary"></i>
                  <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.85rem' }}>Client Profile</h6>
                </div>
                <div className="p-2 table-responsive">
                  <table className="table table-sm table-borderless m-0 align-middle" style={{ fontSize: '0.78rem' }}>
                    <tbody>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary w-35 py-2 ps-2">Name (Pangalan):</td><td className="text-dark py-2">{clientProfile.name}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Sex (Kasarian):</td><td className="text-dark py-2">{clientProfile.sex}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Select Categories (Check all that apply):</td><td className="text-dark py-2">{clientProfile.categories.join(', ')}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Birthday (Petsa ng Kapanganakan):</td><td className="text-dark py-2">{clientProfile.birthday}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Contact Number:</td><td className="text-dark py-2">{clientProfile.contactNumber}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Address (Tirahan):</td><td className="text-dark py-2">{clientProfile.address}</td></tr>
                      <tr><td className="fw-semibold text-secondary py-2 ps-2">Office/ Organization (Organisasyon):</td><td className="text-dark py-2">{clientProfile.office}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CITIZEN'S CHARTER SUMMARY TABLE */}
              <div className="card border rounded-4 bg-white">
                <div className="p-3 border-bottom bg-light bg-opacity-20 d-flex align-items-center gap-2">
                  <i className="bi bi-journal text-warning"></i>
                  <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.85rem' }}>Citizen's Charter</h6>
                </div>
                <div className="p-2 table-responsive">
                  <table className="table table-sm table-borderless m-0 align-middle" style={{ fontSize: '0.78rem' }}>
                    <tbody>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary w-35 py-2 ps-2">Date (Petsa):</td><td className="text-dark py-2">{citizensCharter.date}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Client Type:</td><td className="text-dark py-2">{citizensCharter.clientType}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Office Visited (Opisinang Pinuntahan):</td><td className="text-dark py-2">{citizensCharter.officeVisited}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">Service Accessed (Serbisyong Kinuha):</td><td className="text-dark py-2">{citizensCharter.serviceAccessed}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">CC1:</td><td className="text-dark py-2">{citizensCharter.cc1}</td></tr>
                      <tr className="border-bottom"><td className="fw-semibold text-secondary py-2 ps-2">CC2:</td><td className="text-dark py-2">{citizensCharter.cc2}</td></tr>
                      <tr><td className="fw-semibold text-secondary py-2 ps-2">CC3:</td><td className="text-dark py-2">{citizensCharter.cc3}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SURVEY MATRIX SUMMARY OUTPUT */}
              <div className="card border rounded-4 bg-white">
                <div className="p-3 border-bottom bg-light bg-opacity-20 d-flex align-items-center gap-2">
                  <i className="bi bi-bar-chart-line text-info"></i>
                  <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.85rem' }}>Survey Ratings</h6>
                </div>
                <div className="p-2 table-responsive">
                  <table className="table table-sm table-borderless m-0 align-middle" style={{ fontSize: '0.78rem' }}>
                    <tbody>
                      {questionsList.map((item) => {
                        const currentVal = ratings[item.id];
                        const matchedScale = ratingScales.find(s => s.value === currentVal);
                        return (
                          <tr className="border-bottom" key={item.id}>
                            <td className="fw-semibold text-secondary w-35 py-2 ps-2 d-flex align-items-center gap-2">
                              <span>{item.id}</span>
                            </td>
                            <td className="text-dark py-2">
                              {matchedScale ? (
                                <>
                                  <span className="me-2">{matchedScale.emoji}</span>
                                  {matchedScale.value} — {matchedScale.label}
                                </>
                              ) : (
                                <span className="text-danger fw-semibold">⚠️ Not answered</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td className="fw-semibold text-secondary py-2 ps-2">
                          <span>Comments</span>
                        </td>
                        <td className="text-dark py-2">{suggestions.trim() ? suggestions : 'None'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom Review Action Row control block */}
            <div className="card-footer p-3 bg-white border-top d-flex justify-content-between align-items-center px-4">
              <button onClick={() => setViewState('form')} className="btn btn-outline-secondary border shadow-sm px-4 py-1.5 rounded-2 fw-semibold" style={{ fontSize: '0.82rem' }}>
                <i className="bi bi-arrow-left"></i> Back
              </button>
              <div className="d-flex gap-2">
                <button onClick={() => setViewState('form')} className="btn btn-outline-primary border shadow-sm px-4 py-1.5 rounded-2 fw-semibold" style={{ fontSize: '0.82rem' }}>
                  <i className="bi bi-eye-slash"></i> Hide Review
                </button>
                <button onClick={() => setViewState('thanks')} className="btn btn-primary px-4 py-1.5 rounded-2 fw-semibold text-white d-flex align-items-center gap-1" style={{ fontSize: '0.82rem' }}>
                  Confirm & Submit <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }

  // --- RENDERING BLOCK 1: MAIN EVALUATION MATRIX GRID QUESTION VIEW ---
  return (
    <>
      <Navbar />

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

      <div className="container my-4 flex-grow-1" style={{ maxWidth: '960px' }}>
        
        {/* Sub-header document status bar metadata tag element */}
        <div className="d-flex justify-content-between align-items-center mb-3 text-muted small" style={{ fontSize: '0.7rem' }}>
          <div>
            <div>BFAR-F-01</div>
            <div>Rev. No. 05</div>
            <div>Effectivity Date: 08.03.23</div>
          </div>
          <div className="bg-white px-2 py-1 rounded-pill d-inline-flex gap-1 border shadow-sm align-items-center">
            <span className="text-muted opacity-50 px-2">1 Assistance</span>
            <span className="text-muted opacity-50 px-2">2 Profile</span>
            <span className="text-muted opacity-50 px-2">3 Charter</span>
            <span className="badge bg-primary px-3 py-1.5 rounded-pill fw-semibold">4 Survey</span>
          </div>
        </div>

        {/* WORK CARD FRAME */}
        <div className="card border-0 shadow rounded-4 overflow-hidden bg-white">
          <div className="bg-primary p-3 text-white d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-emoji-smile-fill text-white fs-4"></i>
              </div>
              <div>
                <h2 className="h5 fw-bold mb-0 text-uppercase tracking-wide" style={{ fontSize: '1.15rem' }}>Survey Questions Dimension</h2>
                <p className="m-0 opacity-75" style={{ fontSize: '0.78rem' }}>Tap the emoji that matches your experience.</p>
              </div>
            </div>
            <button onClick={() => handleListen("Survey Questions Dimension. Tap the emoji that matches your experience.")} className="btn btn-outline-light btn-sm rounded-pill px-3" style={{ fontSize: '0.8rem' }}>
              <i className="bi bi-volume-up"></i> Listen
            </button>
          </div>

          <div className="card-body p-4 bg-light bg-opacity-20 d-flex flex-column gap-3">
            {questionsList.map((q) => (
              <div key={q.id} className="p-3 border rounded-4 bg-white shadow-xs">
                <div className="d-flex justify-content-between align-items-start mb-3 gap-2">
                  <div>
                    <span className="badge bg-primary bg-opacity-10 text-primary rounded px-2 py-0.5 fw-bold font-monospace mb-1" style={{ fontSize: '0.65rem' }}>
                      {q.id}
                    </span>
                    <h6 className="fw-bold text-dark m-0" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{q.text}</h6>
                  </div>
                  <button onClick={() => handleListen(`${q.id}. ${q.text}`)} className="btn btn-outline-secondary btn-sm rounded-pill px-2 py-0.5 d-flex align-items-center gap-1 flex-shrink-0" style={{ fontSize: '0.68rem' }}>
                    <i className="bi bi-volume-up"></i> Listen
                  </button>
                </div>

                <div className="row row-cols-3 row-cols-md-6 g-2">
                  {ratingScales.map((scale) => {
                    const isCurrent = ratings[q.id] === scale.value;
                    return (
                      <div className="col" key={scale.value}>
                        <div 
                          onClick={() => handleSelectRating(q.id, scale.value)}
                          className={`card p-2 text-center border rounded-3 h-100 cursor-pointer ${
                            isCurrent ? 'border-warning bg-warning bg-opacity-10 shadow-xs' : 'bg-light bg-opacity-50'
                          }`}
                          style={{ cursor: 'pointer', transition: 'all 0.15s' }}
                        >
                          <span className="fs-3 mb-1 d-block">{scale.emoji}</span>
                          <span className="d-block text-dark fw-bold font-monospace" style={{ fontSize: '0.75rem' }}>{scale.value}</span>
                          <span className="text-muted d-block" style={{ fontSize: '0.6rem' }}>{scale.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* FEEDBACK SUGGESTIONS FORM CARD CONTAINER */}
            <div className="p-3 border rounded-4 bg-white border-secondary-subtle">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-dark m-0" style={{ fontSize: '0.8rem' }}>
                  <i className="bi bi-chat-left-text text-warning me-1"></i> Suggestion/s or comment/s on how we can further improve our services:
                </label>
                <button onClick={() => handleListen("Type your suggestions or comments.")} className="btn btn-link text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}>
                  <i className="bi bi-volume-up"></i> Listen
                </button>
              </div>
              
              <div className="border rounded-3 p-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center gap-2 mb-1 px-1 text-muted" style={{ fontSize: '0.65rem' }}>
                  <i className="bi bi-keyboard"></i> or type below
                </div>
                <textarea 
                  className="form-control bg-white text-dark border-0 shadow-none p-1" 
                  rows="3" 
                  placeholder="Tap here to type your suggestions..."
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
                  style={{ fontSize: '0.82rem' }}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="card-footer p-3 bg-white border-top d-flex justify-content-between align-items-center px-4">
            <Link href="/terminal_public/03charter" className="btn btn-outline-secondary border shadow-sm px-4 py-1.5 rounded-2 fw-semibold" style={{ fontSize: '0.82rem' }}>
              <i className="bi bi-arrow-left"></i> Back
            </Link>
            <div className="d-flex gap-2">
              <button onClick={() => setViewState('review')} className="btn btn-outline-primary border shadow-sm px-4 py-1.5 rounded-2 fw-semibold" style={{ fontSize: '0.82rem' }}>
                <i className="bi bi-eye"></i> Preview Answers
              </button>
              <button onClick={() => setViewState('review')} className="btn btn-primary px-4 py-1.5 rounded-2 fw-semibold text-white d-flex align-items-center gap-1" style={{ fontSize: '0.82rem' }}>
                Confirm & Submit <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}