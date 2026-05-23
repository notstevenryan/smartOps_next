// app/services/page.js
import Navbar from '../components/Navbar';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="fw-bold text-dark mb-3">Technical Assistance Services</h2>
        <p className="text-muted">Select an option to file your requested bureau technical assistance.</p>
        <hr />
        <div className="p-5 text-center bg-light rounded-4 border border-dashed">
          <i className="bi bi-folder-plus text-secondary display-4"></i>
          <p className="mt-2 text-secondary">Service filing submission flow module loads here.</p>
        </div>
      </div>
    </>
  );
}