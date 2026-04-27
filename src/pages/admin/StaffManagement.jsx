import React, { useState } from 'react';
import { 
  Users, Plus, Search, Filter, Edit2, Trash2, 
  Shield, Mail, Phone, Calendar, MoreVertical,
  Activity, ShieldCheck, Clock, Award, UserPlus
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const PerformanceMetric = ({ title, value, icon: Icon, color }) => (
  <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${color}15`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={20} />
    </div>
    <div>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{title}</p>
      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>{value}</h4>
    </div>
  </div>
);

const StaffManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '4px' }}>Team Operations & Roles</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Oversee workforce permissions, track system activity, and manage credentials.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'white', border: '1px solid #d2d6da', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={16} /> Audit Logs
          </button>
          <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserPlus size={18} /> Register Personnel
          </button>
        </div>
      </div>

      {/* Team Health Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        <PerformanceMetric title="Active Staff" value="14 / 16" icon={Users} color="#1A73E8" />
        <PerformanceMetric title="Admin Accounts" value="3" icon={ShieldCheck} color="#D81B60" />
        <PerformanceMetric title="Uptime Stats" value="99.9%" icon={Clock} color="#43A047" />
        <PerformanceMetric title="Avg Task Rate" value="12/day" icon={Award} color="#FB8C00" />
      </div>

      {showAddForm && (
        <div className="card card-with-header" style={{ marginBottom: '48px', border: '2px solid var(--color-dark)' }}>
          <div className="card-header-float header-dark">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Personnel Registration Portal</h4>
          </div>
          <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <p className="label-caps">Full Name</p>
              <input type="text" placeholder="Johnathan Doe" className="enterprise-input" />
            </div>
            <div>
              <p className="label-caps">Corporate Email</p>
              <input type="email" placeholder="j.doe@autopart.corp" className="enterprise-input" />
            </div>
            <div>
              <p className="label-caps">Assigned Rank/Role</p>
              <select className="enterprise-input">
                <option>Systems Administrator</option>
                <option>Inventory Manager</option>
                <option>Senior Technician</option>
                <option>Sales Associate</option>
              </select>
            </div>
            <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px' }}>
              <button className="btn" style={{ background: '#f8fafc', border: '1px solid #d2d6da' }}>Save as Draft</button>
              <button className="btn btn-primary" style={{ padding: '12px 32px' }}>Activate Access</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Staff Directory */}
      <div className="card card-with-header" style={{ padding: 0 }}>
        <div className="card-header-float header-dark">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Personnel Directory</h4>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search size={14} color="white" />
              <input type="text" placeholder="Filter by name/ID..." style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '12px', outline: 'none', width: '150px' }} />
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '80px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ paddingLeft: '24px' }}>PERSONNEL</th>
                <th>ROLE & SECURITY</th>
                <th>CONTACT HUB</th>
                <th>HIRE DATE</th>
                <th style={{ textAlign: 'right', paddingRight: '24px' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'EMP-001', name: 'Robert Fox', role: 'Full Admin', email: 'robert@auto.com', date: 'Jan 12, 2023', color: '#D81B60' },
                { id: 'EMP-045', name: 'Cody Fisher', role: 'Inventory', email: 'cody@auto.com', date: 'Feb 28, 2023', color: '#1A73E8' },
                { id: 'EMP-089', name: 'Esther Howard', role: 'Technician', email: 'esther@auto.com', date: 'Mar 15, 2023', color: '#43A047' },
                { id: 'EMP-112', name: 'Jenny Wilson', role: 'Sales Lead', email: 'jenny@auto.com', date: 'May 02, 2023', color: '#FB8C00' },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td style={{ paddingLeft: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p style={{ fontWeight: '800', fontSize: '14px', margin: 0, color: 'var(--color-text-main)' }}>{item.name}</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '700' }}>ID: {item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Shield size={14} style={{ color: item.color }} />
                      <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--color-text-main)' }}>{item.role}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="icon-btn-elevated" style={{ width: '28px', height: '28px' }}><Mail size={12} /></div>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted)' }}>{item.email}</span>
                    </div>
                  </td>
                  <td><p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '700' }}>{item.date}</p></td>
                  <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                      <button className="icon-btn-elevated"><Edit2 size={14} /></button>
                      <button className="icon-btn-elevated" style={{ color: '#f44336' }}><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalItems={16} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
