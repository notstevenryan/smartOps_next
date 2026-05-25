// app/00arta-steps/page.js
'use client';

import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

export default function ArtaStepsPage() {
  // Static array matching the ARTA & Citizen's Charter directives shown in the UI images
  const artaSteps = [
    { id: 1,  text: "Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Free" },
    { id: 2,  text: "Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Payment" },
    { id: 3,  text: "Processing of Request for Technical Assistance, Distribution of Information, Education and Communication (IEC) Materials" },
    { id: 4,  text: "Processing of Request for Training Request by Clients" },
    { id: 5,  text: "Processing of Request for Technical Assistance for FishFarmer's Seminar" },
    { id: 6,  text: "Processing of Request for Technical Assistance for on-Site Visit/Inspection" },
    { id: 7,  text: "Processing of Request for Technical Assistance for Inquiries (Through Email and Walk-in)" },
    { id: 8,  text: "Processing of Request for Technical Assistance for Inquiries (Through SMS, Phone call and Facebook Messenger)" },
    { id: 9,  text: "Processing of Request for Accommodation at BFAR-NIFTC Dormitory" },
    { id: 10, text: "Technical Assistance (On-the-Job-Training)" },
  ];

  // Simulated Text-to-Speech handler for the "Listen" accessibility feature
  const handleListen = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser layout.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="container my-5 flex-grow-1">
        {/* Main Card Wrapper representing the UI Modal Window container */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-body-tertiary">
          
          {/* Header Block matching the blue overlay top card layout */}
          <div className="bg-primary bg-gradient p-4 p-md-5 text-white position-relative">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <span className="badge bg-white bg-opacity-20 text-white rounded-pill mb-2 px-3 py-1 small fw-bold text-uppercase tracking-wider">
                  <i className="bi bi-shield-check me-1"></i> ARTA - RA 11032 Compliance
                </span>
                <h1 className="h3 fw-bold m-0 tracking-tight">ARTA Steps & Citizen's Charter</h1>
                <p className="small opacity-75 mt-2 mb-0 max-w-xl">
                  These are the official operational processing steps required by the Anti-Red Tape Authority (ARTA) for our primary public fisheries services. You may view or listen to them anytime.
                </p>
              </div>
              
              {/* Top corner cancel/back navigation shortcut */}
              <Link href="/terminal_public" className="btn btn-close btn-close-white bg-opacity-20 p-2 rounded-circle shadow-sm" aria-label="Close and return home"></Link>
            </div>
          </div>

          {/* Body Content containing the scrollable list layer */}
          <div className="card-body p-3 p-md-4 bg-body">
            <div className="d-flex flex-column gap-3 max-vh-60 overflow-y-auto px-1 py-2" style={{ maxHeight: '550px' }}>
              
              {artaSteps.map((step) => (
                <div 
                  key={step.id} 
                  className="card border border-body-secondary bg-body-tertiary shadow-sm rounded-3 transition-hover py-2 px-3"
                >
                  <div className="card-body p-2 d-flex align-items-center justify-content-between gap-3 flex-wrap flex-sm-nowrap">
                    
                    {/* Left Segment: Numeric Bullet ID and Action Step Text Description */}
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="rounded-3 bg-primary bg-opacity-10 text-primary fw-bold d-flex align-items-center justify-content-center flex-shrink-0 shadow-xs" 
                        style={{ width: '44px', height: '44px', fontSize: '1.15rem' }}
                      >
                        {step.id}
                      </div>
                      <span className="fw-semibold text-body-emphasis small lh-base">
                        {step.text}
                      </span>
                    </div>

                    {/* Right Segment: Audio Accessibility Controls and Link Trigger */}
                    <div className="d-flex align-items-center gap-2 ms-auto ms-sm-0 flex-shrink-0">
                      {/* Interactive text-to-speech button replicating the standard kiosk sound triggers */}
                      <button 
                        onClick={() => handleListen(step.text)}
                        className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center gap-1 border-opacity-50"
                        title="Read this service step aloud"
                      >
                        <i className="bi bi-volume-up-fill text-primary"></i>
                        <span className="fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Listen</span>
                      </button>

                      {/* Direction arrow link to access step information processing details */}
                      <Link 
                        href={`/00arta-steps/${step.id}`}
                        className="btn btn-light border btn-sm rounded-circle d-flex align-items-center justify-content-center bg-body shadow-xs"
                        style={{ width: '34px', height: '34px' }}
                      >
                        <i className="bi bi-arrow-right text-primary fw-bold"></i>
                      </Link>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Footer controls providing safe landing escape points */}
          <div className="card-footer p-3 bg-body-tertiary border-top d-flex justify-content-end gap-2">
            <Link href="/terminal_public/" className="btn btn-primary bg-gradient px-4 py-2 rounded-3 fw-bold btn-sm shadow-sm">
              Close
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}