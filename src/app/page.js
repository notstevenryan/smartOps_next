// app/page.js
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container my-5 flex-grow-1">
        
        {/* --- HERO BANNER --- */}
        <div className="row p-4 p-md-5 mb-5 rounded-4 bg-primary text-white align-items-center shadow-sm position-relative overflow-hidden bg-gradient">
          <div className="col-lg-7 my-3 z-1">
            <span className="badge bg-body-tertiary text-primary rounded-pill mb-3 px-3 py-2 fw-semibold shadow-sm">
              <i className="bi bi-shield-check me-1"></i> GOVERNMENT SERVICE
            </span>
            <h1 className="display-5 fw-bold mb-3 tracking-tight">
              BFAR-National Inland Fisheries Technology Center
            </h1>
            <p className="lead opacity-90 mb-4 fs-6">
              A modern, accessible kiosk for fisherfolk, farmers, and citizens to request technical assistance and provide feedback to BFAR.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-white btn-lg text-primary fw-bold rounded-3 shadow px-4 fs-6 bg-body-tertiary">
                Get Started <i className="bi bi-arrow-right ms-1"></i>
              </Link>
              <Link href="/arta-steps" className="btn btn-warning btn-lg text-dark fw-bold rounded-3 shadow px-4 fs-6">
                <i className="bi bi-check-circle-fill me-1"></i> View ARTA Steps
              </Link>
              <Link href="/charter" className="btn btn-outline-light btn-lg rounded-3 px-4 fs-6">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Compliance & Bureau Logos Display Area */}
          <div className="col-lg-5 my-3 d-flex justify-content-center align-items-center">
            <div className="bg-body-tertiary bg-opacity-10 p-4 rounded-4 w-100 text-center border border-white border-opacity-20 backdrop-blur" style={{ minHeight: '220px' }}>
              <div className="d-flex justify-content-center gap-3 mb-3">
                <div className="bg-body-tertiary rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-globe text-primary fs-3"></i>
                </div>
                <div className="bg-body-tertiary rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-water text-info fs-3"></i>
                </div>
              </div>
              <div className="bg-body-tertiary p-3 rounded-3 text-dark shadow-sm">
                <h5 className="fw-black m-0 tracking-widest text-secondary text-uppercase small">ARTA COMPLIANT</h5>
                <p className="small text-muted m-0">Anti-Red Tape Authority Office of the President</p>
              </div>
            </div>
          </div>
        </div>


        {/* --- SERVICE MODULE CARDS --- */}
        <div className="row g-4 mb-5">
          {/* Card 1: Technical Assistance */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
              <div className="card-body d-flex flex-column">
                <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-3 d-inline-block align-self-start">
                  <i className="bi bi-file-earmark-text fs-4"></i>
                </div>
                <h4 className="card-title fw-bold text-dark h5">Technical Assistance</h4>
                <p className="card-text text-muted small flex-grow-1">
                  Request help for fisheries, aquaculture, and agricultural concerns.
                </p>
                <Link href="/services" className="text-primary fw-semibold text-decoration-none mt-3 small d-inline-flex align-items-center">
                  Open service <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Citizen's Charter */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
              <div className="card-body d-flex flex-column">
                <div className="bg-warning bg-opacity-10 text-warning rounded-3 p-3 mb-3 d-inline-block align-self-start">
                  <i className="bi bi-assignment-check-fill fs-4"></i>
                </div>
                <h4 className="card-title fw-bold text-dark h5">Citizen's Charter</h4>
                <p className="card-text text-muted small flex-grow-1">
                  Know your rights and the services we are mandated to deliver.
                </p>
                <Link href="/charter" className="text-primary fw-semibold text-decoration-none mt-3 small d-inline-flex align-items-center">
                  Open service <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Client Feedback */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
              <div className="card-body d-flex flex-column">
                <div className="bg-info bg-opacity-10 text-info rounded-3 p-3 mb-3 d-inline-block align-self-start">
                  <i className="bi bi-chat-heart fs-4"></i>
                </div>
                <h4 className="card-title fw-bold text-dark h5">Client Feedback</h4>
                <p className="card-text text-muted small flex-grow-1">
                  Share your experience to help us improve public service.
                </p>
                <Link href="/contact" className="text-primary fw-semibold text-decoration-none mt-3 small d-inline-flex align-items-center">
                  Open service <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* --- HOW IT WORKS TIMELINE --- */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-5 bg-body-tertiary">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h3 className="fw-bold m-0 text-dark h4">How it works</h3>
              <p className="text-muted m-0 small">Four quick steps. The voice assistant below can guide you anytime.</p>
            </div>
            <span className="badge bg-light text-primary border border-primary border-opacity-10 rounded-pill px-3 py-2 fw-semibold">
              <i className="bi bi-clock me-1"></i> ~5 minutes
            </span>
          </div>

          <div className="row g-4 position-relative">
            {/* Step 1 */}
            <div className="col-6 col-lg-3 text-center">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '40px', height: '40px' }}>1</div>
                <h6 className="fw-bold text-dark small mb-1">Technical Assistance</h6>
              </div>
            </div>
            {/* Step 2 */}
            <div className="col-6 col-lg-3 text-center">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '40px', height: '40px' }}>2</div>
                <h6 className="fw-bold text-dark small mb-1">Client Profile</h6>
              </div>
            </div>
            {/* Step 3 */}
            <div className="col-6 col-lg-3 text-center">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '40px', height: '40px' }}>3</div>
                <h6 className="fw-bold text-dark small mb-1">Citizen's Charter</h6>
              </div>
            </div>
            {/* Step 4 */}
            <div className="col-6 col-lg-3 text-center">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '40px', height: '40px' }}>4</div>
                <h6 className="fw-bold text-dark small mb-1">Survey & Feedback</h6>
              </div>
            </div>
          </div>
        </div>


        {/* --- BOTTOM QUICK CONTACT / META FOOTER INFOBAR --- */}
        <div className="row g-3">
          {/* Phone */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-body-tertiary">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light text-primary rounded-3 p-2 px-3"><i className="bi bi-telephone"></i></div>
                <div>
                  <div className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem' }}>Telephone Number</div>
                  <div className="fw-bold text-dark small">0997-745-9961</div>
                </div>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-body-tertiary">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light text-primary rounded-3 p-2 px-3"><i className="bi bi-envelope"></i></div>
                <div>
                  <div className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem' }}>Email</div>
                  <div className="fw-bold text-dark small">niftco@bfar.da.gov.ph</div>
                </div>
              </div>
            </div>
          </div>
          {/* Address */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-body-tertiary">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light text-primary rounded-3 p-2 px-3"><i className="bi bi-geo-alt"></i></div>
                <div>
                  <div className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem' }}>Address</div>
                  <div className="fw-bold text-dark line-clamp" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>Km.53 Manila East Road, Sitio Suyoc, Tandang Kutyo, Tanay Rizal</div>
                </div>
              </div>
            </div>
          </div>
          {/* Hours */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-body-tertiary">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light text-primary rounded-3 p-2 px-3"><i className="bi bi-clock"></i></div>
                <div>
                  <div className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem' }}>Office Hours</div>
                  <div className="fw-bold text-dark small">Mon–Fri - 8AM–5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}