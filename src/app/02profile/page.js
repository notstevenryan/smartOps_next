// app/profile/page.js
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function ClientProfilePage() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    categories: [],
    birthday: '',
    contactNumber: '',
    barangay: '',
    municipality: '',
    province: '',
    organization: ''
  });

  const availableCategories = [
    { id: 'youth', label: 'Youth (15-30 yrs old)', icon: 'bi-person-arms-up' },
    { id: 'senior', label: 'Senior Citizen (60+ yrs old)', icon: 'bi-person-heart' },
    { id: 'pwd', label: 'PWD (May Kapansanan)', icon: 'bi-person-wheelchair' },
    { id: 'pregnant', label: 'Pregnant (Buntis)', icon: 'bi-gender-female' },
    { id: 'solo', label: 'Solo Parent', icon: 'bi-people-fill' },
    { id: 'fisherfolk', label: 'Fisherfolk/Mangingisda', icon: 'bi-water' },
    { id: 'group', label: 'Group', icon: 'bi-building-fill' },
    { id: 'others', label: 'Others (Please specify)', icon: 'bi-question-circle' }
  ];

  const handleSelectSex = (selectedSex) => {
    setFormData({ ...formData, sex: selectedSex });
  };

  const handleToggleCategory = (catId) => {
    const updated = formData.categories.includes(catId)
      ? formData.categories.filter(id => id !== catId)
      : [...formData.categories, catId];
    setFormData({ ...formData, categories: updated });
  };

  const handleListen = (text, e) => {
    e?.stopPropagation();
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
            <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold"><i className="bi bi-2-circle me-1"></i> Profile</span>
            <span className="text-muted px-2 py-1">3. Charter</span>
            <span className="text-muted px-2 py-1">4. Survey</span>
          </div>
        </div>

        {/* --- MAIN MAIN CARD CARD --- */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-body">
          <div className="bg-primary p-4 text-white d-flex justify-content-between align-items-center bg-gradient">
            <div>
              <h2 className="h4 fw-bold mb-1 d-flex align-items-center gap-2">
                <i className="bi bi-person-vcard"></i> CLIENT PROFILE
              </h2>
              <p className="m-0 small opacity-75">Fill in your details. You can press the speaker to listen to the speech-to-text translation.</p>
            </div>
            <button onClick={() => handleListen("Client Profile. Fill in your details.", null)} className="btn btn-light btn-sm rounded-pill px-3 fw-bold text-primary shadow-sm">
              <i className="bi bi-volume-up-fill me-1"></i> Listen
            </button>
          </div>

          <div className="card-body p-4 d-flex flex-column gap-4">
            
            {/* 1. Name */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-pencil-square me-1 text-primary"></i> Name (Pangalan):</label>
                <button onClick={() => handleListen("Name, Pangalan", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <input 
                type="text" 
                className="form-control bg-body-tertiary" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* 2. Sex */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-gender-ambiguous me-1 text-primary"></i> Sex (Kasarian):</label>
                <button onClick={() => handleListen("Sex, Kasarian", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-3">
                <div className="col-6">
                  <div 
                    onClick={() => handleSelectSex('Male')}
                    className={`card p-3 text-center border rounded-3 cursor-pointer transition-all ${formData.sex === 'Male' ? 'border-primary bg-primary bg-opacity-10 shadow-sm' : 'bg-body-tertiary'}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="fs-3 mb-1 d-block">👨</span>
                    <span className="fw-bold text-body-emphasis small">Male (Lalaki)</span>
                  </div>
                </div>
                <div className="col-6">
                  <div 
                    onClick={() => handleSelectSex('Female')}
                    className={`card p-3 text-center border rounded-3 cursor-pointer transition-all ${formData.sex === 'Female' ? 'border-primary bg-primary bg-opacity-10 shadow-sm' : 'bg-body-tertiary'}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="fs-3 mb-1 d-block">👩</span>
                    <span className="fw-bold text-body-emphasis small">Female (Babae)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Categories Check Boxes */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-tags me-1 text-primary"></i> Select Categories (Check all that apply):</label>
                <button onClick={() => handleListen("Select Categories. Check all that apply.", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                {availableCategories.map((cat) => {
                  const hasCat = formData.categories.includes(cat.id);
                  return (
                    <div className="col-6 col-md-3" key={cat.id}>
                      <div 
                        onClick={() => handleToggleCategory(cat.id)}
                        className={`card p-2 text-center h-100 border rounded-3 cursor-pointer transition-all ${hasCat ? 'border-primary bg-primary bg-opacity-10' : 'bg-body-tertiary'}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className={`bi ${cat.icon} text-primary mb-1 fs-5`}></i>
                        <div className="text-body-emphasis fw-semibold" style={{ fontSize: '0.7rem' }}>{cat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Birthday & Contact Row */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-calendar-event me-1 text-primary"></i> Birthday (Petsa ng Kapanganakan):</label>
                  <button onClick={() => handleListen("Birthday", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
                </div>
                <input 
                  type="date" 
                  className="form-control bg-body-tertiary text-body" 
                  value={formData.birthday}
                  onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-telephone me-1 text-primary"></i> Contact Number:</label>
                  <button onClick={() => handleListen("Contact Number", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
                </div>
                <input 
                  type="text" 
                  className="form-control bg-body-tertiary" 
                  placeholder="09XX XXX XXXX"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                />
              </div>
            </div>

            {/* 5. Address Breakdowns */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-geo-alt me-1 text-primary"></i> Address (Tirahan):</label>
                <button onClick={() => handleListen("Address, Tirahan", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <div className="row g-2">
                <div className="col-md-4">
                  <input type="text" className="form-control bg-body-tertiary mb-1" placeholder="Barangay" value={formData.barangay} onChange={(e) => setFormData({...formData, barangay: e.target.value})} />
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control bg-body-tertiary mb-1" placeholder="Municipality (Munisipyo)" value={formData.municipality} onChange={(e) => setFormData({...formData, municipality: e.target.value})} />
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control bg-body-tertiary mb-1" placeholder="Province (Probinsya)" value={formData.province} onChange={(e) => setFormData({...formData, province: e.target.value})} />
                </div>
              </div>
            </div>

            {/* 6. Office Organization */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold text-body-emphasis m-0"><i className="bi bi-building me-1 text-primary"></i> Office/ Organization (Organisasyon):</label>
                <button onClick={() => handleListen("Office or Organization", null)} className="btn btn-link btn-sm text-muted p-0 text-decoration-none" style={{ fontSize: '0.75rem' }}><i className="bi bi-volume-up"></i> Listen</button>
              </div>
              <input 
                type="text" 
                className="form-control bg-body-tertiary" 
                placeholder="Enter company, school or cooperative group" 
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
              />
            </div>

          </div>

          {/* Action Row Footer */}
          <div className="card-footer p-3 bg-body-tertiary border-top d-flex justify-content-between px-4">
            <Link href="/services" className="btn btn-outline-secondary btn-sm px-4 py-2 rounded-pill fw-bold">
              <i className="bi bi-arrow-left me-1"></i> Back
            </Link>
            <Link href="/03charter" className="btn btn-primary btn-sm px-4 py-2 rounded-pill fw-bold bg-gradient">
              Continue <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}