import React from 'react';
import { 
  Users, ShoppingCart, Search, ClipboardList, 
  BarChart3, Mail, UserPlus, Clock, 
  CheckCircle, ArrowRight, TrendingUp
} from 'lucide-react';

const QuickAction = ({ title, icon: Icon, color, onClick }) => (
  <div 
    className="card" 
    onClick={onClick}
    style={{ 
      padding: '24px', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      border: '1px solid #f1f5f9'
    }}
  >
    <div style={{ 
      width: '56px', 
      height: '56px', 
      borderRadius: '16px', 
      background: `${color}15`, 
      color: color, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      boxShadow: `0 8px 16px -4px ${color}25`
    }}>
      <Icon size={28} />
    </div>
    <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800' }}>{title}</h4>
  </div>
);

const StaffDashboard = ({ setActiveScreen }) => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* Welcome Section */}
      <div style={{ 
        marginBottom: '40px', 
        padding: '32px', 
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', 
        borderRadius: '24px', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Staff Operations Command</h1>
          <p style={{ opacity: 0.8, fontSize: '16px' }}>Manage registrations, process sales, and monitor customer trends.</p>
        </div>
        <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }}>
          <TrendingUp size={200} />
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '24px', color: 'var(--color-text-main)' }}>Quick Management Hub</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
          <QuickAction title="Register New" icon={UserPlus} color="#1e293b" onClick={() => setActiveScreen('Registration')} />
          <QuickAction title="POS Terminal" icon={ShoppingCart} color="#e91e63" onClick={() => setActiveScreen('SalesInvoice')} />
          <QuickAction title="Customer Lookup" icon={Search} color="#2196f3" onClick={() => setActiveScreen('CustomerSearch')} />
          <QuickAction title="Performance" icon={BarChart3} color="#4caf50" onClick={() => setActiveScreen('CustomerReports')} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Recent Activity Table */}
        <div className="card" style={{ padding: 0 }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontWeight: '800' }}>Recent Operations</h4>
            <button className="btn" style={{ fontSize: '12px', color: 'var(--color-blue)', background: 'transparent', padding: 0 }}>View All</button>
          </div>
          <div style={{ padding: '0 24px' }}>
            {[
              { id: '#INV-4401', target: 'Jane Doe', type: 'SALE', amount: '$125.00', time: '12 mins ago', status: 'COMPLETED' },
              { id: '#REG-9902', target: 'Robert Fox', type: 'REGISTRATION', amount: '-', time: '1 hour ago', status: 'VERIFIED' },
              { id: '#INV-4403', target: 'Alice Wilson', type: 'SALE', amount: '$450.00', time: '3 hours ago', status: 'PENDING' },
            ].map((op, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '20px 0', 
                borderBottom: idx !== 2 ? '1px solid #f8fafc' : 'none' 
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
                  {op.type === 'SALE' ? <ShoppingCart size={18} /> : <UserPlus size={18} />}
                </div>
                <div style={{ flex: 1, paddingLeft: '16px' }}>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: 'var(--color-text-main)' }}>{op.target}</p>
                  <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: '600' }}>{op.id} • {op.type}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '800' }}>{op.amount}</p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#10b981', fontWeight: '700' }}>{op.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="card" style={{ background: '#f8fafc', border: 'none' }}>
          <h4 style={{ marginBottom: '24px', fontWeight: '800' }}>Today's Performance</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'white', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '10px', height: '40px', background: 'var(--color-blue)', borderRadius: '4px' }}></div>
              <div>
                <p style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>14</p>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '700' }}>NEW CUSTOMERS</p>
              </div>
            </div>
            <div style={{ background: 'white', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '10px', height: '40px', background: '#e91e63', borderRadius: '4px' }}></div>
              <div>
                <p style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>$2,840</p>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '700' }}>DAILY SALES</p>
              </div>
            </div>
            <div style={{ padding: '20px', marginTop: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>You have reached <span style={{ fontWeight: '800', color: 'var(--color-text-main)' }}>85%</span> of your daily target.</p>
              <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--color-blue)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
