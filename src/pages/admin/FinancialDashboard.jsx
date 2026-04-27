import React from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, ShoppingBag, 
  PieChart, Users, ArrowUpRight, MoreVertical,
  Calendar, Download, CheckCircle, Clock
} from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
  <div className="card card-with-header" style={{ marginTop: '30px' }}>
    <div className={`stat-icon-float ${colorClass}`}>
      <Icon size={24} />
    </div>
    <div style={{ textAlign: 'right', paddingBottom: '12px' }}>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '4px', fontWeight: '600' }}>{title}</p>
      <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-text-main)', margin: 0 }}>{value}</h3>
    </div>
    <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '16px', marginTop: '12px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
      <span style={{ color: isPositive ? '#4caf50' : '#f44336', fontWeight: '800', display: 'flex', alignItems: 'center' }}>
        {isPositive ? <ArrowUpRight size={16} /> : <TrendingDown size={16} />}
        {change}
      </span>
      <span style={{ color: 'var(--color-text-muted)', fontWeight: '500' }}>than yesterday</span>
    </div>
  </div>
);

const FinancialDashboard = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '4px' }}>Financial Nerve Center</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Real-time revenue tracking and performance analytics.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'white', border: '1px solid #d2d6da', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} /> Last 30 Days
          </button>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={16} /> Export Report
          </button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid-cols-4 m-b-xl">
        <StatCard title="Daily Revenue" value="$2,450" change="+15%" isPositive={true} icon={DollarSign} colorClass="header-blue" />
        <StatCard title="New Orders" value="48" change="+8%" isPositive={true} icon={ShoppingBag} colorClass="header-pink" />
        <StatCard title="Active Vendors" value="12" change="0%" isPositive={true} icon={Users} colorClass="header-green" />
        <StatCard title="Pending Payouts" value="$1,200" change="+32%" isPositive={false} icon={Clock} colorClass="header-orange" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Advanced Transaction Table */}
        <div className="card card-with-header" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="card-header-float header-dark">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Recent Financial Activity</h4>
              <MoreVertical size={20} style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
            </div>
          </div>
          <div style={{ marginTop: '80px' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ paddingLeft: '24px' }}>TRANSACTION</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th style={{ textAlign: 'right', paddingRight: '24px' }}></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#TRX-9901', desc: 'Bulk Engine Oil Purchase', date: 'Today, 12:45 PM', amount: '-$1,250.00', status: 'COMPLETED', color: '#4caf50' },
                  { id: '#TRX-9902', desc: 'Customer Payment - INV-44', date: 'Today, 10:30 AM', amount: '+$450.00', status: 'PENDING', color: '#fb8c00' },
                  { id: '#TRX-9903', desc: 'Staff Salary - April', date: 'Yesterday', amount: '-$5,400.00', status: 'COMPLETED', color: '#4caf50' },
                  { id: '#TRX-9904', desc: 'Vendor Refund', date: 'Apr 25, 2024', amount: '+$120.00', status: 'CANCELLED', color: '#f44336' },
                ].map((trx, idx) => (
                  <tr key={idx}>
                    <td style={{ paddingLeft: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <TrendingUp size={16} color={trx.amount.startsWith('+') ? '#4caf50' : '#f44336'} />
                        </div>
                        <div>
                          <p style={{ fontWeight: '800', fontSize: '14px', margin: 0, color: 'var(--color-text-main)' }}>{trx.desc}</p>
                          <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0 }}>{trx.id}</p>
                        </div>
                      </div>
                    </td>
                    <td><p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '600' }}>{trx.date}</p></td>
                    <td><p style={{ fontSize: '14px', fontWeight: '800', margin: 0, color: trx.amount.startsWith('+') ? '#4caf50' : 'var(--color-text-main)' }}>{trx.amount}</p></td>
                    <td>
                      <span style={{ 
                        fontSize: '10px', 
                        fontWeight: '800', 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        background: `${trx.color}15`, 
                        color: trx.color,
                        border: `1px solid ${trx.color}30`
                      }}>
                        {trx.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #f0f2f5' }}>
              <button style={{ background: 'transparent', border: 'none', color: 'var(--color-blue)', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}>VIEW ALL TRANSACTIONS</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Performance Widget */}
        <div className="card card-with-header">
          <div className="card-header-float header-pink">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Revenue Sources</h4>
          </div>
          <div style={{ marginTop: '80px' }}>
            <div style={{ position: 'relative', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
              {/* Dummy Chart Placeholder */}
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', border: '15px solid #f0f2f5', borderTopColor: '#e91e63', borderRightColor: '#2196f3', transform: 'rotate(45deg)' }}></div>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>84%</h4>
                <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: '700' }}>TARGET</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Direct Sales', value: 65, color: '#e91e63' },
                { label: 'Service Fees', value: 25, color: '#2196f3' },
                { label: 'Subsidies', value: 10, color: '#4caf50' }
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: item.color }}></div>
                      <span style={{ fontSize: '13px', fontWeight: '700' }}>{item.label}</span>
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: '700' }}>{item.value}%</span>
                  </div>
                  <div style={{ height: '4px', background: '#f0f2f5', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.value}%`, height: '100%', background: item.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
