'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// --- DATA ---
const serviceColors = ['#0d6efd','#fd7e14','#6f42c1','#20c997','#ffc107','#0dcaf0','#6610f2','#d63384','#198754','#dc3545'];

const serviceBreakdown = [
  { label: 'Fish Seed (Free)',      count: 150, color: '#0d6efd' },
  { label: 'Fish Seed (Payment)',   count: 150, color: '#fd7e14' },
  { label: 'IEC Materials',         count: 50,  color: '#6f42c1' },
  { label: 'SMS, Call & Facebook',  count: 0,   color: '#20c997' },
  { label: "Fish Farmers' Seminar", count: 46,  color: '#ffc107' },
  { label: 'Email & Walk-in',       count: 0,   color: '#0dcaf0' },
  { label: 'Site Visit/Inspection', count: 60,  color: '#6610f2' },
  { label: 'Training Request',      count: 50,  color: '#d63384' },
  { label: 'Dormitory',             count: 0,   color: '#198754' },
  { label: 'On-the-Job Training',   count: 50,  color: '#dc3545' },
];

const donutData = serviceBreakdown.filter(s => s.count > 0);
const totalResponses = donutData.reduce((a, b) => a + b.count, 0);

const lineData = [
  { month: 'Jul', responses: 120 },
  { month: 'Aug', responses: 155 },
  { month: 'Sep', responses: 137 },
];

const mostActive = [
  { label: 'Fish Seed (Free)',      pct: 26.7, color: '#0d6efd' },
  { label: 'Fish Seed (Payment)',   pct: 25.5, color: '#fd7e14' },
  { label: 'Site Visit/Inspection', pct: 10.9, color: '#6610f2' },
  { label: 'IEC Materials',         pct: 9.7,  color: '#6f42c1' },
  { label: 'Walk-in Advisory',      pct: 9.7,  color: '#0dcaf0' },
  { label: 'On-the-Job Training',   pct: 8.5,  color: '#dc3545' },
  { label: "Fish Farmers' Seminar", pct: 9.0,  color: '#ffc107' },
  { label: 'SMS, Call & Facebook',  pct: 0.0,  color: '#20c997' },
  { label: 'Email & Walk-in',       pct: 0.0,  color: '#198754' },
  { label: 'Dormitory',             pct: 0.0,  color: '#d63384' },
];

const quarters = ['Q1 2025 (Current)', 'Q4 2024 (Archive)', 'Q3 2024 (Archive)'];

// --- COMPONENTS ---

function StatCard({ icon, label, value, sub, pct, color }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 flex-fill" style={{ minWidth: '130px' }}>
      <div className="d-flex align-items-center gap-2 mb-1">
        <div className={`rounded-3 d-flex align-items-center justify-content-center text-white`}
          style={{ width: 32, height: 32, background: color, fontSize: '0.9rem' }}>
          <i className={`bi ${icon}`}></i>
        </div>
        <span className="text-muted small fw-semibold">{label}</span>
      </div>
      <div className="fw-black" style={{ fontSize: '1.6rem', lineHeight: 1 }}>{value}</div>
      {sub && <div className="text-muted" style={{ fontSize: '0.65rem' }}>{sub}</div>}
      {pct && <div className="text-muted" style={{ fontSize: '0.7rem' }}>{pct}%</div>}
    </div>
  );
}

function SidebarItem({ icon, label, count, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`d-flex align-items-center justify-content-between px-3 py-2 rounded-3 mb-1 ${active ? 'bg-primary text-white' : 'text-body-secondary'}`}
      style={{ cursor: 'pointer', fontSize: '0.8rem', transition: 'all 0.15s' }}
    >
      <div className="d-flex align-items-center gap-2">
        <i className={`bi ${icon}`}></i>
        <span className="fw-semibold">{label}</span>
      </div>
      {count !== undefined && (
        <span className={`badge rounded-pill ${active ? 'bg-white text-primary' : 'bg-body-tertiary text-body'}`}>
          {count}
        </span>
      )}
    </div>
  );
}

