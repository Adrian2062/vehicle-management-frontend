import React, { useState } from 'react';
import { Users, Plus, Search, Filter, Edit2, Trash2, Shield, Mail, Phone, Calendar } from 'lucide-react';
import Pagination from '../../components/Pagination';

const StaffManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Staff & Roles</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Manage employee accounts, permissions, and system access.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          <Plus size={18} />
          {showAddForm ? 'Cancel' : 'Register Staff'}
        </button>
      </div>

      <div className="card" style={{ marginBottom: '24px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search by name, email, or employee ID..." 
              style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} 
            />
          </div>
          <select style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'white', outline: 'none' }}>
            <option>All Roles</option>
            <option>Admin</option>
            <option>Staff</option>
            <option>Technician</option>
          </select>
          <button className="btn btn-secondary">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="card" style={{ marginBottom: '32px', border: '2px solid var(--color-primary-light)' }}>
          <h4 style={{ marginBottom: '24px' }}>Register New Staff Member</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Full Name</p>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Work Email</p>
              <input type="email" placeholder="john@autopart.com" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Phone Number</p>
              <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Assigned Role</p>
              <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'white', outline: 'none' }}>
                <option>Staff</option>
                <option>Admin</option>
                <option>Technician</option>
              </select>
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Employment ID</p>
              <input type="text" placeholder="EMP-2024-001" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Complete Registration</button>
            </div>
          </div>
        </div>
      )}

      <div className="card card-with-header" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="card-header-float header-dark">
          <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Active Staff Directory</h4>
        </div>
        <div style={{ marginTop: '80px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ paddingLeft: '24px' }}>Employee</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Joined Date</th>
                <th style={{ textAlign: 'right', paddingRight: '24px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'Robert Fox', idStr: 'EMP-001', role: 'Admin', email: 'robert@auto.com', date: 'Jan 12, 2023' },
                { id: 2, name: 'Cody Fisher', idStr: 'EMP-045', role: 'Staff', email: 'cody@auto.com', date: 'Feb 28, 2023' },
                { id: 3, name: 'Esther Howard', idStr: 'EMP-089', role: 'Technician', email: 'esther@auto.com', date: 'Mar 15, 2023' }
              ].map(item => (
                <tr key={item.id}>
                  <td style={{ paddingLeft: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0f2f5', color: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p style={{ fontWeight: '700', marginBottom: '2px', fontSize: '14px', margin: 0 }}>{item.name}</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0 }}>ID: {item.idStr}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Shield size={14} style={{ color: item.role === 'Admin' ? 'var(--color-primary)' : 'var(--color-text-muted)' }} />
                      <span style={{ fontWeight: '600', fontSize: '13px' }}>{item.role}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        <Mail size={12} /> {item.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                      <Calendar size={14} style={{ color: 'var(--color-text-muted)' }} />
                      {item.date}
                    </div>
                  </td>
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
          <Pagination totalItems={12} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
