import React from 'react';
import { BarChart3, Users, TrendingUp, AlertTriangle } from 'lucide-react';

const CustomerReports = () => {
  const categories = [
    { label: 'Regular Customers', count: 45, icon: Users, color: 'var(--color-primary)' },
    { label: 'High Spenders', count: 12, icon: TrendingUp, color: 'var(--color-success)' },
    { label: 'Pending Credits', count: 8, icon: AlertTriangle, color: 'var(--color-error)' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Customer Insights</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Analyze customer behavior and credit risk.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
        {categories.map(cat => (
          <div className="card" key={cat.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--color-bg-main)', color: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <cat.icon size={20} />
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', fontWeight: '500', marginBottom: '4px' }}>{cat.label}</p>
            <h2 style={{ fontSize: '28px' }}>{cat.count}</h2>
          </div>
        ))}
      </div>

      <div className="card">
        <h4 style={{ marginBottom: '24px' }}>Top Spenders (Last 30 Days)</h4>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Visits</th>
              <th>Total Spent</th>
              <th>Loyalty Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: '600' }}>Robert Brown</td>
              <td>5</td>
              <td style={{ fontWeight: '700', color: 'var(--color-primary)' }}>$3,200.00</td>
              <td><span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-warning)' }}>PLATINUM</span></td>
              <td><span style={{ padding: '4px 10px', borderRadius: 'var(--radius-full)', backgroundColor: '#ecfdf5', color: '#10b981', fontSize: '12px', fontWeight: '600' }}>Active</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600' }}>John Smith</td>
              <td>3</td>
              <td style={{ fontWeight: '700', color: 'var(--color-primary)' }}>$820.00</td>
              <td><span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-text-muted)' }}>SILVER</span></td>
              <td><span style={{ padding: '4px 10px', borderRadius: 'var(--radius-full)', backgroundColor: '#ecfdf5', color: '#10b981', fontSize: '12px', fontWeight: '600' }}>Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerReports;
