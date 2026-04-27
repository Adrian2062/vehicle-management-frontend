import React from 'react';
import { User, Car, History, CreditCard, Mail, Phone } from 'lucide-react';

const CustomerDetails = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Customer Profile</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Detailed view of customer history and vehicle data.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary">
            <Mail size={18} />
            Email Profile
          </button>
          <button className="btn btn-primary">Edit Details</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        <div className="card">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '32px', fontWeight: '800' }}>JD</div>
            <h3>Jane Doe</h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Customer since 2022</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
              <Mail size={16} style={{ color: 'var(--color-text-muted)' }} />
              <span>jane.doe@example.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
              <Phone size={16} style={{ color: 'var(--color-text-muted)' }} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
              <CreditCard size={16} style={{ color: 'var(--color-text-muted)' }} />
              <span style={{ fontWeight: '600', color: 'var(--color-success)' }}>$0.00 Outstanding</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card">
            <h4 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Car size={18} />
              Registered Vehicles
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: '700' }}>ABC-1234</p>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>2022 Toyota Camry (Sedan)</p>
              </div>
              <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: '700' }}>XYZ-9876</p>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>2021 Honda Civic (Sedan)</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h4 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <History size={18} />
              Recent Purchase History
            </h4>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apr 15, 2024</td>
                  <td>Brake Pad Replacement</td>
                  <td style={{ fontWeight: '700' }}>$125.00</td>
                  <td><span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-success)' }}>PAID</span></td>
                </tr>
                <tr>
                  <td>Mar 02, 2024</td>
                  <td>Engine Tuning</td>
                  <td style={{ fontWeight: '700' }}>$450.00</td>
                  <td><span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-success)' }}>PAID</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
