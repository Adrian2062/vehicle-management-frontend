import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Globe, Bell, Lock, Palette, 
  Smartphone, Mail, ShieldCheck, Database, Sliders,
  Moon, Sun, DollarSign, Layout, Key, LogOut,
  AlertTriangle, ShieldAlert, Monitor, CheckCircle
} from 'lucide-react';

const Settings = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const SectionHeader = ({ title, desc }) => (
    <div style={{ marginBottom: '24px', borderBottom: '1px solid #f0f2f5', paddingBottom: '12px' }}>
      <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-muted)' }}>{desc}</p>
    </div>
  );

  const Toggle = ({ label, desc, checked }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
      <div>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: '700' }}>{label}</p>
        <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>{desc}</p>
      </div>
      <div style={{ width: '40px', height: '22px', borderRadius: '11px', background: checked ? 'var(--color-blue)' : '#cbd5e1', position: 'relative', cursor: 'pointer' }}>
        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'white', position: 'absolute', right: checked ? '2px' : '20px', top: '2px', transition: 'all 0.2s ease' }}></div>
      </div>
    </div>
  );

  return (
    <div style={{ paddingBottom: '60px' }}>
      <div className="card" style={{ marginTop: '40px' }}>
        <div className="card-header-float header-dark">
          <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Advanced System Settings</h4>
        </div>
        
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          
          {/* COLUMN 1: Account & Security */}
          <div>
            <SectionHeader title="Security & Authentication" desc="Protect your account and manage access credentials." />
            
            {/* Change Password Section */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
                    <Key size={18} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '700' }}>Change Password</p>
                    <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)' }}>Last updated 14 days ago</p>
                  </div>
                </div>
                <button className="btn btn-secondary" onClick={() => setShowPasswordForm(!showPasswordForm)} style={{ fontSize: '11px' }}>
                  {showPasswordForm ? 'Cancel' : 'Update'}
                </button>
              </div>

              {showPasswordForm && (
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid #e2e8f0' }}>
                  <input type="password" placeholder="Current Password" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d2d6da', outline: 'none' }} />
                  <input type="password" placeholder="New Password" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d2d6da', outline: 'none' }} />
                  <input type="password" placeholder="Confirm New Password" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d2d6da', outline: 'none' }} />
                  <button className="btn btn-primary" style={{ background: 'var(--color-blue)', marginTop: '8px' }}>Update Password</button>
                </div>
              )}
            </div>

            <Toggle label="Two-Factor Authentication" desc="Add an extra layer of security to your login." checked={true} />
            <Toggle label="Biometric Login" desc="Use fingerprint or face recognition." checked={false} />

            <div style={{ marginTop: '32px' }}>
              <p className="label-caps" style={{ padding: 0, marginBottom: '16px' }}>Active Sessions</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Monitor size={16} color="var(--color-text-muted)" />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '700', margin: 0 }}>Chrome on Windows 11</p>
                      <p style={{ fontSize: '11px', color: '#10b981', margin: 0 }}>Current Session</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Smartphone size={16} color="var(--color-text-muted)" />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '700', margin: 0 }}>iPhone 15 Pro</p>
                      <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0 }}>Last active: 2 hours ago</p>
                    </div>
                  </div>
                  <button style={{ border: 'none', background: 'transparent', color: '#dc2626', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>Logout</button>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Preferences & System */}
          <div>
            <SectionHeader title="System & Preferences" desc="Manage application behavior and data display." />
            
            <div style={{ marginBottom: '32px' }}>
              <p className="label-caps" style={{ padding: 0, marginBottom: '12px' }}>Theme Selection</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ border: '2px solid var(--color-blue)', borderRadius: '12px', padding: '16px', textAlign: 'center', cursor: 'pointer', background: 'white' }}>
                  <Sun size={20} color="var(--color-blue)" style={{ marginBottom: '4px' }} />
                  <p style={{ fontSize: '12px', fontWeight: '700', margin: 0 }}>Light</p>
                </div>
                <div style={{ border: '1px solid #f0f2f5', borderRadius: '12px', padding: '16px', textAlign: 'center', cursor: 'pointer', background: '#1a1a1a', color: 'white' }}>
                  <Moon size={20} style={{ marginBottom: '4px' }} />
                  <p style={{ fontSize: '12px', fontWeight: '700', margin: 0 }}>Dark</p>
                </div>
              </div>
            </div>

            <Toggle label="Inventory Smart-Alerts" desc="Notify me when stock falls below threshold." checked={true} />
            <Toggle label="Weekly Financial Summary" desc="Email me a summary every Sunday." checked={false} />

            <div style={{ marginTop: '40px' }}>
              <SectionHeader title="Danger Zone" desc="Permanently delete or deactivate your account." />
              <div style={{ border: '1px solid #fecaca', background: '#fef2f2', padding: '20px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <ShieldAlert size={24} color="#dc2626" />
                  <div>
                    <h6 style={{ margin: 0, fontWeight: '800', color: '#991b1b' }}>Delete Account</h6>
                    <p style={{ margin: 0, fontSize: '12px', color: '#b91c1c' }}>This action is permanent and cannot be undone.</p>
                  </div>
                </div>
                <button className="btn" style={{ background: '#dc2626', color: 'white', width: '100%' }}>Proceed to Account Deletion</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;
