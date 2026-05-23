// app/charter/page.js
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function CitizensCharterPage() {
  const [survey, setSurvey] = useState({
    date: '',
    clientType: '',
    officeVisited: '',
    clientClassification: '',
    serviceAccessed: '',
    awarenessRating: '',
    visibilityRating: '',
    helpfulnessRating: ''
  });

  const handleListen = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-4 flex-grow-1">

        {/* --- STEP PROGRESS --- */}
        <div className="d-flex justify-content-center mb-4">
          <div className="bg-body-secondary p-2 rounded-pill d-inline-flex gap-2 border shadow-sm fs-7">
            <span className="text-muted px-2 py-1"><i className="bi bi-check-circle-fill text-success me-1"></i> Assistance</span>
            <span className="text-muted px-2 py-1"><i className="bi bi-check-circle-fill text-success me-1"></i> Profile</span>
            <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold"><i className="bi bi-3-circle me-1"></i> Charter</span>
            <span className="text-muted px-2 py-1">4. Survey</span>
          </div>
        </div>

        {/* --- ARTA CITIZEN CHARTER MAIN CONTAINER --- */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-body">
          <div className="bg-primary p-4 text-white d-flex justify-content-between align-items-center bg-gradient">
            <div>
              <h2 className="h4 fw-bold mb-1 d-flex align-items-center gap-2">
                <i className="bi bi-journal-check"></i> Citizen's Charter (CC)
              </h2>
              <p className="m-0 small opacity-75">Acknowledge and evaluate the Citizen's Charter framework visibility parameters.</p>
            </div>
            <button onClick={() => handleListen("Citizen's Charter Survey questionnaire details")} className="btn btn-light btn-sm rounded-pill px-3 fw-bold text-primary shadow-sm">
              <i className="bi bi-volume-up-fill me-1"></i> Listen
            </button>
          </div>

          <div className="card-body p-4 d-flex flex-column gap-4">
            
            {/* 1. Date */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-calendar3 me-1 text-primary"></i> Date (Petsa):</label>
                <button onClick={() => handleListen("Date, Petsa")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <input type="date" className="form-control bg-body-tertiary text-body" value={survey.date} onChange={(e) => setSurvey({...survey, date: e.target.value})} />
            </div>

            {/* 2. Client Type */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-person-gear me-1 text-primary"></i> Client Type:</label>
                <button onClick={() => handleListen("Client Type")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                {['Citizen', 'Business', 'Government'].map((type, idx) => {
                  const icons = ['👱', '🏢', '🏛️'];
                  return (
                    <div className="col-4" key={type}>
                      <div 
                        onClick={() => setSurvey({...survey, clientType: type})}
                        className={`card p-2 text-center border rounded-3 cursor-pointer ${survey.clientType === type ? 'border-primary bg-primary bg-opacity-10' : 'bg-body-tertiary'}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="fs-4 mb-1">{icons[idx]}</span>
                        <div className="small fw-bold text-body-emphasis">{type}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Office Visited */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-building-check me-1 text-primary"></i> Office Visited (Opisinang Pinuntahan):</label>
                <button onClick={() => handleListen("Office Visited")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <input type="text" className="form-control bg-body-tertiary" placeholder="Enter office visited (e.g., NIFTC Tanay)" value={survey.officeVisited} onChange={(e) => setSurvey({...survey, officeVisited: e.target.value})} />
            </div>

            {/* 4. Classification */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-question-lg me-1 text-primary"></i> Are you (Ikaw ay?):</label>
                <button onClick={() => handleListen("Are you an internal or external client")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                {[
                  { id: 'Internal', label: 'Internal Client', icon: 'bi-arrow-down-square' },
                  { id: 'External', label: 'External Client', icon: 'bi-arrow-up-square' }
                ].map((item) => (
                  <div className="col-6" key={item.id}>
                    <div 
                      onClick={() => setSurvey({...survey, clientClassification: item.id})}
                      className={`card p-3 text-center border rounded-3 cursor-pointer ${survey.clientClassification === item.id ? 'border-primary bg-primary bg-opacity-10' : 'bg-body-tertiary'}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className={`bi ${item.icon} text-primary fs-4 mb-1`}></i>
                      <div className="small fw-bold text-body-emphasis">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Service Accessed */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-clipboard-check me-1 text-primary"></i> Service Accessed (Serbisyong Kinuha):</label>
                <button onClick={() => handleListen("Service Accessed")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <input type="text" className="form-control bg-body-tertiary" placeholder="Enter service accessed..." value={survey.serviceAccessed} onChange={(e) => setSurvey({...survey, serviceAccessed: e.target.value})} />
            </div>

            {/* 6. CC Awareness Matrix */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-eye me-1 text-primary"></i> Which of the following best describes your awareness of a CC?</label>
                <button onClick={() => handleListen("Describe your awareness of citizen charter")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                {[
                  { val: '1', txt: 'I know what a CC is and saw this office\'s CC.', icon: '✅' },
                  { val: '2', txt: 'I know what a CC is but did NOT see this office\'s CC.', icon: '👀' },
                  { val: '3', txt: 'I learned of the CC only when I saw this office\'s CC.', icon: '💡' },
                  { val: '4', txt: 'I do not know what a CC is and I did not see one.', icon: '❓' }
                ].map((o) => (
                  <div className="col-6 col-md-3" key={o.val}>
                    <div 
                      onClick={() => setSurvey({...survey, awarenessRating: o.val})}
                      className={`card p-2 text-center h-100 border rounded-3 cursor-pointer ${survey.awarenessRating === o.val ? 'border-success bg-success bg-opacity-10' : 'bg-body-tertiary'}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="fs-5 mb-1">{o.icon}</div>
                      <div className="text-body-emphasis px-1" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>{o.txt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. CC Visibility Layer */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-emoji-smile me-1 text-primary"></i> If aware of CC, would you say that the CC of this office was...?</label>
                <button onClick={() => handleListen("Rate visibility setup")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                {[
                  { val: 'easy', txt: 'Easy to see', emo: '😄' },
                  { val: 'somewhat', txt: 'Somewhat easy', emo: '🙂' },
                  { val: 'difficult', txt: 'Difficult to see', emo: '😕' },
                  { val: 'invisible', txt: 'Not visible at all', emo: '🙈' },
                  { val: 'na', txt: 'N/A', emo: '➖' }
                ].map((v) => (
                  <div className="col" key={v.val}>
                    <div 
                      onClick={() => setSurvey({...survey, visibilityRating: v.val})}
                      className={`card p-2 text-center h-100 border rounded-3 cursor-pointer ${survey.visibilityRating === v.val ? 'border-primary bg-primary bg-opacity-10' : 'bg-body-tertiary'}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="fs-5 mb-1">{v.emo}</div>
                      <div className="text-body-emphasis fw-semibold" style={{ fontSize: '0.6rem' }}>{v.txt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. CC Helpfulness */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-hand-thumbs-up me-1 text-primary"></i> If aware of CC, how much did the CC help you in your transaction?</label>
                <button onClick={() => handleListen("Did the citizen charter help your transaction")} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                {[
                  { val: 'much', txt: 'Helped very much', emo: '🌟' },
                  { val: 'somewhat', txt: 'Somewhat helped', emo: '👍' },
                  { val: 'not', txt: 'Did not help', emo: '👎' },
                  { val: 'na', txt: 'N/A', emo: '➖' }
                ].map((h) => (
                  <div className="col-3" key={h.val}>
                    <div 
                      onClick={() => setSurvey({...survey, helpfulnessRating: h.val})}
                      className={`card p-2 text-center h-100 border rounded-3 cursor-pointer ${survey.helpfulnessRating === h.val ? 'border-primary bg-primary bg-opacity-10 shadow-xs' : 'bg-body-tertiary'}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="fs-5 mb-1">{h.emo}</div>
                      <div className="text-body-emphasis fw-semibold" style={{ fontSize: '0.65rem' }}>{h.txt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Navigation Action Buttons footer bar */}
          <div className="card-footer p-3 bg-body-tertiary border-top d-flex justify-content-between px-4">
            <Link href="/02profile" className="btn btn-outline-secondary btn-sm px-4 py-2 rounded-pill fw-bold">
              <i className="bi bi-arrow-left me-1"></i> Back
            </Link>
            <Link href="/04survey" className="btn btn-primary btn-sm px-4 py-2 rounded-pill fw-bold bg-gradient">
              Submit Form <i className="bi bi-send ms-1"></i>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}