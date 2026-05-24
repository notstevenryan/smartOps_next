'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';

// --- DATA ---
// Each service maps to its step id from the list page
const services = {
  1: {
    title: "Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Free",
    description:
      "Distribution of fish seeds for free will be conducted to clients with letter requests depending on the availability of fingerlings. If there are no available fingerlings during the time of the request, the dispersal will be scheduled on a first come first serve basis.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: {
      email: [{ label: "1. Letter Request", note: "(1) Electronic Copy", source: "Applicant/Client" }],
      walkIn: [{ label: "1. Client Fish Seed Request Form", note: "(1) Original Copy", source: "BFAR-NIFTC Fish Production Unit" }],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru E-mail Path",
            clientAction: "Submit the request through e-mail address: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.1", text: "Receive the client's letter request, then prepare a reply letter for the approval of the Center Chief.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant IV, National Inland Fisheries Technology Center" },
              { code: "1.A.2", text: "Endorse the letter request to the Chief Aquaculturist for his approval and signature.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Supervising Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.3", text: "Review, approve and sign the letter provided by the client.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.4", text: "Send a signed reply letter to the client stating the schedule of fingerling distribution through the e-mail provided by the client.", time: "~5 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Walk-in Path",
            clientAction: "Submit the accomplished Client Fish Seed Request Form to:\nAdministrative Office: BFAR-NIFTC km 53 Manila East Road, Sitio Tayak, Brgy. Tandang Muna, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.1", text: "Receive the client's accomplished Client Fish Seed Request Form and endorse to the Center Chief for approval.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant IV, National Inland Fisheries Technology Center" },
              { code: "1.B.2", text: "Approve and sign Client Fish Seed Request Form to allow distribution of fingerlings and coordinate with the Dispersal Office for distribution.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Distribution and Request",
        paths: [
          {
            label: null,
            clientAction: "Receive the requested fish seed at Fish Production and Dispersal Section: BFAR-NIFTC Km 53 Manila East Road, Sitio Tayak, Brgy. Tandang Muna, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "2", text: "Distribute the requested fish seed (actual loading and packing of fingerlings).", time: "~2 hours", person: "Aquaculturist I, National Inland Fisheries Technology Center; Aquaculture Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Accomplish the filled-out Client Satisfaction/Feedback Form at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "3", text: "Receive the accomplished Client Satisfaction/Feedback form provided.", time: "~5 mins", person: "Administrative Assistant IV, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: { email: "2 hour/s", walkIn: "2 hours, 25 minutes/s" },
    totalFee: { email: "None", walkIn: "None" },
    totalFeeLabel: {
      email: "*If Thru E-mail (Submit letter request through E-mail)",
      walkIn: "*If Thru Walk-in (Secure and submit the accomplished Client Fish Seed Request Form provided)",
    },
  },
  // Add more services here following the same shape
};

const InfoChip = ({ icon, label, value }) => (
  <div className="d-flex align-items-start gap-2 p-3 bg-body border rounded-3 flex-grow-1" style={{ minWidth: '160px' }}>
    <i className={`bi ${icon} text-primary mt-1`}></i>
    <div>
      <div className="text-muted" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div className="fw-semibold text-body-emphasis small">{value}</div>
    </div>
  </div>
);

const listen = (text) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    window.speechSynthesis.speak(u);
  }
};

const ListenButton = ({ text }) => (
  <button
    onClick={() => listen(text)}
    className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
    style={{ fontSize: '0.7rem' }}
  >
    <i className="bi bi-volume-up-fill text-primary"></i>
    <span className="fw-bold text-muted">Listen</span>
  </button>
);

// TO
import { use } from 'react';

