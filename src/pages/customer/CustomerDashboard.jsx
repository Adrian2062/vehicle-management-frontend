import React from 'react';
import { 
  Car, Calendar, Clock, Wrench, 
  CheckCircle, ArrowRight, User, 
  MapPin, Phone, ShieldCheck, History
} from 'lucide-react';

const QuickStat = ({ title, value, icon: Icon, color }) => (
  <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${color}15`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={22} />
    </div>
    <div>
      <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)' }}>{value}</h3>
      <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted)' }}>{title}</p>
    </div>
  </div>
);

const CustomerDashboard = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Personalized Welcome Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'var(--color-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <User size={40} color="white" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-text-main)', margin: 0 }}>Welcome back, Adrian</h2>
              <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 12px', borderRadius: '20px', background: 'var(--color-blue)', color: 'white' }}>GOLD MEMBER</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', marginTop: '4px' }}>Your Tesla Model S is in peak condition. No service required.</p>
          </div>
        </div>
        <button className="btn" style={{ background: 'var(--color-blue)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}>
          <Calendar size={18} /> Schedule New Service
        </button>
      </div>

      {/* Overview Widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        <QuickStat title="Active Appointments" value="1" icon={Calendar} color="#1A73E8" />
        <QuickStat title="Total Services" value="12" icon={Wrench} color="#43A047" />
        <QuickStat title="Spend (YTD)" value="$1,450" icon={ShieldCheck} color="#D81B60" />
        <QuickStat title="Next Due (Days)" value="124" icon={Clock} color="#FB8C00" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Rich Service History Table */}
        <div className="card card-with-header" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="card-header-float header-dark">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Comprehensive Service History</h4>
              <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}>DOWNLOAD ALL</button>
            </div>
          </div>
          <div style={{ marginTop: '80px' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ paddingLeft: '24px' }}>SERVICE TYPE</th>
                  <th>DATE</th>
                  <th>TECHNICIAN</th>
                  <th>STATUS</th>
                  <th style={{ textAlign: 'right', paddingRight: '24px' }}>COST</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Full Engine Diagnostic', date: 'Apr 12, 2024', tech: 'Robert F.', status: 'COMPLETED', color: '#4caf50', cost: '$120.00' },
                  { type: 'Brake Pad Replacement', date: 'Mar 05, 2024', tech: 'Cody F.', status: 'COMPLETED', color: '#4caf50', cost: '$450.00' },
                  { type: 'Oil & Filter Change', date: 'Jan 20, 2024', tech: 'Esther H.', status: 'COMPLETED', color: '#4caf50', cost: '$85.00' },
                  { type: 'Scheduled Maintenance', date: 'Dec 15, 2023', tech: 'John D.', status: 'COMPLETED', color: '#4caf50', cost: '$240.00' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ paddingLeft: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Wrench size={16} color="var(--color-text-main)" />
                        </div>
                        <p style={{ fontWeight: '800', fontSize: '14px', margin: 0, color: 'var(--color-text-main)' }}>{row.type}</p>
                      </div>
                    </td>
                    <td><p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '700' }}>{row.date}</p></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#1a1a1a', color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>{row.tech[0]}</div>
                        <span style={{ fontSize: '13px', fontWeight: '700' }}>{row.tech}</span>
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '10px', fontWeight: '800', color: row.color, background: `${row.color}15`, padding: '4px 10px', borderRadius: '6px' }}>{row.status}</span>
                    </td>
                    <td style={{ textAlign: 'right', paddingRight: '24px', fontWeight: '800', color: 'var(--color-text-main)' }}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #f0f2f5' }}>
              <button style={{ background: 'transparent', border: 'none', color: 'var(--color-blue)', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}>VIEW EXTENDED HISTORY</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Vehicle Profile & Support */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="card card-with-header" style={{ padding: '24px' }}>
            <div className="card-header-float header-blue">
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Primary Vehicle</h4>
            </div>
            <div style={{ marginTop: '56px', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '140px', background: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Car size={64} color="var(--color-text-muted)" />
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>Tesla Model S</h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: '700', marginTop: '4px' }}>VIN: 5YJSA1E2XG...0912</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px' }}>
                  <p style={{ margin: 0, fontSize: '10px', fontWeight: '800', color: 'var(--color-text-muted)' }}>YEAR</p>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '800' }}>2022</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px' }}>
                  <p style={{ margin: 0, fontSize: '10px', fontWeight: '800', color: 'var(--color-text-muted)' }}>COLOR</p>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '800' }}>Midnight Silver</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'var(--color-dark)', color: 'white', padding: '24px' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Need Assistance?</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: '12px 0 24px 0' }}>Our expert technicians are available 24/7 for emergency roadside support.</p>
            <button className="btn" style={{ width: '100%', background: 'white', color: 'var(--color-primary)', fontWeight: '800' }}>CALL SUPPORT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
