'use client';

import { use, useState } from 'react';
import Link from 'next/link';

// Shared service registry — single source of truth for the whole admin
export const SERVICE_REGISTRY = [
  { id: 1,  label: 'Fish Seed (Free)',       icon: 'bi-water',        color: '#0d6efd', fullTitle: 'Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Free' },
  { id: 2,  label: 'Fish Seed (Payment)',    icon: 'bi-cash-coin',    color: '#fd7e14', fullTitle: 'Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Payment' },
  { id: 3,  label: 'IEC Materials',          icon: 'bi-book',         color: '#6f42c1', fullTitle: 'Technical Assistance, Distribution of IEC Materials' },
  { id: 4,  label: 'Training Request',       icon: 'bi-mortarboard',  color: '#d63384', fullTitle: 'Training Request by Clients' },
  { id: 5,  label: "Fish Farmers' Seminar",  icon: 'bi-people',       color: '#ffc107', fullTitle: "Technical Assistance for Fish Farmer's Seminar" },
  { id: 6,  label: 'Site Visit/Inspection',  icon: 'bi-truck',        color: '#6610f2', fullTitle: 'Technical Assistance for on-Site Visit/Inspection' },
  { id: 7,  label: 'Email & Walk-in',        icon: 'bi-envelope-open',color: '#0dcaf0', fullTitle: 'Technical Assistance for Inquiries (Through Email and Walk-in)' },
  { id: 8,  label: 'SMS, Call & Facebook',   icon: 'bi-chat-dots',    color: '#20c997', fullTitle: 'Technical Assistance for Inquiries (Through SMS, Phone call and Facebook Messenger)' },
  { id: 9,  label: 'Dormitory',              icon: 'bi-house-door',   color: '#198754', fullTitle: 'Accommodation at BFAR-NIFTC Dormitory' },
  { id: 10, label: 'On-the-Job Training',    icon: 'bi-tools',        color: '#dc3545', fullTitle: 'Technical Assistance (On-the-Job-Training)' },
];

// Mock submission data — replace with real API/DB calls
const MOCK_SUBMISSIONS = Array.from({ length: 24 }, (_, i) => ({
  id: `REF-${String(i + 1).padStart(4, '0')}`,
  serviceId: (i % 10) + 1,
  name: ['Juan dela Cruz', 'Maria Santos', 'Pedro Reyes', 'Ana Garcia', 'Jose Lim'][i % 5],
  type: i % 3 === 0 ? 'External' : 'Internal',
  date: new Date(2025, 0, (i % 28) + 1).toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' }),
  status: ['Pending', 'In Progress', 'Completed', 'Pending'][i % 4],
  details: i % 2 === 0 ? 'Requesting fingerlings for grow-out pond in Tanay farm.' : '',
  channel: ['Walk-in', 'Email', 'SMS', 'Phone'][i % 4],
}));

const STATUS_COLORS = {
  'Pending':     { bg: '#fff3cd', text: '#856404' },
  'In Progress': { bg: '#cff4fc', text: '#055160' },
  'Completed':   { bg: '#d1e7dd', text: '#0a3622' },
};

