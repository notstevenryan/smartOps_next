// app/terminal_admin/service_analytics/page.js
'use client';

import React, { useState } from 'react';
import { 
  BarChart, Bar, 
  PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

export default function ServiceChartsDashboard() {
  // Navigation Controller representing the three main dataset visibility layers
  const [activeTab, setActiveTab] = useState('service-detail'); // 'service-detail' | 'internal' | 'external'

  // Global theme-adaptive color palettes for rendering presentation data shapes
  const PIE_COLORS = ['#0d6efd', '#fd7e14', '#198754', '#6f42c1', '#dc3545'];
  const AGE_BAR_COLOR = '#0dcaf0';

  // --- COMPREHENSIVE PRESENTATION ANALYTICS DATABASE POOLS ---
  const tabDataPools = {
    'service-detail': {
      title: 'Service Detail Analytics Matrix',
      subtitle: 'Aggregated metrics tracking cross-service distribution channels.',
      sexData: [
        { name: 'Male', value: 745 },
        { name: 'Female', value: 612 }
      ],
      clientTypeData: [
        { name: 'Fisherfolk', value: 580 },
        { name: 'Pond Operators', value: 390 },
        { name: 'Cooperatives', value: 210 },
        { name: 'Academe', value: 177 }
      ],
      ageData: [
        { range: '18-29', count: 240 },
        { range: '30-44', count: 480 },
        { range: '45-59', count: 410 },
        { range: '60+', count: 227 }
      ],
      criteriaScores: [
        { criterion: 'Responsiveness (SQD1)', percentage: 94 },
        { criterion: 'Reliability (SQD2)', percentage: 91 },
        { criterion: 'Access & Facilities (SQD3)', percentage: 88 },
        { criterion: 'Communication (SQD4)', percentage: 96 },
        { criterion: 'Integrity (SQD7)', percentage: 98 }
      ]
    },
    'internal': {
      title: 'Internal Client Analytics Matrix',
      subtitle: 'Operational charts isolating cross-bureau department processing pipelines.',
      sexData: [
        { name: 'Male', value: 120 },
        { name: 'Female', value: 145 }
      ],
      clientTypeData: [
        { name: 'Research Division', value: 90 },
        { name: 'Production Units', value: 110 },
        { name: 'Extension Teams', value: 65 }
      ],
      ageData: [
        { range: '18-29', count: 85 },
        { range: '30-44', count: 110 },
        { range: '45-59', count: 55 },
        { range: '60+', count: 15 }
      ],
      criteriaScores: [
        { criterion: 'Responsiveness (SQD1)', percentage: 97 },
        { criterion: 'Reliability (SQD2)', percentage: 95 },
        { criterion: 'Access & Facilities (SQD3)', percentage: 92 },
        { criterion: 'Communication (SQD4)', percentage: 94 },
        { criterion: 'Integrity (SQD7)', percentage: 99 }
      ]
    },
    'external': {
      title: 'External Client Analytics Matrix',
      subtitle: 'Demographics tracking external public fisherfolk, farm groups, and public sectors.',
      sexData: [
        { name: 'Male', value: 625 },
        { name: 'Female', value: 467 }
      ],
      clientTypeData: [
        { name: 'Individual Fishers', value: 490 },
        { name: 'LGU Cooperatives', value: 325 },
        { name: 'Commercial Scale', value: 277 }
      ],
      ageData: [
        { range: '18-29', count: 155 },
        { range: '30-44', count: 370 },
        { range: '45-59', count: 355 },
        { range: '60+', count: 212 }
      ],
      criteriaScores: [
        { criterion: 'Responsiveness (SQD1)', percentage: 93 },
        { criterion: 'Reliability (SQD2)', percentage: 90 },
        { criterion: 'Access & Facilities (SQD3)', percentage: 86 },
        { criterion: 'Communication (SQD4)', percentage: 97 },
        { criterion: 'Integrity (SQD7)', percentage: 98 }
      ]
    }
  };

  // Resolve the active state scope
  const activeDataset = tabDataPools[activeTab];

  return (
    <div className="d-flex flex-column gap-2 animate-fade-in">
      
      {/* HEADER CONTROLS VIEW WITH SEGMENTED SWITCH PANEL */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 border-bottom pb-3">
        <div>
          <h2 className="h4 fw-black text-body-emphasis m-0" style={{ fontWeight: '800' }}>{activeDataset.title}</h2>
          <p className="text-muted m-0" style={{ fontSize: '0.8rem' }}>{activeDataset.subtitle}</p>
        </div>
        
        {/* TAB GROUPING SELECTOR CLUSTER */}
        <div className="p-1 rounded-3 bg-body-tertiary border d-inline-flex gap-1">
          {[
            { id: 'service-detail', label: 'Service Detail' },
            { id: 'internal', label: 'Internal Client' },
            { id: 'external', label: 'External Client' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn btn-sm rounded-2 px-3 fw-bold transition-all ${
                activeTab === tab.id ? 'btn-primary shadow-xs text-white' : 'btn-link text-secondary text-decoration-none'
              }`}
              style={{ fontSize: '0.78rem' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRIMARY DATA GRID: THE FOUR TARGET GRAPH SHAPES */}
      <div className="row g-4">
        
        {/* 1. DONUT CHART: SEX SPLIT MATRIX */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border border-secondary-subtle bg-body rounded-4 p-3 shadow-sm h-100">
            <div className="mb-2">
              <span className="badge bg-primary bg-opacity-10 text-primary font-monospace text-uppercase" style={{ fontSize: '0.55rem' }}>Demographics</span>
              <h6 className="fw-bold text-body-emphasis m-0 mt-0.5" style={{ fontSize: '0.82rem' }}>Sex Distribution</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activeDataset.sexData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {activeDataset.sexData.map((entry, idx) => (
                      <Cell key={`sex-cell-${idx}`} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--bs-body-bg)', color: 'var(--bs-body-color)', fontSize: '0.75rem', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ fontSize: '0.7rem' }} verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 2. DONUT CHART: CLIENT CLASSIFICATION COHORT */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border border-secondary-subtle bg-body rounded-4 p-3 shadow-sm h-100">
            <div className="mb-2">
              <span className="badge bg-success bg-opacity-10 text-success font-monospace text-uppercase" style={{ fontSize: '0.55rem' }}>Sector Class</span>
              <h6 className="fw-bold text-body-emphasis m-0 mt-0.5" style={{ fontSize: '0.82rem' }}>Client Type Breakdown</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activeDataset.clientTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {activeDataset.clientTypeData.map((entry, idx) => (
                      <Cell key={`type-cell-${idx}`} fill={PIE_COLORS[(idx + 2) % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--bs-body-bg)', color: 'var(--bs-body-color)', fontSize: '0.75rem', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ fontSize: '0.65rem' }} verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 3. BAR CHART: AGE GROUP DISTRIBUTIONS */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border border-secondary-subtle bg-body rounded-4 p-3 shadow-sm h-100">
            <div className="mb-2">
              <span className="badge bg-info bg-opacity-10 text-info font-monospace text-uppercase" style={{ fontSize: '0.55rem' }}>Generations</span>
              <h6 className="fw-bold text-body-emphasis m-0 mt-0.5" style={{ fontSize: '0.82rem' }}>Age Group Metrics</h6>
            </div>
            <div style={{ width: '100%', height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeDataset.ageData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="range" stroke="currentColor" opacity={0.4} style={{ fontSize: '0.68rem' }} />
                  <YAxis stroke="currentColor" opacity={0.4} style={{ fontSize: '0.68rem' }} />
                  <Tooltip contentStyle={{ background: 'var(--bs-body-bg)', color: 'var(--bs-body-color)', fontSize: '0.75rem', borderRadius: '8px' }} />
                  <Bar dataKey="count" fill={AGE_BAR_COLOR} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 4. LINEAR BAR GRAPH: CRITERIA CORE SCORES (LINEAR PROGRESSION) */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border border-secondary-subtle bg-body rounded-4 p-3 shadow-sm h-100">
            <div className="mb-3">
              <span className="badge bg-warning bg-opacity-10 text-warning font-monospace text-uppercase" style={{ fontSize: '0.55rem' }}>ARTa Matrix</span>
              <h6 className="fw-bold text-body-emphasis m-0 mt-0.5" style={{ fontSize: '0.82rem' }}>Criteria Quality Scores</h6>
            </div>
            
            {/* Native highly clean responsive linear progress tracks to match teammate design blueprints */}
            <div className="d-flex flex-column gap-2.5 overflow-auto pr-1">
              {activeDataset.criteriaScores.map((item, idx) => (
                <div key={idx}>
                  <div className="d-flex justify-content-between align-items-center mb-0.5" style={{ fontSize: '0.68rem' }}>
                    <span className="text-body fw-medium text-truncate pe-2">{item.criterion}</span>
                    <span className="font-monospace fw-bold text-primary">{item.percentage}%</span>
                  </div>
                  <div className="progress rounded-pill shadow-xs" style={{ height: '6px', background: 'var(--bs-secondary-bg)' }}>
                    <div 
                      className="progress-bar bg-primary rounded-pill bg-gradient" 
                      role="progressbar" 
                      style={{ width: `${item.percentage}%` }}
                      aria-valuenow={item.percentage} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>

  );
}