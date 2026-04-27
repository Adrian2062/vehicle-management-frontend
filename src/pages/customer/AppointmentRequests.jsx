import React from 'react';
import { Calendar, PenTool, MessageSquare, CheckCircle } from 'lucide-react';

const AppointmentRequests = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Service Requests</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Schedule maintenance or request hard-to-find components.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={18} />
            </div>
            <h4 style={{ margin: 0 }}>Book Maintenance</h4>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Target Vehicle</p>
              <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px', backgroundColor: 'white' }}>
                <option>Toyota Camry (ABC-1234)</option>
                <option>Honda Civic (XYZ-9876)</option>
              </select>
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Preferred Service Date</p>
              <input type="date" style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Maintenance Type</p>
              <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px', backgroundColor: 'white' }}>
                <option>Oil & Filter Change</option>
                <option>Full Engine Diagnostic</option>
                <option>Brake Pad Replacement</option>
                <option>Suspension Check</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '12px' }}>
              <CheckCircle size={18} />
              Submit Booking
            </button>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PenTool size={18} />
            </div>
            <h4 style={{ margin: 0 }}>Special Part Inquiry</h4>
          </div>
          
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '20px' }}>Can't find a specific part in our inventory? Submit a request and our sourcing team will find it for you.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Part Name / Description</p>
              <input type="text" placeholder="e.g. OEM Carbon Fiber Interior Kit" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Additional Details</p>
              <textarea placeholder="Specify model years, engine types, or part numbers..." style={{ width: '100%', height: '120px', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px', resize: 'none' }}></textarea>
            </div>
            <button className="btn btn-secondary" style={{ marginTop: '12px' }}>
              <MessageSquare size={18} />
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequests;
