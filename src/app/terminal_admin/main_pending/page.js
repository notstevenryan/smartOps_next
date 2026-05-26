'use client';

import { useState } from 'react';

const INITIAL_QUEUE = [
  {
    id: 'NIFTC-FSF-25-001', date: 'May 19, 2025', applicant: 'Steven Lorilla',
    serviceType: 'Fish Seed (Free)', status: 'PENDING',
    profile: {
      name: 'Steven Lorilla', sex: 'Male (Lalaki)', category: 'Youth 18-30 yrs old',
      birthday: '2002-12-25', contact: '09090909090',
      address: 'sample, sample, sample', office: 'sample',
    },
    charter: {
      date: '2026-05-23', clientType: 'Citizen', officeVisited: 'NIFTC Tanay',
      serviceAccessed: 'free fish seed',
      cc: ['I know what a CC is and I saw this office\'s CC', 'Somewhat easy to see', 'Helped very much'],
    },
    survey: {
      SQD0: { score: 4, label: 'Good' },
      SQD1: { score: 5, label: 'Very Good' },
      SQD2: { score: 4, label: 'Good' },
      SQD3: { score: null, label: 'N/A' },
      SQD4: { score: 5, label: 'Very Good' },
      SQD5: { score: 4, label: 'Good' },
      SQD6: { score: null, label: 'N/A' },
      SQD7: { score: 5, label: 'Very Good' },
      SQD8: { score: 4, label: 'Good' },
      remarks: 'lorem ipsum',
    },
  },
  {
    id: 'NIFTC-FSP-25-001', date: 'May 18, 2025', applicant: 'Hannah Felonia',
    serviceType: 'Fish Seed (Payment)', status: 'PENDING',
    profile: { name: 'Hannah Felonia', sex: 'Female (Babae)', category: 'Farmer', birthday: '1990-03-10', contact: '09171234567', address: 'Tanay, Rizal', office: 'BFAR' },
    charter: { date: '2026-05-22', clientType: 'Citizen', officeVisited: 'NIFTC Tanay', serviceAccessed: 'paid fish seed', cc: ['Aware of CC', 'Easy to access', 'Very helpful'] },
    survey: { SQD0: { score: 5, label: 'Very Good' }, SQD1: { score: 5, label: 'Very Good' }, SQD2: { score: 4, label: 'Good' }, SQD3: { score: 4, label: 'Good' }, SQD4: { score: 5, label: 'Very Good' }, SQD5: { score: 3, label: 'Neutral' }, SQD6: { score: 4, label: 'Good' }, SQD7: { score: 5, label: 'Very Good' }, SQD8: { score: 4, label: 'Good' }, remarks: '' },
  },
  {
    id: 'NIFTC-TA-IEC-25-001', date: 'April 06, 2025', applicant: 'Glenn Carlo Pabayo',
    serviceType: 'IEC Material', status: 'APPROVED',
    profile: { name: 'Glenn Carlo Pabayo', sex: 'Male (Lalaki)', category: 'Student', birthday: '2000-06-15', contact: '09985556677', address: 'Antipolo, Rizal', office: 'School' },
    charter: { date: '2026-04-06', clientType: 'Citizen', officeVisited: 'NIFTC Tanay', serviceAccessed: 'IEC materials', cc: ['Seen CC before', 'Easy to find', 'Informative'] },
    survey: { SQD0: { score: 4, label: 'Good' }, SQD1: { score: 4, label: 'Good' }, SQD2: { score: 5, label: 'Very Good' }, SQD3: { score: 4, label: 'Good' }, SQD4: { score: 4, label: 'Good' }, SQD5: { score: 5, label: 'Very Good' }, SQD6: { score: 3, label: 'Neutral' }, SQD7: { score: 4, label: 'Good' }, SQD8: { score: 5, label: 'Very Good' }, remarks: 'Great staff' },
  },
  {
    id: 'NIFTC-TA-INQ-25-001', date: 'April 01, 2025', applicant: 'Lance Dayawon',
    serviceType: 'Walk-in Advisory', status: 'APPROVED',
    profile: { name: 'Lance Dayawon', sex: 'Male (Lalaki)', category: 'Farmer', birthday: '1985-11-20', contact: '09271112222', address: 'Morong, Rizal', office: 'N/A' },
    charter: { date: '2026-04-01', clientType: 'Citizen', officeVisited: 'NIFTC Tanay', serviceAccessed: 'walk-in advisory', cc: ['CC posted visibly', 'Simple to understand', 'Service was quick'] },
    survey: { SQD0: { score: 5, label: 'Very Good' }, SQD1: { score: 5, label: 'Very Good' }, SQD2: { score: 5, label: 'Very Good' }, SQD3: { score: 4, label: 'Good' }, SQD4: { score: 5, label: 'Very Good' }, SQD5: { score: 4, label: 'Good' }, SQD6: { score: 5, label: 'Very Good' }, SQD7: { score: 5, label: 'Very Good' }, SQD8: { score: 4, label: 'Good' }, remarks: 'Excellent!' },
  },
  {
    id: 'NIFTC-TA-SV-25-001', date: 'April 01, 2025', applicant: 'Joshua Tanawan',
    serviceType: 'Site Visit', status: 'UNDER REVIEW',
    profile: { name: 'Joshua Tanawan', sex: 'Male (Lalaki)', category: 'Fish Farmer', birthday: '1978-07-04', contact: '09561234321', address: 'Tanay, Rizal', office: 'Private Farm' },
    charter: { date: '2026-04-01', clientType: 'Citizen', officeVisited: 'NIFTC Tanay', serviceAccessed: 'site visit', cc: ['Familiar with CC', 'Moderate visibility', 'Needed more time'] },
    survey: { SQD0: { score: 3, label: 'Neutral' }, SQD1: { score: 4, label: 'Good' }, SQD2: { score: 3, label: 'Neutral' }, SQD3: { score: null, label: 'N/A' }, SQD4: { score: 4, label: 'Good' }, SQD5: { score: 3, label: 'Neutral' }, SQD6: { score: null, label: 'N/A' }, SQD7: { score: 4, label: 'Good' }, SQD8: { score: 3, label: 'Neutral' }, remarks: 'Could improve response time' },
  },
];

