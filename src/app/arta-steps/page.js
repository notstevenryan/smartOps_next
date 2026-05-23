// app/arta-steps/page.js
import Navbar from '../components/Navbar';

export default function ArtaStepsPage() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="fw-bold text-dark mb-3">ARTA Compliance Directives</h2>
        <p className="text-muted">Adhering strictly to anti-red tape policies for swift government operations.</p>
        <hr />
        <div className="p-5 text-center bg-light rounded-4 border border-dashed">
          <i className="bi bi-shield-check text-success display-4"></i>
          <p className="mt-2 text-secondary">Anti-Red Tape standards framework rules repository visualization.</p>
        </div>
      </div>
    </>
  );
}