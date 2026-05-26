'use client';

import { use } from 'react';
import Link from 'next/link';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export const SERVICE_REGISTRY = [
  { id: 1,  label: 'Fish Seed (Free)',       icon: 'bi-water',         color: '#0d6efd', respondents: 150 },
  { id: 2,  label: 'Fish Seed (Payment)',    icon: 'bi-cash-coin',     color: '#fd7e14', respondents: 150 },
  { id: 3,  label: 'IEC Materials',          icon: 'bi-book',          color: '#6f42c1', respondents: 50  },
  { id: 4,  label: 'Training Request',       icon: 'bi-mortarboard',   color: '#d63384', respondents: 0   },
  { id: 5,  label: "Fish Farmers' Seminar",  icon: 'bi-people',        color: '#ffc107', respondents: 46  },
  { id: 6,  label: 'Email & Walk-in',        icon: 'bi-envelope-open', color: '#0dcaf0', respondents: 0   },
  { id: 7,  label: 'Site Visit/Inspection',  icon: 'bi-truck',         color: '#6610f2', respondents: 60  },
  { id: 8,  label: 'SMS, Call & Facebook',   icon: 'bi-chat-dots',     color: '#20c997', respondents: 0   },
  { id: 9,  label: 'Dormitory',              icon: 'bi-house-door',    color: '#198754', respondents: 0   },
  { id: 10, label: 'On-the-Job Training',    icon: 'bi-tools',         color: '#dc3545', respondents: 50  },
];

// --- STATIC MOCK DATA ---
const MOCK_DATA = {
  overall: {
    avgRating: 4.99,
    sex: [{ name: 'Male', value: 88, color: '#0d6efd' }, { name: 'Female', value: 62, color: '#60a5fa' }],
    clientType: [
      { name: 'General Public', value: 70, color: '#0d6efd' },
      { name: 'Business/Org',   value: 50, color: '#3b82f6' },
      { name: "Gov't Employee", value: 30, color: '#93c5fd' },
    ],
    ageGroup: [
      { age: 'Below 18', count: 10 },
      { age: '18-33',    count: 55 },
      { age: '33-59',    count: 62 },
      { age: '60 & above', count: 23 },
    ],
    criteria: [
      { label: 'Responsiveness',     score: 4.99 },
      { label: 'Reliability',        score: 4.99 },
      { label: 'Access & Facilities',score: 4.99 },
      { label: 'Communication',      score: 4.99 },
      { label: 'Costs',              score: 4.90 },
      { label: 'Integrity',          score: 4.99 },
      { label: 'Assurance',          score: 4.99 },
      { label: 'Outcome',            score: 4.99 },
    ],
  },
  internal: {
    count: 130,
    avgRating: 4.99,
    sex: [{ name: 'Male', value: 70, color: '#0d6efd' }, { name: 'Female', value: 60, color: '#60a5fa' }],
    clientType: [{ name: 'Business/Org', value: 120, color: '#0d6efd' }],
    ageGroup: [
      { age: 'Below 18', count: 5  },
      { age: '18-33',    count: 40 },
      { age: '33-59',    count: 60 },
      { age: '60 & above', count: 25 },
    ],
    criteria: [
      { label: 'Responsiveness',     score: 4.99 },
      { label: 'Reliability',        score: 4.99 },
      { label: 'Access & Facilities',score: 4.99 },
      { label: 'Communication',      score: 4.89 },
      { label: 'Costs',              score: 4.99 },
      { label: 'Integrity',          score: 4.99 },
      { label: 'Assurance',          score: 4.99 },
      { label: 'Outcome',            score: 4.99 },
    ],
  },
  external: {
    count: 20,
    avgRating: 4.99,
    sex: [{ name: 'Male', value: 18, color: '#0d6efd' }, { name: 'Female', value: 12, color: '#60a5fa' }],
    clientType: [
      { name: 'General Public',  value: 28, color: '#0d6efd' },
      { name: "Gov't Employee",  value: 13, color: '#93c5fd' },
    ],
    ageGroup: [
      { age: 'Below 18', count: 2  },
      { age: '18-33',    count: 15 },
      { age: '33-59',    count: 18 },
      { age: '60 & above', count: 5  },
    ],
    criteria: [
      { label: 'Responsiveness',     score: 4.99 },
      { label: 'Reliability',        score: 4.99 },
      { label: 'Access & Facilities',score: 4.89 },
      { label: 'Communication',      score: 4.99 },
      { label: 'Costs',              score: 4.99 },
      { label: 'Integrity',          score: 4.99 },
      { label: 'Assurance',          score: 4.99 },
      { label: 'Outcome',            score: 4.89 },
    ],
  },
};

// --- SUB-COMPONENTS ---

function AvgRatingBadge({ rating }) {
  return (
    <div className="d-flex align-items-center gap-1 bg-body-tertiary rounded-3 px-3 py-2 border">
      <i className="bi bi-star-fill text-warning"></i>
      <div>
        <div className="text-muted" style={{ fontSize: '0.6rem', lineHeight: 1 }}>Avg Rating</div>
        <div className="fw-black text-body-emphasis" style={{ fontSize: '0.9rem', lineHeight: 1 }}>
          {rating} / 5.00
        </div>
      </div>
    </div>
  );
}