const STATUS_META = {
  'PENDING':      { bg: '#fff3cd', color: '#856404', label: 'PENDING' },
  'UNDER REVIEW': { bg: '#cff4fc', color: '#055160', label: 'UNDER REVIEW' },
  'APPROVED':     { bg: '#d1e7dd', color: '#0a3622', label: 'APPROVED' },
};

const SCORE_EMOJI = { 5: '😁', 4: '😊', 3: '😐', 2: '😞', 1: '😡', null: '🔘' };

export default function PendingQueuePage() {
  const [queue, setQueue] = useState(INITIAL_QUEUE);
  const [selected, setSelected] = useState([]);
  const [activeRow, setActiveRow] = useState(null);
  const [checklist, setChecklist] = useState({});
  const [remarks, setRemarks] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState({});

  const totalPending   = queue.filter(r => r.status === 'PENDING').length;
  const totalReview    = queue.filter(r => r.status === 'UNDER REVIEW').length;
  const totalApproved  = queue.filter(r => r.status === 'APPROVED').length;

  const toggleSelect = (id) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const selectAll = () =>
    setSelected(selected.length === queue.length ? [] : queue.map(r => r.id));

  const approveSelected = () => {
    setQueue(prev => prev.map(r => selected.includes(r.id) ? { ...r, status: 'APPROVED' } : r));
    setSelected([]);
  };

  const deleteSelected = () => {
    setQueue(prev => prev.filter(r => !selected.includes(r.id)));
    setSelected([]);
  };

  const openRow = (row) => {
    setActiveRow(row);
    if (!submissionStatus[row.id]) {
      setSubmissionStatus(prev => ({ ...prev, [row.id]: row.status }));
    }
  };

  const saveAndApprove = () => {
    setQueue(prev => prev.map(r => r.id === activeRow.id ? { ...r, status: 'APPROVED' } : r));
    setSubmissionStatus(prev => ({ ...prev, [activeRow.id]: 'APPROVED' }));
    setActiveRow(null);
  };

  const markUnderReview = () => {
    setQueue(prev => prev.map(r => r.id === activeRow.id ? { ...r, status: 'UNDER REVIEW' } : r));
    setSubmissionStatus(prev => ({ ...prev, [activeRow.id]: 'UNDER REVIEW' }));
    setActiveRow(null);
  };

  const getStatus = (row) => submissionStatus[row.id] || row.status;

  return (
    <div className="p-4">

      {/* Breadcrumb */}
      {activeRow && (
        <div className="text-muted small fw-semibold mb-3">
          <span style={{ cursor: 'pointer' }} onClick={() => setActiveRow(null)}>Pending Queue</span>
          <span className="mx-2">›</span>
          <span className="text-body-emphasis">Review & Edit</span>
        </div>
      )}

      {!activeRow ? (
        <>
          {/* Stat cards */}
          <div className="d-flex gap-3 mb-4 flex-wrap">
            <div className="card border-0 shadow-sm rounded-4 px-4 py-3 flex-fill text-center" style={{ minWidth: 140 }}>
              <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                <i className="bi bi-clock-history text-warning fs-5"></i>
                <span className="fw-black" style={{ fontSize: '1.8rem', lineHeight: 1 }}>{totalPending}</span>
              </div>
              <div className="text-muted small fw-semibold">Total Pending</div>
            </div>
            <div className="card border-0 shadow-sm rounded-4 px-4 py-3 flex-fill text-center" style={{ minWidth: 140 }}>
              <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                <i className="bi bi-clipboard2-check text-info fs-5"></i>
                <span className="fw-black" style={{ fontSize: '1.8rem', lineHeight: 1 }}>{totalReview}</span>
              </div>
              <div className="text-muted small fw-semibold">Under Review</div>
            </div>
            <div className="card border-0 shadow-sm rounded-4 px-4 py-3 flex-fill text-center" style={{ minWidth: 140 }}>
              <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span className="fw-black" style={{ fontSize: '1.8rem', lineHeight: 1 }}>{totalApproved}</span>
              </div>
              <div className="text-muted small fw-semibold">Approved Today</div>
            </div>
          </div>

          {/* Queue table */}
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="px-4 py-3 border-bottom d-flex align-items-center gap-2">
              <i className="bi bi-person-lines-fill text-primary fs-5"></i>
              <span className="fw-black text-body-emphasis">Pending Queues</span>
              <div className="ms-auto d-flex gap-2">
                <button
                  onClick={approveSelected}
                  disabled={selected.length === 0}
                  className="btn btn-sm rounded-pill px-3 fw-bold btn-primary d-flex align-items-center gap-1"
                  style={{ fontSize: '0.75rem' }}
                >
                  <i className="bi bi-check-circle-fill"></i> Approve Selected
                </button>
                <button
                  onClick={deleteSelected}
                  disabled={selected.length === 0}
                  className="btn btn-sm rounded-pill px-3 fw-bold btn-outline-danger d-flex align-items-center gap-1"
                  style={{ fontSize: '0.75rem' }}
                >
                  <i className="bi bi-trash"></i> Delete Selected
                </button>
              </div>
            </div>

            <table className="table table-hover mb-0" style={{ fontSize: '0.82rem' }}>
              <thead className="bg-body-tertiary">
                <tr>
                  <th className="px-4 py-3">
                    <input type="checkbox" className="form-check-input"
                      checked={selected.length === queue.length && queue.length > 0}
                      onChange={selectAll} />
                  </th>
                  {['Control ID', 'Submitted Date', 'Applicant Name', 'Service Type', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-3 py-3 fw-bold text-muted text-uppercase"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {queue.map(row => {
                  const st = getStatus(row);
                  const meta = STATUS_META[st] || STATUS_META['PENDING'];
                  return (
                    <tr key={row.id}>
                      <td className="px-4 py-3">
                        <input type="checkbox" className="form-check-input"
                          checked={selected.includes(row.id)}
                          onChange={() => toggleSelect(row.id)} />
                      </td>
                      <td className="px-3 py-3 fw-bold text-primary" style={{ fontSize: '0.8rem' }}>{row.id}</td>
                      <td className="px-3 py-3 text-muted">{row.date}</td>
                      <td className="px-3 py-3 fw-semibold text-body-emphasis">{row.applicant}</td>
                      <td className="px-3 py-3 text-muted">{row.serviceType}</td>
                      <td className="px-3 py-3">
                        <span className="badge rounded-pill fw-semibold px-2 py-1"
                          style={{ background: meta.bg, color: meta.color, fontSize: '0.65rem' }}>
                          {meta.label}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => openRow(row)}
                            className="btn btn-outline-secondary btn-sm rounded-circle"
                            style={{ width: 28, height: 28, padding: 0 }}
                            title="Review & Edit"
                          >
                            <i className="bi bi-pencil" style={{ fontSize: '0.7rem' }}></i>
                          </button>
                          <button
                            onClick={() => setQueue(prev => prev.filter(r => r.id !== row.id))}
                            className="btn btn-outline-danger btn-sm rounded-circle"
                            style={{ width: 28, height: 28, padding: 0 }}
                            title="Delete"
                          >
                            <i className="bi bi-trash" style={{ fontSize: '0.7rem' }}></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="px-4 py-2 bg-body-tertiary border-top text-muted small">
              Showing {queue.length} of {queue.length} transactions
            </div>
          </div>
        </>
      ) : (
        /* --- REVIEW / EDIT PANEL --- */
        <div className="row g-4">

          {/* Left: Reference Data */}
          <div className="col-12 col-xl-7">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-header bg-primary text-white fw-bold d-flex align-items-center gap-2 py-3 px-4">
                <i className="bi bi-file-earmark-text"></i> Reference Data (Client Submission)
              </div>
              <div className="card-body p-0">

                {/* Client Profile */}
                <div className="p-4 border-bottom">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-person-circle text-primary fs-5"></i>
                    <span className="fw-black text-body-emphasis">Client Profile</span>
                  </div>
                  {[
                    ['Name (Pangalan)', activeRow.profile.name],
                    ['Sex (Kasarian)', activeRow.profile.sex],
                    ['Select Categories', activeRow.profile.category],
                    ['Birthday (Petsa ng Kapanganakan)', activeRow.profile.birthday],
                    ['Contact Number', activeRow.profile.contact],
                    ['Address (Tirahan)', activeRow.profile.address],
                    ['Office/Organization (Organisasyon)', activeRow.profile.office],
                  ].map(([label, value]) => (
                    <div key={label} className="row mb-2" style={{ fontSize: '0.82rem' }}>
                      <div className="col-5 text-muted fw-semibold">{label}:</div>
                      <div className="col-7 fw-semibold text-body-emphasis">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Citizen's Charter */}
                <div className="p-4 border-bottom">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-journal-bookmark-fill text-warning fs-5"></i>
                    <span className="fw-black text-body-emphasis">Citizen's Charter</span>
                  </div>
                  {[
                    ['Date (Petsa)', activeRow.charter.date],
                    ['Client Type', activeRow.charter.clientType],
                    ['Office Visited (Opisinang Pinuntahan)', activeRow.charter.officeVisited],
                    ['Service Accessed (Serbisyong Kinuha)', activeRow.charter.serviceAccessed],
                  ].map(([label, value]) => (
                    <div key={label} className="row mb-2" style={{ fontSize: '0.82rem' }}>
                      <div className="col-5 text-muted fw-semibold">{label}:</div>
                      <div className="col-7 fw-semibold text-body-emphasis">{value}</div>
                    </div>
                  ))}
                  {activeRow.charter.cc.map((text, i) => (
                    <div key={i} className="row mb-2" style={{ fontSize: '0.82rem' }}>
                      <div className="col-5 text-muted fw-semibold">CC{i + 1}</div>
                      <div className="col-7 fw-semibold text-body-emphasis">{text}</div>
                    </div>
                  ))}
                </div>

                {/* Survey Ratings */}
                <div className="p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-bar-chart-fill text-success fs-5"></i>
                    <span className="fw-black text-body-emphasis">Survey Ratings</span>
                  </div>
                  {Object.entries(activeRow.survey).map(([key, val]) => {
                    if (key === 'remarks') return (
                      <div key="remarks" className="row mb-2" style={{ fontSize: '0.82rem' }}>
                        <div className="col-5 d-flex align-items-center gap-1 text-muted fw-semibold">
                          <i className="bi bi-chat-left-text"></i>
                        </div>
                        <div className="col-7 fw-semibold text-body-emphasis">{val || '—'}</div>
                      </div>
                    );
                    const score = val?.score ?? null;
                    return (
                      <div key={key} className="row mb-2 align-items-center" style={{ fontSize: '0.82rem' }}>
                        <div className="col-5 text-muted fw-semibold">
                          <span className="me-1">{SCORE_EMOJI[score]}</span> {key}
                        </div>
                        <div className="col-7 fw-semibold text-body-emphasis">
                          {score !== null ? `${score} — ${val.label}` : '🔘 N/A'}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

          {/* Right: Actions Panel */}
          <div className="col-12 col-xl-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '1rem' }}>

              {/* Verification Checklist */}
              <div className="mb-4">
                <div className="fw-black text-primary mb-3" style={{ fontSize: '1rem' }}>Verification Checklist</div>
                {['Client Profile', 'Citizens Charter', 'Survey Questionnaire'].map(item => (
                  <div key={item} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`chk-${item}`}
                      checked={!!checklist[`${activeRow.id}-${item}`]}
                      onChange={e => setChecklist(prev => ({
                        ...prev, [`${activeRow.id}-${item}`]: e.target.checked
                      }))}
                    />
                    <label className="form-check-label fw-semibold text-body-emphasis" htmlFor={`chk-${item}`}>
                      {item}
                    </label>
                  </div>
                ))}
              </div>

              {/* Encoder Remarks */}
              <div className="mb-4">
                <div className="fw-bold text-warning mb-2 d-flex align-items-center gap-1">
                  <i className="bi bi-chat-dots-fill"></i> Encoder Remarks
                </div>
                <textarea
                  rows={4}
                  className="form-control rounded-3 bg-body-tertiary"
                  placeholder="Remarks here"
                  value={remarks[activeRow.id] || ''}
                  onChange={e => setRemarks(prev => ({ ...prev, [activeRow.id]: e.target.value }))}
                  style={{ fontSize: '0.85rem' }}
                />
              </div>

              {/* Submission Status */}
              <div className="mb-4">
                <div className="fw-black text-body-emphasis mb-2">Submission Status</div>
                <select
                  className="form-select rounded-3 fw-semibold"
                  value={submissionStatus[activeRow.id] || activeRow.status}
                  onChange={e => {
                    const newStatus = e.target.value;
                    setSubmissionStatus(prev => ({ ...prev, [activeRow.id]: newStatus }));
                    setQueue(prev => prev.map(r => r.id === activeRow.id ? { ...r, status: newStatus } : r));
                  }}
                  style={{ fontSize: '0.85rem' }}
                >
                  <option value="PENDING">Pending Admin Review</option>
                  <option value="UNDER REVIEW">Under Review</option>
                  <option value="APPROVED">Approved</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column gap-2">
                <button onClick={saveAndApprove}
                  className="btn btn-success fw-bold rounded-3 py-2 d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-check-circle-fill"></i> Save and Approve
                </button>
                <button onClick={markUnderReview}
                  className="btn btn-secondary fw-bold rounded-3 py-2 d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-hourglass-split"></i> Mark as Under Review
                </button>
                <button onClick={() => {
                  setQueue(prev => prev.filter(r => r.id !== activeRow.id));
                  setActiveRow(null);
                }}
                  className="btn btn-danger fw-bold rounded-3 py-2 d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-trash"></i> Discard Changes
                </button>
              </div>

              {/* Audit note */}
              <div className="mt-3 p-3 bg-body-tertiary rounded-3 d-flex gap-2 align-items-start">
                <i className="bi bi-info-circle text-muted flex-shrink-0 mt-1"></i>
                <span className="text-muted" style={{ fontSize: '0.72rem' }}>
                  Changes made here are logged and tracked for quality assurance and audit purposes
                </span>
              </div>

              <button onClick={() => setActiveRow(null)}
                className="btn btn-outline-secondary rounded-3 fw-bold mt-2 w-100">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}