// --- LOGIN ---
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    setTimeout(() => {
      if (email === 'admin@bfar.da.gov.ph' && password === 'admin123') {
        onLogin();
      } else {
        setError('Invalid credentials. Try admin@bfar.da.gov.ph / admin123');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ background: '#0a0f1e' }}>
      {/* Background overlay */}
      <div className="position-absolute inset-0 w-100 h-100" style={{
        background: 'url(/niftc-bg.jpg) center/cover no-repeat',
        opacity: 0.3,
        top: 0, left: 0, right: 0, bottom: 0
      }} />
      <div className="position-absolute inset-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, rgba(13,110,253,0.3) 0%, rgba(10,15,30,0.8) 100%)',
        top: 0, left: 0, right: 0, bottom: 0
      }} />

      {/* Login card */}
      <div className="card border-0 shadow-lg rounded-4 p-4 position-relative bg-body" style={{ width: '100%', maxWidth: '380px', zIndex: 10 }}>
        {/* Logos */}
        <div className="text-center mb-3">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <img src="/bfar-logo.png" alt="BFAR" style={{ height: 48 }} onError={e => e.target.style.display='none'} />
            <img src="/niftc-logo.png" alt="NIFTC" style={{ height: 48 }} onError={e => e.target.style.display='none'} />
          </div>
          <h5 className="fw-black text-primary mb-1">BFAR - NIFTC</h5>
          <p className="text-muted small mb-0">Enter your credentials to continue</p>
          <div className="mx-auto mt-2 rounded-pill bg-primary" style={{ width: 40, height: 3 }} />
        </div>

        {error && (
          <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">{error}</div>
        )}

        <div className="mb-3">
          <label className="form-label small fw-semibold text-body-secondary">Email</label>
          <input
            type="email"
            className="form-control rounded-3"
            placeholder="example@company.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
          />
        </div>
        <div className="mb-4">
          <label className="form-label small fw-semibold text-body-secondary">Password</label>
          <input
            type="password"
            className="form-control rounded-3"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="btn btn-primary w-100 fw-bold rounded-3 py-2 bg-gradient"
        >
          {loading ? <span className="spinner-border spinner-border-sm me-2" /> : <i className="bi bi-lock-fill me-2"></i>}
          Login
        </button>
      </div>
    </div>
  );
}