function SexDonut({ data }) {
  return (
    <div>
      <div className="fw-bold text-body-secondary mb-2 text-center" style={{ fontSize: '0.75rem' }}>Sex</div>
      <ResponsiveContainer width="100%" height={110}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={30} outerRadius={50} dataKey="value" stroke="none">
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Pie>
          <Tooltip formatter={(v, n) => [v, n]} contentStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="d-flex justify-content-center gap-3 flex-wrap mt-1">
        {data.map((d, i) => (
          <div key={i} className="d-flex align-items-center gap-1">
            <div className="rounded-circle" style={{ width: 8, height: 8, background: d.color }} />
            <span style={{ fontSize: '0.65rem' }} className="text-muted fw-semibold">{d.value} {d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientTypeDonut({ data }) {
  return (
    <div>
      <div className="fw-bold text-body-secondary mb-2 text-center" style={{ fontSize: '0.75rem' }}>Client Type</div>
      <ResponsiveContainer width="100%" height={110}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={30} outerRadius={50} dataKey="value" stroke="none">
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Pie>
          <Tooltip formatter={(v, n) => [v, n]} contentStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="d-flex flex-column align-items-center gap-1 mt-1">
        {data.map((d, i) => (
          <div key={i} className="d-flex align-items-center gap-1">
            <div className="rounded-circle" style={{ width: 8, height: 8, background: d.color }} />
            <span style={{ fontSize: '0.65rem' }} className="text-muted fw-semibold">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgeGroupBar({ data, color = '#0d6efd' }) {
  return (
    <div>
      <div className="fw-bold text-body-secondary mb-2 text-center" style={{ fontSize: '0.75rem' }}>Age Group</div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="age" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 9 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ fontSize: 11 }} />
          <Bar dataKey="count" fill={color} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CriteriaScores({ data }) {
  return (
    <div>
      <div className="fw-bold text-body-secondary mb-2" style={{ fontSize: '0.75rem' }}>Criteria Scores</div>
      <div className="d-flex flex-column gap-1">
        {data.map((c, i) => (
          <div key={i} className="d-flex align-items-center justify-content-between gap-2">
            <span className="text-muted" style={{ fontSize: '0.68rem', minWidth: '110px' }}>{c.label}</span>
            <div className="flex-grow-1 bg-body-tertiary rounded-pill" style={{ height: 6 }}>
              <div className="bg-primary rounded-pill" style={{ width: `${(c.score / 5) * 100}%`, height: '100%' }} />
            </div>
            <span className="fw-bold text-body-emphasis" style={{ fontSize: '0.7rem', minWidth: '30px', textAlign: 'right' }}>{c.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientCard({ title, data, serviceColor }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 flex-fill" style={{ minWidth: 0 }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="fw-black text-body-emphasis" style={{ fontSize: '1rem' }}>{title}</span>
        <AvgRatingBadge rating={data.avgRating} />
      </div>
      <div className="row g-3">
        <div className="col-6 col-lg-3">
          <SexDonut data={data.sex} />
        </div>
        <div className="col-6 col-lg-3">
          <ClientTypeDonut data={data.clientType} />
        </div>
        <div className="col-6 col-lg-3">
          <AgeGroupBar data={data.ageGroup} color={serviceColor} />
        </div>
        <div className="col-6 col-lg-3">
          <CriteriaScores data={data.criteria} />
        </div>
      </div>
    </div>
  );
}

// --- PAGE ---
export default function ServiceDetailPage({ params }) {
  const { id } = use(params);
  const serviceId = parseInt(id);
  const service = SERVICE_REGISTRY.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 gap-3">
        <h2 className="fw-black">Service not found</h2>
        <Link href="/terminal_admin" className="btn btn-primary rounded-pill px-4">← Back to Dashboard</Link>
      </div>
    );
  }

  const data = MOCK_DATA;

  return (
    <div className="p-4 d-flex flex-column gap-4">

      {/* Overall Service Detail card */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-3 d-flex align-items-center justify-content-center text-white flex-shrink-0"
              style={{ width: 44, height: 44, background: service.color, fontSize: '1.2rem' }}>
              <i className={`bi ${service.icon}`}></i>
            </div>
            <div>
              <div className="text-muted fw-bold text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.08em' }}>Service Detail</div>
              <div className="fw-black text-body-emphasis" style={{ fontSize: '1.1rem' }}>{service.label}</div>
              <div className="text-muted" style={{ fontSize: '0.7rem' }}>{service.respondents} respondents</div>
            </div>
          </div>
          <AvgRatingBadge rating={data.overall.avgRating} />
        </div>

        {/* 4 charts */}
        <div className="row g-4">
          <div className="col-6 col-lg-3">
            <SexDonut data={data.overall.sex} />
          </div>
          <div className="col-6 col-lg-3">
            <ClientTypeDonut data={data.overall.clientType} />
          </div>
          <div className="col-6 col-lg-3">
            <AgeGroupBar data={data.overall.ageGroup} color={service.color} />
          </div>
          <div className="col-6 col-lg-3">
            <CriteriaScores data={data.overall.criteria} />
          </div>
        </div>
      </div>

      {/* Internal + External Client cards */}
      <div className="d-flex gap-4 flex-wrap">
        <ClientCard title="Internal Client" data={data.internal} serviceColor={service.color} />
        <ClientCard title="External Client" data={data.external} serviceColor={service.color} />
      </div>

    </div>
  );
}