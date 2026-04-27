import React, { useState } from 'react';
import { Search, Filter, Eye, Phone, MapPin, Car, Hash, ArrowRight } from 'lucide-react';
import Pagination from '../../components/Pagination';

const CustomerSearch = () => {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Customer Lookup</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Search and filter customers by vehicle plate, phone, or identity.</p>
      </div>

      <div className="card" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '16px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search Name, Phone, or Plate (e.g. ABC-1234)..." 
              style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} 
            />
          </div>
          <select style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'white', outline: 'none' }}>
            <option>All Vehicle Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck</option>
          </select>
          <select style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'white', outline: 'none' }}>
            <option>Status: All</option>
            <option>Active</option>
            <option>Pending Credit</option>
          </select>
          <button className="btn btn-primary" style={{ padding: '12px 24px' }}>Search</button>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ paddingLeft: '24px' }}>Customer</th>
              <th>Vehicle Details</th>
              <th>Contact Info</th>
              <th>Status</th>
              <th style={{ textAlign: 'right', paddingRight: '24px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'C-001', name: 'Jane Doe', plate: 'ABC-1234', type: 'Toyota Camry', phone: '+1 555-1234', status: 'Active' },
              { id: 'C-002', name: 'Robert Smith', plate: 'XYZ-9876', type: 'Honda Civic', phone: '+1 555-5678', status: 'Active' },
              { id: 'C-003', name: 'Alice Wilson', plate: 'GHI-5566', type: 'Ford F-150', phone: '+1 555-9012', status: 'Pending Credit' }
            ].map(item => (
              <tr key={item.id}>
                <td style={{ paddingLeft: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                      {item.name[0]}
                    </div>
                    <div>
                      <p style={{ fontWeight: '700', marginBottom: '2px' }}>{item.name}</p>
                      <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Hash size={10} /> {item.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Car size={16} style={{ color: 'var(--color-text-muted)' }} />
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '13px' }}>{item.plate}</p>
                      <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{item.type}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <p style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Phone size={12} style={{ color: 'var(--color-text-muted)' }} /> {item.phone}
                    </p>
                  </div>
                </td>
                <td>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: 'var(--radius-full)', 
                    backgroundColor: item.status === 'Active' ? '#ecfdf5' : '#fff7ed', 
                    color: item.status === 'Active' ? '#10b981' : '#f97316', 
                    fontSize: '11px', 
                    fontWeight: '700' 
                  }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                    View Profile
                    <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination totalItems={156} itemsPerPage={10} currentPage={1} />
      </div>
    </div>
  );
};

export default CustomerSearch;
