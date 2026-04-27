import React from 'react';
import { 
  User, Mail, Shield, Bell, Camera, Clock, 
  CheckCircle, Star, Award, Briefcase, MapPin, 
  Smartphone, Key, History 
} from 'lucide-react';

const Profile = () => {
  const activities = [
    { action: 'Updated Stock Levels', target: 'Brake Pads (BP-101)', time: '2 hours ago', icon: History },
    { action: 'Generated Monthly Report', target: 'Financials_April.pdf', time: '5 hours ago', icon: FileText },
    { action: 'Approved New Vendor', target: 'Global Parts Inc.', time: 'Yesterday', icon: CheckCircle },
  ];

  function FileText(props) { return <History {...props} />; } // Quick shim for the icon

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Profile Header Card */}
      <div className="card" style={{ padding: 0, overflow: 'hidden', marginTop: '40px' }}>
        <div className="card-header-float header-dark">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Executive Profile</h4>
            <span style={{ fontSize: '11px', fontWeight: '700', padding: '4px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>VERIFIED ADMIN</span>
          </div>
        </div>
        
        <div style={{ padding: '60px 24px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '48px' }}>
            {/* Left Sidebar Info */}
            <div>
              <div style={{ position: 'relative', width: '160px', margin: '0 auto 24px' }}>
                <div style={{ width: '160px', height: '160px', borderRadius: '24px', background: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', fontWeight: '800', color: 'white', boxShadow: 'var(--shadow-header)' }}>
                  JD
                </div>
                <button style={{ position: 'absolute', bottom: '10px', right: '10px', width: '40px', height: '40px', borderRadius: '12px', background: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-material)', color: 'var(--color-primary)' }}>
                  <Camera size={20} />
                </button>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }}>Jane Doe</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', fontWeight: '500' }}>Senior Fleet Manager</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
                  <span style={{ padding: '4px 10px', background: '#f0f2f5', borderRadius: '4px', fontSize: '11px', fontWeight: '700' }}>FLEET OPS</span>
                  <span style={{ padding: '4px 10px', background: '#f0f2f5', borderRadius: '4px', fontSize: '11px', fontWeight: '700' }}>INVENTORY</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '1px solid #f0f2f5', paddingTop: '24px' }}>
                <p className="label-caps" style={{ padding: 0 }}>System Performance</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '18px', margin: 0 }}>98%</h3>
                    <p style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: '700' }}>EFFICIENCY</p>
                  </div>
                  <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '18px', margin: 0 }}>1.2k</h3>
                    <p style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: '700' }}>TASKS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ marginBottom: '16px', borderBottom: '2px solid var(--color-blue)', width: 'fit-content', paddingBottom: '4px' }}>Professional Biography</h4>
                <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                  Dedicated Fleet Operations Specialist with over 8 years of experience in automotive parts management and logistics. 
                  Expert in optimizing supply chain workflows and implementing automated inventory tracking systems. 
                  Currently overseeing the "AutoPart Pro" integration for high-volume service centers.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <h4 style={{ marginBottom: '20px' }}>Recent Activity</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {activities.map((act, i) => (
                      <div key={i} style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
                          <act.icon size={16} />
                        </div>
                        <div>
                          <p style={{ fontSize: '14px', fontWeight: '700', margin: 0 }}>{act.action}</p>
                          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0 }}>{act.target} • {act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ marginBottom: '20px' }}>Security & Access</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="card" style={{ marginTop: 0, padding: '16px', background: '#f8fafc', border: 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <Smartphone size={18} color="var(--color-primary)" />
                          <span style={{ fontSize: '13px', fontWeight: '600' }}>2FA Authentication</span>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981' }}>ENABLED</span>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: 0, padding: '16px', background: '#f8fafc', border: 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <Key size={18} color="var(--color-primary)" />
                          <span style={{ fontSize: '13px', fontWeight: '600' }}>Last Password Change</span>
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>14 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
