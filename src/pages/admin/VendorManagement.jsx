import React from 'react';
import { Plus, Users, MapPin, Phone, Mail, Edit2, Trash2 } from 'lucide-react';

const VendorManagement = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Vendor Directory</h1>
        <button className="btn" style={{ background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          Register New Vendor
        </button>
      </div>

      <div className="card" style={{ marginTop: '40px', padding: 0 }}>
        <div className="card-header-float header-blue">
          <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Active Supply Partners</h4>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ paddingLeft: '24px' }}>Vendor Name</th>
                <th>Category</th>
                <th>Contact info</th>
                <th>Location</th>
                <th style={{ textAlign: 'right', paddingRight: '24px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Global Parts Inc.', cat: 'Engine/Service', mail: 'sales@global.com', loc: 'Berlin, DE' },
                { name: 'Titanium Brakes', cat: 'Braking Systems', mail: 'ops@titanium.com', loc: 'Chicago, US' }
              ].map((v, i) => (
                <tr key={i}>
                  <td style={{ paddingLeft: '24px' }}>
                    <p style={{ fontWeight: '700', margin: 0 }}>{v.name}</p>
                  </td>
                  <td><span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-text-muted)' }}>{v.cat}</span></td>
                  <td>
                    <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mail size={12} /> {v.mail}</span>
                    </div>
                  </td>
                  <td><span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}><MapPin size={14} /> {v.loc}</span></td>
                  <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                      <Edit2 size={16} style={{ cursor: 'pointer', color: '#1A73E8' }} />
                      <Trash2 size={16} style={{ cursor: 'pointer', color: '#f44336' }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