export default function ServiceDetailPage({ params }) {
  const { id } = use(params);
  const serviceId = parseInt(id);
  const service = SERVICE_REGISTRY.find(s => s.id === serviceId);

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  if (!service) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 gap-3">
        <h2 className="fw-black">Service not found</h2>
        <Link href="/terminal_admin" className="btn btn-primary rounded-pill px-4">← Back to Dashboard</Link>
      </div>
    );
  }

  const submissions = MOCK_SUBMISSIONS.filter(s => s.serviceId === serviceId);
  const filtered = submissions.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                        s.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const counts = {
    total: submissions.length,
    pending: submissions.filter(s => s.status === 'Pending').length,
    inProgress: submissions.filter(s => s.status === 'In Progress').length,
    completed: submissions.filter(s => s.status === 'Completed').length,
  };

  return (
    <div className="min-vh-100 bg-body-tertiary">

      {/* Page Header */}
      <div className="bg-body border-bottom shadow-sm px-4 py-3">
        <div className="d-flex align-items-center gap-3">
          <Link href="/terminal_admin" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
            <i className="bi bi-arrow-left me-1"></i> Dashboard
          </Link>
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-3 d-flex align-items-center justify-content-center text-white"
              style={{ width: 36, height: 36, background: service.color, fontSize: '1rem' }}>
              <i className={`bi ${service.icon}`}></i>
            </div>
            <div>
              <div className="fw-black text-body-emphasis" style={{ fontSize: '0.95rem' }}>{service.label}</div>
              <div className="text-muted" style={{ fontSize: '0.65rem' }}>{service.fullTitle}</div>
            </div>
          </div>
          <div className="ms-auto d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">
              <i className="bi bi-download me-1"></i> Export CSV
            </button>
            <button className="btn btn-sm rounded-pill px-3 text-white" style={{ background: service.color }}>
              <i className="bi bi-plus me-1"></i> New Entry
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid p-4">

        {/* Stat mini-cards */}
        <div className="d-flex gap-3 mb-4 flex-wrap">
          {[
            { label: 'Total',       value: counts.total,      color: service.color },
            { label: 'Pending',     value: counts.pending,    color: '#856404' },
            { label: 'In Progress', value: counts.inProgress, color: '#055160' },
            { label: 'Completed',   value: counts.completed,  color: '#0a3622' },
          ].map(c => (
            <div key={c.label} className="card border-0 shadow-sm rounded-4 px-4 py-3 text-center flex-fill" style={{ minWidth: '110px' }}>
              <div className="fw-black" style={{ fontSize: '1.8rem', color: c.color, lineHeight: 1 }}>{c.value}</div>
              <div className="text-muted small fw-semibold">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="d-flex gap-2 mb-3 flex-wrap align-items-center">
          <input
            className="form-control rounded-pill"
            placeholder="Search by name or reference..."
            style={{ maxWidth: '280px', fontSize: '0.85rem' }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="d-flex gap-1">
            {['All', 'Pending', 'In Progress', 'Completed'].map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`btn btn-sm rounded-pill px-3 fw-semibold ${statusFilter === s ? 'btn-primary' : 'btn-outline-secondary bg-body'}`}
                style={{ fontSize: '0.75rem' }}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-muted small ms-auto">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="row g-4">
          {/* Submissions Table */}
          <div className={selected ? 'col-12 col-xl-7' : 'col-12'}>
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <table className="table table-hover mb-0" style={{ fontSize: '0.82rem' }}>
                <thead className="bg-body-tertiary">
                  <tr>
                    <th className="px-4 py-3 fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Reference</th>
                    <th className="px-4 py-3 fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Client Name</th>
                    <th className="px-4 py-3 fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Type</th>
                    <th className="px-4 py-3 fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Channel</th>
                    <th className="px-4 py-3 fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Date</th>
                    <th className="px-4 py-3 fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Status</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center text-muted py-5">No submissions found.</td>
                    </tr>
                  ) : filtered.map(sub => (
                    <tr
                      key={sub.id}
                      onClick={() => setSelected(selected?.id === sub.id ? null : sub)}
                      style={{ cursor: 'pointer', background: selected?.id === sub.id ? `${service.color}18` : undefined }}
                    >
                      <td className="px-4 py-3 fw-bold text-primary">{sub.id}</td>
                      <td className="px-4 py-3 fw-semibold text-body-emphasis">{sub.name}</td>
                      <td className="px-4 py-3">
                        <span className={`badge rounded-pill ${sub.type === 'External' ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'}`}>
                          {sub.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted">{sub.channel}</td>
                      <td className="px-4 py-3 text-muted">{sub.date}</td>
                      <td className="px-4 py-3">
                        <span className="badge rounded-pill fw-semibold px-2"
                          style={{ background: STATUS_COLORS[sub.status]?.bg, color: STATUS_COLORS[sub.status]?.text, fontSize: '0.7rem' }}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <i className="bi bi-chevron-right text-muted"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detail Panel */}
          {selected && (
            <div className="col-12 col-xl-5">
              <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '1rem' }}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <div className="fw-black text-body-emphasis" style={{ fontSize: '1rem' }}>{selected.id}</div>
                    <div className="text-muted small">{selected.date} · {selected.channel}</div>
                  </div>
                  <button className="btn btn-close btn-sm" onClick={() => setSelected(null)} />
                </div>

                <div className="d-flex flex-column gap-3">
                  <div className="p-3 bg-body-tertiary rounded-3">
                    <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Client</div>
                    <div className="fw-semibold text-body-emphasis">{selected.name}</div>
                    <div className="d-flex gap-2 mt-1">
                      <span className={`badge rounded-pill ${selected.type === 'External' ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'}`}>
                        {selected.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-body-tertiary rounded-3">
                    <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service</div>
                    <div className="fw-semibold text-body-emphasis small">{service.fullTitle}</div>
                  </div>

                  {selected.details && (
                    <div className="p-3 bg-body-tertiary rounded-3">
                      <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Details</div>
                      <div className="text-body-emphasis small">{selected.details}</div>
                    </div>
                  )}

                  <div className="p-3 bg-body-tertiary rounded-3">
                    <div className="text-muted fw-bold mb-2" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</div>
                    <div className="d-flex gap-2 flex-wrap">
                      {['Pending', 'In Progress', 'Completed'].map(s => (
                        <button
                          key={s}
                          className={`btn btn-sm rounded-pill px-3 fw-semibold ${selected.status === s ? 'btn-primary' : 'btn-outline-secondary'}`}
                          style={{ fontSize: '0.75rem' }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="btn btn-danger btn-sm rounded-pill px-4 fw-bold mt-1 align-self-start">
                    <i className="bi bi-trash me-1"></i> Delete Entry
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}