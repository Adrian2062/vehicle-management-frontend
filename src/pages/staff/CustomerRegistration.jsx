import React from 'react';
import { UserPlus, Car, Info, Save } from 'lucide-react';

const CustomerRegistration = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Onboard New Customer</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Register personal and vehicle information for the system.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Customer Registered!')}>
          <Save size={18} />
          Complete Registration
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserPlus size={18} />
            </div>
            <h4 style={{ margin: 0 }}>Personal Information</h4>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Full Name</p>
              <input type="text" placeholder="e.g. Jane Doe" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Phone Number</p>
                <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
              </div>
              <div>
                <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Email Address</p>
                <input type="email" placeholder="jane@example.com" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
              </div>
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Primary Address</p>
              <textarea placeholder="Street, City, Zip" style={{ width: '100%', height: '80px', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px', resize: 'none' }}></textarea>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Car size={18} />
            </div>
            <h4 style={{ margin: 0 }}>Vehicle Specification</h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>License Plate</p>
                <input type="text" placeholder="ABC-1234" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
              </div>
              <div>
                <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Vehicle Type</p>
                <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px', backgroundColor: 'white' }}>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Truck</option>
                  <option>Motorcycle</option>
                </select>
              </div>
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Make & Model</p>
              <input type="text" placeholder="e.g. 2022 Toyota Camry" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Engine / VIN Number</p>
              <input type="text" placeholder="17-character VIN" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px' }} />
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Info size={18} style={{ color: 'var(--color-primary)', marginTop: '2px' }} />
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0 }}>This information will be used for automated service reminders and part compatibility checks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
