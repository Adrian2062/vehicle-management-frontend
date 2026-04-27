import React from 'react';
import { Home, Clock, Calendar, Car, ShoppingBag, Settings } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Welcome Back, Jane!</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Track your service history and manage your vehicle profile.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
        <div className="card" style={{ marginTop: '30px' }}>
          <div className="stat-icon-float header-blue">
            <Car size={24} />
          </div>
          <div style={{ textAlign: 'right', paddingBottom: '12px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '4px' }}>My Vehicle</p>
            <h4 style={{ fontSize: '20px', fontWeight: '700' }}>Toyota Camry</h4>
          </div>
        </div>
        <div className="card" style={{ marginTop: '30px' }}>
          <div className="stat-icon-float header-green">
            <ShoppingBag size={24} />
          </div>
          <div style={{ textAlign: 'right', paddingBottom: '12px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '4px' }}>Total Purchases</p>
            <h4 style={{ fontSize: '20px', fontWeight: '700' }}>14 Items</h4>
          </div>
        </div>
        <div className="card" style={{ marginTop: '30px' }}>
          <div className="stat-icon-float header-orange">
            <Clock size={24} />
          </div>
          <div style={{ textAlign: 'right', paddingBottom: '12px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '4px' }}>Next Service</p>
            <h4 style={{ fontSize: '20px', fontWeight: '700' }}>In 14 Days</h4>
          </div>
        </div>
      </div>

      <div className="card card-with-header" style={{ marginTop: '40px', padding: 0 }}>
        <div className="card-header-float header-dark">
          <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Recent Service Activity</h4>
        </div>
        <div style={{ marginTop: '80px', padding: '0 24px 24px' }}>
          <table>
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Description</th>
                <th>Date</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: '700' }}>SRV-441</td>
                <td>Oil Change & Filter Replacement</td>
                <td>Apr 20, 2024</td>
                <td>$120.00</td>
                <td><span style={{ fontSize: '11px', fontWeight: '700', color: '#10b981' }}>COMPLETED</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
