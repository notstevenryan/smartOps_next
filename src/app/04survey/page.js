// app/survey/page.js
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function SurveyQuestionnairePage() {
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

  // Structured Survey Schema tracking images d91449.png and d914a4.png
  const questionsList = [
    { id: 'SQD0', dimension: 'Satisfaction', text: 'I am satisfied with the service/s that I availed in the Bureau.' },
    { id: 'SQD1', dimension: 'Responsiveness', text: 'I spent a reasonable amount of time for my transaction/s.' },
    { id: 'SQD2', dimension: 'Reliability', text: 'The office/s followed the transaction\'s requirements and steps based on the information provided.' },
    { id: 'SQD3', dimension: 'Access and Facilities', text: 'The transaction/s was conducted in an easily accessible and comfortable environment.' },
    { id: 'SQD4', dimension: 'Communication', text: 'I easily found information about my transaction/s from the office or other platforms.' },
    { id: 'SQD5', dimension: 'Costs', text: 'I paid a reasonable amount of fees for my transaction/s.' },
    { id: 'SQD6', dimension: 'Integrity', text: 'I feel the office was fair to everyone, or "walang palakasan", during my transaction/s.' },
    { id: 'SQD7', dimension: 'Assurance', text: 'The BFAR staff I transacted with was courteous, approachable, and well-informed.' },
    { id: 'SQD8', dimension: 'Outcome', text: 'I got what I needed from the Bureau, or (if denied) denial of request/s was sufficiently explained to me.' }
  ];

  const ratingScales = [
    { value: '1', label: 'Very Bad', emoji: '😡' },
    { value: '2', label: 'Bad', emoji: '😟' },
    { value: '3', label: 'Okay', emoji: '😐' },
    { value: '4', label: 'Good', emoji: '🙂' },
    { value: '5', label: 'Very Good', emoji: '😁' },
    { value: 'N/A', label: 'N/A', emoji: '🤷' }
  ];

  const handleSelectRating = (qId, val) => {
    setRatings({ ...ratings, [qId]: val });
  };

  const handleListen = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  };

  // --- RENDERING CONFIGURATION 3: THANK YOU SCREEN ---
  if (viewState === 'thanks') {
    return (
      <>
        <Navbar />
        <div className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="card border-0 shadow-lg rounded-4 p-5 text-center bg-body-tertiary border" style={{ maxWidth: '650px' }}>
            <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
              <i className="bi bi-check-lg display-4 fw-bold"></i>
            </div>
            <h1 className="fw-black text-body-emphasis mb-3 display-5">Thank You!</h1>
            <p className="text-muted fs-5 px-3 mb-4" style={{ lineHeight: '1.6' }}>
              Your feedback and request have been successfully recorded. Please proceed to the attending technician.
            </p>
            <Link href="/" className="btn btn-primary px-5 py-3 rounded-pill fw-bold bg-gradient shadow">
              Finish & Return Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  // --- RENDERING CONFIGURATION 2: PREVIEW ANSWERS ---
  if (viewState === 'review') {
    return (
      <>
        <Navbar />
        <div className="container my-4 flex-grow-1">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-body">
            
            <div className="bg-success p-4 text-white d-flex justify-content-between align-items-center bg-gradient">
              <div>
                <h2 className="h4 fw-bold mb-1 d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check"></i> Review Your Answers
                </h2>
                <p className="m-0 small opacity-95">Please check everything before submitting your final kiosk evaluation entries.</p>
              </div>
            </div>

            <div className="card-body p-4 d-flex flex-column gap-3">
              <div className="alert alert-success bg-success bg-opacity-10 text-success-emphasis border border-success border-opacity-25 rounded-3 d-flex align-items-center gap-2 small py-2">
                <i className="bi bi-check-circle-fill"></i> Review mode active. Double-check your emoji metrics.
              </div>

              {/* Dynamic Survey Summary Block */}
              <div className="border rounded-3 p-3 bg-body-tertiary">
                <h6 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2 border-bottom pb-2">
                  <i className="bi bi-bar-chart-line-fill"></i> Survey Ratings Metrics
                </h6>
                <div className="d-flex flex-column gap-2">
                  {questionsList.map((q) => {
                    const currentVal = ratings[q.id];
                    const matchedScale = ratingScales.find(s => s.value === currentVal);
                    return (
                      <div key={q.id} className="d-flex justify-content-between align-items-center border-bottom border-body-secondary pb-2 small">
                        <span className="text-muted fw-medium me-3 text-truncate" style={{ maxWidth: '75%' }}>
                          <strong>{q.id}:</strong> {q.text}
                        </span>
                        <span className="badge bg-body border text-body-emphasis px-3 py-2 rounded-pill shadow-xs shrink-0 font-monospace">
                          {matchedScale ? `${matchedScale.emoji} ${matchedScale.value} — ${matchedScale.label}` : '⚠️ Not answered'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Custom Suggestions Section Block */}
              <div className="border rounded-3 p-3 bg-body-tertiary">
                <h6 className="fw-bold text-primary mb-2 small"><i className="bi bi-chat-left-text me-1"></i> Suggestions or Comments:</h6>
                <p className="m-0 text-body-emphasis font-monospace bg-body p-3 rounded border small bg-opacity-50 text-wrap">
                  {suggestions.trim() ? suggestions : <em className="text-muted">"No specific operational custom remarks provided."</em>}
                </p>
              </div>
            </div>

            <div className="card-footer p-3 bg-body-tertiary border-top d-flex justify-content-between px-4">
              <button onClick={() => setViewState('form')} className="btn btn-outline-secondary btn-sm px-4 py-2 rounded-pill fw-bold">
                <i className="bi bi-eye-slash me-1"></i> Hide Review
              </button>
              <button onClick={() => setViewState('thanks')} className="btn btn-success btn-sm px-4 py-2 rounded-pill fw-bold bg-gradient">
                Confirm & Submit <i className="bi bi-send ms-1"></i>
              </button>
            </div>

          </div>
        </div>
      </>
    );
  }

  // --- RENDERING CONFIGURATION 1: MAIN EVALUATION FORM ---
  return (
    <>
      <Navbar />
      <div className="container my-4 flex-grow-1">

        {/* --- STEP PROGRESS --- */}
        <div className="d-flex justify-content-center mb-4">
          <div className="bg-body-secondary p-2 rounded-pill d-inline-flex gap-2 border shadow-sm fs-7">
            <span className="text-muted px-2 py-1"><i className="bi bi-check-circle-fill text-success me-1"></i> Assistance</span>
            <span className="text-muted px-2 py-1"><i className="bi bi-check-circle-fill text-success me-1"></i> Profile</span>
            <span className="text-muted px-2 py-1"><i className="bi bi-check-circle-fill text-success me-1"></i> Charter</span>
            <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold"><i className="bi bi-4-circle me-1"></i> Survey</span>
          </div>
        </div>

        {/* --- QUESTIONNAIRE WORK AREA PANEL --- */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-body">
          <div className="bg-primary p-4 text-white d-flex justify-content-between align-items-center bg-gradient">
            <div>
              <h2 className="h4 fw-bold mb-1 d-flex align-items-center gap-2">
                <i className="bi bi-emoji-smile-fill"></i> Survey Questions Dimension
              </h2>
              <p className="m-0 small opacity-75">Tap the emoji that matches your experience across each evaluation group block.</p>
            </div>
            <button onClick={() => handleListen("Survey Questions Dimension. Tap the emoji that matches your experience.")} className="btn btn-light btn-sm rounded-pill px-3 fw-bold text-primary shadow-sm">
              <i className="bi bi-volume-up-fill me-1"></i> Listen
            </button>
          </div>

          <div className="card-body p-4 d-flex flex-column gap-4">
            
            {/* Dynamic Iteration of the 9 Dimensions Panels */}
            {questionsList.map((q) => (
              <div key={q.id} className="p-3 border rounded-3 bg-body-tertiary shadow-xs">
                <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                  <div>
                    <span className="badge bg-primary bg-opacity-10 text-primary rounded px-2 py-1 font-monospace fw-bold mb-1" style={{ fontSize: '0.65rem' }}>
                      {q.id} — {q.dimension}
                    </span>
                    <h6 className="fw-bold text-body-emphasis m-0 small-title leading-snug">{q.text}</h6>
                  </div>
                  <button onClick={() => handleListen(`${q.id}. ${q.text}`)} className="btn btn-link btn-xs text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}>
                    <i className="bi bi-volume-up me-1"></i> Listen
                  </button>
                </div>

                {/* Horizontal Scale Rows */}
                <div className="row row-cols-3 row-cols-md-6 g-2">
                  {ratingScales.map((scale) => {
                    const isCurrent = ratings[q.id] === scale.value;
                    return (
                      <div className="col" key={scale.value}>
                        <div 
                          onClick={() => handleSelectRating(q.id, scale.value)}
                          className={`card p-2 text-center border h-100 cursor-pointer transition-all ${
                            isCurrent ? 'border-warning bg-warning bg-opacity-10 shadow-xs' : 'bg-body'
                          }`}
                          style={{ cursor: 'pointer', transition: 'all 0.15s' }}
                        >
                          <span className="fs-4 mb-1 d-block">{scale.emoji}</span>
                          <span className="d-block text-body-emphasis fw-bold font-monospace mb-1" style={{ fontSize: '0.75rem' }}>{scale.value}</span>
                          <span className="text-muted d-block" style={{ fontSize: '0.6rem' }}>{scale.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Suggestions Text Area Form block */}
            <div className="p-3 border rounded-3 bg-warning bg-opacity-5 border-warning border-opacity-20">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0">
                  <i className="bi bi-chat-right-heart text-warning me-1"></i> Suggestion/s or comment/s on how we can further improve our services:
                </label>
                <button onClick={() => handleListen("Type your suggestions or comments inside the text area block.")} className="btn btn-link btn-xs text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}>
                  <i className="bi bi-volume-up"></i> Listen
                </button>
              </div>
              <textarea 
                className="form-control bg-body text-body" 
                rows="3" 
                placeholder="Tap here to type your suggestions..."
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
              ></textarea>
            </div>

          </div>

          {/* Core Command Form Footer Block */}
          <div className="card-footer p-3 bg-body-tertiary border-top d-flex justify-content-between px-4">
            <Link href="/03charter" className="btn btn-outline-secondary btn-sm px-4 py-2 rounded-pill fw-bold">
              <i className="bi bi-arrow-left me-1"></i> Back
            </Link>
            <div className="d-flex gap-2">
              <button onClick={() => setViewState('review')} className="btn btn-outline-primary btn-sm px-4 py-2 rounded-pill fw-bold">
                <i className="bi bi-eye me-1"></i> Preview Answers
              </button>
              <button onClick={() => setViewState('thanks')} className="btn btn-primary btn-sm px-4 py-2 rounded-pill fw-bold bg-gradient">
                Confirm & Submit <i className="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}