'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SERVICE_BREAKDOWN = [
  { id: 1,  label: 'Fish Seed (Free)',       icon: 'bi-water',         count: 150, color: '#0d6efd' },
  { id: 2,  label: 'Fish Seed (Payment)',    icon: 'bi-cash-coin',     count: 150, color: '#fd7e14' },
  { id: 3,  label: 'IEC Materials',          icon: 'bi-book',          count: 50,  color: '#6f42c1' },
  { id: 4,  label: 'Training Request',       icon: 'bi-mortarboard',   count: 0,   color: '#d63384' },
  { id: 5,  label: "Fish Farmers' Seminar",  icon: 'bi-people',        count: 46,  color: '#ffc107' },
  { id: 6,  label: 'Email & Walk-in',        icon: 'bi-envelope-open', count: 0,   color: '#0dcaf0' },
  { id: 7,  label: 'Site Visit/Inspection',  icon: 'bi-truck',         count: 60,  color: '#6610f2' },
  { id: 8,  label: 'SMS, Call & Facebook',   icon: 'bi-chat-dots',     count: 0,   color: '#20c997' },
  { id: 9,  label: 'Dormitory',              icon: 'bi-house-door',    count: 0,   color: '#198754' },
  { id: 10, label: 'On-the-Job Training',    icon: 'bi-tools',         count: 50,  color: '#dc3545' },
];

const QUARTERS = ['Q1 2025 (Current)', 'Q4 2024 (Archive)', 'Q3 2024 (Archive)'];

function SidebarLink({ href, icon, label, count, active }) {
  return (
    <Link href={href} className="text-decoration-none">
      <div className={`d-flex align-items-center justify-content-between px-3 py-2 rounded-3 mb-1 ${active ? 'bg-primary text-white' : 'text-body-secondary'}`}
        style={{ fontSize: '0.8rem', transition: 'all 0.15s' }}>
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
    </Link>
  );
}

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedQuarter, setSelectedQuarter] = useState(QUARTERS[0]);
  const [search, setSearch] = useState('');

  const handleLogout = () => router.push('/terminal_admin');

  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">

      {/* Government Letterhead */}
      <div className="bg-white border-bottom shadow-sm py-2 px-4 flex-shrink-0">
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

      <div className="d-flex flex-grow-1" style={{ minHeight: 0 }}>

        {/* Sidebar */}
        <div className="bg-body border-end d-flex flex-column p-3 shadow-sm flex-shrink-0"
          style={{ width: '220px', overflowY: 'auto' }}>

          {/* Admin badge */}
          <div className="d-flex align-items-center gap-2 mb-4 p-2 rounded-3 bg-body-tertiary">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-black flex-shrink-0"
              style={{ width: 36, height: 36, fontSize: '0.85rem' }}>AD</div>
            <div>
              <div className="fw-bold small text-body-emphasis">Admin</div>
              <div className="text-muted" style={{ fontSize: '0.65rem' }}>NIFTC Officer</div>
            </div>
          </div>

          {/* Quarter selector */}
          <div className="mb-3">
            <select className="form-select form-select-sm rounded-3 fw-semibold"
              value={selectedQuarter} onChange={e => setSelectedQuarter(e.target.value)}
              style={{ fontSize: '0.75rem' }}>
              {QUARTERS.map(q => <option key={q}>{q}</option>)}
            </select>
          </div>

          <SidebarLink href="/terminal_admin" icon="bi-speedometer2" label="Dashboard"
            active={pathname === '/terminal_admin'} />
          <SidebarLink href="/terminal_admin/main_pending" icon="bi-hourglass-split" label="Pending Queue"
            active={pathname === '/terminal_admin/main_pending'} />

          <div className="text-muted mt-3 mb-1 px-1 fw-bold text-uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.08em' }}>Technical Assistance</div>

          {SERVICE_BREAKDOWN.map(s => (
            <SidebarLink
              key={s.id}
              href={`/terminal_admin/service/${s.id}`}
              icon={s.icon}
              label={s.label}
              count={s.count}
              active={pathname === `/terminal_admin/service/${s.id}`}
            />
          ))}

          <div className="text-muted mt-3 mb-1 px-1 fw-bold text-uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.08em' }}>Archive</div>
          {QUARTERS.map(q => (
            <div key={q}
              className={`px-3 py-2 rounded-3 mb-1 small fw-semibold text-body-secondary`}
              style={{ fontSize: '0.8rem', cursor: 'pointer' }}>
              <i className="bi bi-calendar3 me-2"></i>{q}
            </div>
          ))}

          <div className="mt-auto pt-3">
            <button onClick={handleLogout} className="btn btn-danger w-100 rounded-3 fw-bold btn-sm py-2">
              <i className="bi bi-box-arrow-left me-2"></i>Logout
            </button>
          </div>
        </div>

        {/* Top bar + page content */}
        <div className="d-flex flex-column flex-grow-1" style={{ minWidth: 0 }}>
          {/* Top bar */}
          <div className="bg-body border-bottom px-4 py-2 d-flex align-items-center gap-3 flex-shrink-0">
            <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center gap-1">
              <i className="bi bi-download" style={{ fontSize: '0.75rem' }}></i>
              <span style={{ fontSize: '0.75rem' }}>Export CSV</span>
            </button>
            <div className="ms-auto d-flex align-items-center gap-2">
              <input className="form-control form-control-sm rounded-pill"
                placeholder="Search..." style={{ maxWidth: '200px', fontSize: '0.8rem' }}
                value={search} onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-outline-secondary btn-sm rounded-circle"
                style={{ width: 32, height: 32, padding: 0 }}>
                <i className="bi bi-bell" style={{ fontSize: '0.8rem' }}></i>
              </button>
            </div>
          </div>

          {/* Page content */}
          <div className="flex-grow-1 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}