// --- DASHBOARD ---
function Dashboard({ onLogout }) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selectedQuarter, setSelectedQuarter] = useState(quarters[0]);
  const [showQuarterMenu, setShowQuarterMenu] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">

      {/* Government Letterhead */}
      <div className="bg-white border-bottom shadow-sm py-2 px-4">
        <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div className="d-flex align-items-center gap-3">
            <img src="/bagong-pilipinas.png" alt="Bagong Pilipinas" style={{ height: 56 }} onError={e => e.target.style.display='none'} />
            <img src="/bfar-logo.png" alt="BFAR" style={{ height: 56 }} onError={e => e.target.style.display='none'} />
          </div>
          <div className="text-center flex-grow-1">
            <div className="text-muted" style={{ fontSize: '0.65rem' }}>Republic of the Philippines · Department of Agriculture</div>
            <div className="fw-bold small">Bureau of Fisheries and Aquatic Resources</div>
            <div className="fw-black text-primary" style={{ fontSize: '0.9rem' }}>NATIONAL INLAND FISHERIES TECHNOLOGY CENTER</div>
            <div className="text-muted" style={{ fontSize: '0.6rem' }}>
              Km 53 Manila East Road, Sitio Sayoc, Brgy. Tandang Kutyo, Tanay, Rizal &nbsp;|&nbsp;
              Tel: 0997-745-9961 &nbsp;|&nbsp; Email: niftc@bfar.da.gov.ph
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src="/niftc-logo.png" alt="NIFTC" style={{ height: 56 }} onError={e => e.target.style.display='none'} />
            <img src="/gender-logo.png" alt="Gender" style={{ height: 56 }} onError={e => e.target.style.display='none'} />
          </div>
        </div>
      </div>

      <div className="d-flex flex-grow-1 overflow-hidden">

        {/* SIDEBAR */}
        <div className="bg-body border-end d-flex flex-column p-3 shadow-sm" style={{ width: '210px', minHeight: 0, overflowY: 'auto' }}>

          {/* Admin Profile */}
          <div className="d-flex align-items-center gap-2 mb-4 p-2 rounded-3 bg-body-tertiary">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-black flex-shrink-0"
              style={{ width: 36, height: 36, fontSize: '0.85rem' }}>AD</div>
            <div>
              <div className="fw-bold small text-body-emphasis">Admin</div>
              <div className="text-muted" style={{ fontSize: '0.65rem' }}>NIFTC Officer</div>
            </div>
          </div>

          <SidebarItem icon="bi-speedometer2" label="Dashboard" active={activeNav === 'dashboard'} onClick={() => setActiveNav('dashboard')} />
          <SidebarItem icon="bi-hourglass-split" label="Pending Queues" active={activeNav === 'queues'} onClick={() => setActiveNav('queues')} />

          <div className="text-muted mt-3 mb-2 px-1 fw-bold text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.08em' }}>Technical Assistance</div>
          {serviceBreakdown.map(s => (
            <Link key={s.label} href={`/terminal_admin/service/${s.id}`} className="text-decoration-none">
              <SidebarItem icon="bi-circle-fill" label={s.label} count={s.count} active={false} />
            </Link>
          ))}

          <div className="text-muted mt-3 mb-2 px-1 fw-bold text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.08em' }}>Archive</div>
          {quarters.map(q => (
            <SidebarItem key={q} icon="bi-calendar3" label={q} active={selectedQuarter === q && activeNav === 'archive'}
              onClick={() => { setSelectedQuarter(q); setActiveNav('archive'); }} />
          ))}

          <div className="mt-auto pt-3">
            <button onClick={onLogout} className="btn btn-danger w-100 rounded-3 fw-bold btn-sm py-2">
              <i className="bi bi-box-arrow-left me-2"></i>Logout
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-grow-1 overflow-auto p-4">

          {/* Top Bar */}
          <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
            {/* Quarter Selector */}
            <div className="position-relative">
              <button
                className="btn btn-outline-secondary rounded-pill px-3 py-2 fw-semibold small d-flex align-items-center gap-2"
                onClick={() => setShowQuarterMenu(v => !v)}
              >
                {selectedQuarter} <i className="bi bi-chevron-down"></i>
              </button>
              {showQuarterMenu && (
                <div className="position-absolute bg-body border rounded-3 shadow mt-1 py-1" style={{ zIndex: 100, minWidth: '200px' }}>
                  {quarters.map(q => (
                    <div key={q} className="px-3 py-2 small fw-semibold hover-bg"
                      style={{ cursor: 'pointer' }}
                      onClick={() => { setSelectedQuarter(q); setShowQuarterMenu(false); }}>
                      {q}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="btn btn-outline-secondary rounded-pill px-3 py-2 fw-semibold small d-flex align-items-center gap-2">
              <i className="bi bi-download"></i> Export CSV
            </button>
            <div className="ms-auto d-flex align-items-center gap-2">
              <input className="form-control rounded-pill" placeholder="Search..." style={{ maxWidth: '200px', fontSize: '0.85rem' }}
                value={search} onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-outline-secondary rounded-circle p-2">
                <i className="bi bi-bell"></i>
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="d-flex gap-3 mb-4 flex-wrap">
            <StatCard icon="bi-people-fill" label="Internal Client" value="200" sub="Q1 2025" color="#0d6efd" />
            <StatCard icon="bi-globe" label="External Client" value="212" sub="Q1 2025" color="#198754" />
            <StatCard icon="bi-grid-3x3-gap" label="Service Types" value="6" pct="86" color="#fd7e14" />
            <StatCard icon="bi-star-fill" label="Avg Rating" value="4.88" pct="98" color="#ffc107" />
            <StatCard icon="bi-calendar-range" label="Period" value="Jul – Sep" pct="75" color="#6f42c1" />
          </div>

          <div className="row g-4 mb-4">
            {/* Service Distribution */}
            <div className="col-12 col-lg-5">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4"
                style={{ background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)' }}>
                <div className="fw-black text-white mb-3 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  Service Distribution
                </div>
                <div className="position-relative d-flex justify-content-center mb-3">
                  <PieChart width={200} height={200}>
                    <Pie data={donutData} cx={95} cy={95} innerRadius={55} outerRadius={90}
                      dataKey="count" stroke="none">
                      {donutData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                  </PieChart>
                  <div className="position-absolute d-flex flex-column align-items-center justify-content-center"
                    style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                    <span className="fw-black text-white" style={{ fontSize: '1.6rem' }}>{totalResponses}</span>
                    <span className="text-white-50" style={{ fontSize: '0.6rem' }}>Total Responses</span>
                  </div>
                </div>
                {/* Legend */}
                <div className="row g-1">
                  {donutData.map((s, i) => (
                    <div key={i} className="col-6 d-flex align-items-center gap-1">
                      <div className="rounded-circle flex-shrink-0" style={{ width: 8, height: 8, background: s.color }} />
                      <span className="text-white-50" style={{ fontSize: '0.6rem' }}>{s.count} {s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Response Statistic */}
            <div className="col-12 col-lg-7">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4"
                style={{ background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-black text-white text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    Response Statistic
                  </span>
                  <span className="text-white-50" style={{ fontSize: '0.7rem' }}>Jul – Sep 2024</span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: '#1a237e', border: 'none', borderRadius: 8, color: '#fff', fontSize: 12 }} />
                    <Line type="monotone" dataKey="responses" stroke="#60a5fa" strokeWidth={3}
                      dot={{ fill: '#60a5fa', strokeWidth: 2, r: 5 }} activeDot={{ r: 7 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Most Active Services */}
            <div className="col-12 col-lg-6">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-black text-body-emphasis text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                    Most Active Services
                  </span>
                  <span className="badge bg-body-tertiary text-muted rounded-pill" style={{ fontSize: '0.6rem' }}>Q3 2024 (Archive)</span>
                </div>
                <div className="row g-2">
                  {mostActive.map((s, i) => (
                    <div key={i} className="col-6 d-flex align-items-center gap-2">
                      <div className="rounded-circle flex-shrink-0" style={{ width: 10, height: 10, background: s.color }} />
                      <span className="small text-body-secondary fw-semibold" style={{ fontSize: '0.72rem' }}>
                        {s.pct}% {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly Activity Events */}
            <div className="col-12 col-lg-6">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-black text-body-emphasis text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                    Monthly Activity Events
                  </span>
                  <span className="badge bg-body-tertiary text-muted rounded-pill" style={{ fontSize: '0.6rem' }}>Jul – Sep 2024</span>
                </div>
                <div className="d-flex gap-3">
                  {[{ month: 'JUL', val: 120 }, { month: 'AUG', val: 155, active: true }, { month: 'SEP', val: 137 }].map(m => (
                    <div key={m.month} className={`flex-fill text-center rounded-4 p-3 ${m.active ? 'bg-primary text-white' : 'bg-body-tertiary'}`}>
                      <div className={`fw-bold small mb-1 ${m.active ? 'text-white-50' : 'text-muted'}`}>{m.month}</div>
                      <div className={`fw-black ${m.active ? 'text-white' : 'text-body-emphasis'}`} style={{ fontSize: '2rem', lineHeight: 1 }}>{m.val}</div>
                      <div className={`small ${m.active ? 'text-white-50' : 'text-muted'}`} style={{ fontSize: '0.65rem' }}>responses</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- ROOT PAGE ---
export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn
    ? <Dashboard onLogout={() => setLoggedIn(false)} />
    : <LoginPage onLogin={() => setLoggedIn(true)} />;
}