export default function ArtaStepDetail({ params }) {
  const { step } = use(params);
  const stepId = parseInt(step);
  const service = services[stepId];

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="container my-5 text-center">
          <h2 className="fw-bold">Service not found</h2>
          <p className="text-muted">This step doesn't have a detail page yet.</p>
          <Link href="/00arta-steps" className="btn btn-primary rounded-pill px-4">← Back to Charter</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="container my-4" style={{ maxWidth: '860px' }}>

        {/* Back nav */}
        <Link href="/00arta-steps" className="btn btn-link p-0 text-decoration-none text-muted small mb-3 d-flex align-items-center gap-1">
          <i className="bi bi-arrow-left"></i> Back to Charter
        </Link>

        {/* Internal Services badge */}
        <div className="mb-3">
          <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 small fw-bold">
            <i className="bi bi-building me-1"></i> Internal Services
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="h4 fw-black text-body-emphasis mb-2">{service.title}</h1>
        <p className="text-muted small mb-4">{service.description}</p>

        {/* Info chips */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <InfoChip icon="bi-building" label="Office or Division" value={service.info.office} />
          <InfoChip icon="bi-tag" label="Classification" value={service.info.classification} />
          <InfoChip icon="bi-arrow-left-right" label="Type of Transactions" value={service.info.transactionType} />
          <InfoChip icon="bi-clock" label="Operating Hours" value={service.info.operatingHours} />
        </div>

        {/* Who May Avail */}
        <div className="card border-0 bg-body-tertiary rounded-3 p-3 mb-3 d-flex flex-row align-items-start gap-3">
          <i className="bi bi-person-check-fill text-primary fs-5 mt-1 flex-shrink-0"></i>
          <div>
            <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Who May Avail</div>
            <div className="small text-body-emphasis fw-semibold">{service.whoMayAvail}</div>
          </div>
        </div>

        {/* Requirements */}
        <div className="card border rounded-3 mb-4 overflow-hidden">
          <div className="card-header bg-body-tertiary border-bottom fw-bold small py-2 px-3">
            Checklist for Requirements
          </div>
          <div className="card-body p-0">
            <div className="row g-0">
              {/* Email */}
              <div className="col-12 col-md-6 p-3 border-end-md">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-envelope text-primary"></i>
                  <span className="fw-bold small">A. For Email Request</span>
                </div>
                {service.requirements.email.map((r, i) => (
                  <div key={i} className="small">
                    <span className="fw-semibold text-body-emphasis">{r.label}</span>
                    <span className="text-muted ms-1">{r.note}</span>
                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>Where to secure: <span className="fw-semibold">{r.source}</span></div>
                  </div>
                ))}
              </div>
              {/* Walk-in */}
              <div className="col-12 col-md-6 p-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-person-walking text-primary"></i>
                  <span className="fw-bold small">B. Through Walk-in</span>
                </div>
                {service.requirements.walkIn.map((r, i) => (
                  <div key={i} className="small">
                    <span className="fw-semibold text-body-emphasis">{r.label}</span>
                    <span className="text-muted ms-1">{r.note}</span>
                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>Where to secure Agency/Division: <span className="fw-semibold">{r.source}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step */}
        <h2 className="h6 fw-black text-body-emphasis mb-3 text-uppercase" style={{ letterSpacing: '0.05em' }}>Step-by-Step Procedure</h2>

        <div className="d-flex flex-column gap-4 mb-4">
          {service.steps.map((step) => (
            <div key={step.num} className="card border-0 shadow-sm rounded-4 overflow-hidden">
              {/* Step header */}
              <div className="d-flex align-items-center gap-3 p-3 bg-primary text-white">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white text-primary fw-black flex-shrink-0"
                  style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}
                >
                  {step.num}
                </div>
                <span className="fw-bold">{step.title}</span>
                <ListenButton text={`Step ${step.num}: ${step.title}`} />
              </div>

              {/* Paths */}
              <div className="card-body p-0">
                {step.paths.map((path, pi) => (
                  <div key={pi} className={pi > 0 ? 'border-top' : ''}>
                    {/* Path label */}
                    {path.label && (
                      <div className="px-3 pt-3 pb-1 d-flex align-items-center justify-content-between">
                        <span className="fw-bold small text-body-emphasis">{path.label}</span>
                        <ListenButton text={path.label} />
                      </div>
                    )}

                    <div className="row g-0">
                      {/* Client Action */}
                      <div className="col-12 col-md-5 p-3 bg-body-tertiary border-end">
                        <div className="text-muted fw-bold mb-2" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Client Action</div>
                        <p className="small text-body-emphasis mb-3" style={{ whiteSpace: 'pre-line' }}>{path.clientAction}</p>
                        <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fees to be Paid</div>
                        <span className="small text-muted">{path.clientFees}</span>
                      </div>

                      {/* Agency Action */}
                      <div className="col-12 col-md-7 p-3">
                        <div className="text-muted fw-bold mb-2" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Agency Action</div>
                        <div className="d-flex flex-column gap-2">
                          {path.agencyActions.map((a, ai) => (
                            <div key={ai} className="card border-0 bg-body-tertiary rounded-3 p-2">
                              <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                                <span className="small fw-semibold text-body-emphasis">{a.code}. {a.text}</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill flex-shrink-0" style={{ fontSize: '0.6rem' }}>{a.time}</span>
                              </div>
                              <div className="text-muted" style={{ fontSize: '0.6rem' }}>
                                Person Responsible: {a.person}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Total Processing Time */}
        <div className="card border-0 rounded-4 mb-3 overflow-hidden" style={{ background: 'var(--bs-primary)' }}>
          <div className="d-flex justify-content-between align-items-center px-4 py-3">
            <span className="fw-black text-white">Total Processing Time</span>
          </div>
          <div className="row g-0 px-3 pb-3">
            <div className="col-12 col-md-6 pe-md-2 mb-2 mb-md-0">
              <div className="bg-white bg-opacity-10 rounded-3 p-3">
                <div className="text-white-50 mb-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                  <i className="bi bi-envelope"></i> *If Thru E-mail ()
                </div>
                <span className="text-white fw-bold small">{service.totalTime.email}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 ps-md-2">
              <div className="bg-white bg-opacity-10 rounded-3 p-3">
                <div className="text-white-50 mb-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                  <i className="bi bi-person-walking"></i> *If Thru Walk-in ()
                </div>
                <span className="text-white fw-bold small">{service.totalTime.walkIn}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total Processing Fee */}
        <div className="card border-0 rounded-4 mb-5 overflow-hidden" style={{ background: 'var(--bs-primary)' }}>
          <div className="d-flex justify-content-between align-items-center px-4 py-3">
            <span className="fw-black text-white">Total Processing Fee</span>
          </div>
          <div className="row g-0 px-3 pb-3">
            <div className="col-12 col-md-6 pe-md-2 mb-2 mb-md-0">
              <div className="bg-white bg-opacity-10 rounded-3 p-3">
                <div className="text-white-50 mb-1" style={{ fontSize: '0.65rem' }}>{service.totalFeeLabel.email}</div>
                <span className="text-white fw-bold small">{service.totalFee.email}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 ps-md-2">
              <div className="bg-white bg-opacity-10 rounded-3 p-3">
                <div className="text-white-50 mb-1" style={{ fontSize: '0.65rem' }}>{service.totalFeeLabel.walkIn}</div>
                <span className="text-white fw-bold small">{service.totalFee.walkIn}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="d-flex justify-content-end mb-5">
          <Link href="/00arta-steps" className="btn btn-primary rounded-3 px-4 fw-bold shadow-sm">
            ← Back to Charter
          </Link>
        </div>

      </main>
    </>
  );
}