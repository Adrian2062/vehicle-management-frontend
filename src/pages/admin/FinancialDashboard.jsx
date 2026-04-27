import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, PieChart, Users } from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
  <div className="card" style={{ marginTop: '30px' }}>
    <div className={`stat-icon-float ${colorClass}`}>
      <Icon size={24} />
    </div>
    <div style={{ textAlign: 'right', paddingBottom: '12px' }}>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '4px' }}>{title}</p>
      <h4 style={{ fontSize: '24px', fontWeight: '700' }}>{value}</h4>
    </div>
    <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '12px', fontSize: '14px' }}>
      <span style={{ color: isPositive ? '#4caf50' : '#f44336', fontWeight: '700', marginRight: '4px' }}>{change}</span>
      <span style={{ color: 'var(--color-text-muted)' }}>than last week</span>
    </div>
  </div>
);

const FinancialDashboard = () => {
  return (
    <div>
      {/* Top Stats Grid */}
      <div className="grid-cols-4 m-b-xl">
        <StatCard title="Total Revenue" value="$48,250" change="+12%" isPositive={true} icon={DollarSign} colorClass="header-blue" />
        <StatCard title="Total Purchases" value="$22,140" change="-2%" isPositive={false} icon={ShoppingBag} colorClass="header-pink" />
        <StatCard title="Net Profit" value="$26,110" change="+18%" isPositive={true} icon={PieChart} colorClass="header-green" />
        <StatCard title="Active Users" value="1,250" change="+5%" isPositive={true} icon={Users} colorClass="header-orange" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Main Transactions Card with Floating Header */}
        <div className="card card-with-header" style={{ marginTop: '40px' }}>
          <div className="card-header-float header-dark">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Recent Transactions</h4>
          </div>
          <div style={{ marginTop: '80px' }}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: '700' }}>TRX-101</td>
                  <td>Apr 27, 2024</td>
                  <td>Sales</td>
                  <td style={{ color: '#4caf50', fontWeight: '700' }}>+$1,200.00</td>
                  <td><span style={{ fontSize: '11px', fontWeight: '700', color: '#4caf50' }}>COMPLETED</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '700' }}>TRX-102</td>
                  <td>Apr 27, 2024</td>
                  <td>Purchase</td>
                  <td style={{ color: '#f44336', fontWeight: '700' }}>-$850.00</td>
                  <td><span style={{ fontSize: '11px', fontWeight: '700', color: '#4caf50' }}>COMPLETED</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Categories Card */}
        <div className="card card-with-header" style={{ marginTop: '40px' }}>
          <div className="card-header-float header-blue">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Revenue Distribution</h4>
          </div>
          <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Engine Parts', value: 75, color: '#1A73E8' },
              { label: 'Brakes', value: 60, color: '#43A047' },
              { label: 'Electrical', value: 45, color: '#FB8C00' }
            ].map(item => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700' }}>{item.label}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{item.value}%</span>
                </div>
                <div style={{ height: '4px', backgroundColor: '#f0f2f5', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.value}%`, height: '100%', backgroundColor: item.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
