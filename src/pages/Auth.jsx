import React, { useState } from 'react';
import { 
  User, Lock, Mail, ChevronRight, ArrowLeft, 
  ShieldCheck, UserPlus, Car, Settings
} from 'lucide-react';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, role });
  };

  if (isForgot) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '24px' }}>
        <div style={{ maxWidth: '450px', width: '100%', background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ width: '64px', height: '64px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', margin: '0 auto 16px' }}>
              <Lock size={32} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b' }}>Reset Password</h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginTop: '8px' }}>We'll send a recovery link to your email.</p>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>Email Address</p>
            <input type="email" placeholder="name@company.com" style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc' }} />
          </div>

          <button className="btn btn-primary" style={{ width: '100%', background: '#2563eb', padding: '16px', borderRadius: '12px', fontWeight: '700' }}>Send Reset Link</button>
          
          <button 
            onClick={() => setIsForgot(false)}
            style={{ width: '100%', marginTop: '20px', background: 'transparent', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
          >
            <ArrowLeft size={16} /> Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: 'white' }}>
      {/* Left Visual Panel with High-Fidelity Image */}
      <div style={{ 
        flex: 1, 
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8)), url("/auth-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: '80px', 
        color: 'white' 
      }} className="auth-visual-panel">
        <div style={{ maxWidth: '480px' }}>
          <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', backdropFilter: 'blur(8px)' }}>
            <Car size={24} />
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Manage your fleet with precision.</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '48px' }}>
            The all-in-one platform for automotive parts inventory, staff management, and financial reporting.
          </p>
          <div style={{ display: 'flex', gap: '48px' }}>
            <div>
              <h4 style={{ fontSize: '28px', fontWeight: '800' }}>1.2k+</h4>
              <p style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Users</p>
            </div>
            <div>
              <h4 style={{ fontSize: '28px', fontWeight: '800' }}>50k+</h4>
              <p style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Parts Tracked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Auth Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ maxWidth: '440px', width: '100%' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <p style={{ color: '#64748b' }}>
              {isLogin ? 'Please enter your details to sign in.' : 'Start your management journey today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>First Name</p>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>Last Name</p>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                </div>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>Email Address</p>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} 
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', margin: 0 }}>Password</p>
                {isLogin && (
                  <button type="button" onClick={() => setIsForgot(true)} style={{ border: 'none', background: 'transparent', color: '#2563eb', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    Forgot password?
                  </button>
                )}
              </div>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>Access Role</p>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: 'white' }}
              >
                <option value="customer">Customer Access</option>
                <option value="admin">Administrator</option>
                <option value="staff">Staff Member</option>
              </select>
            </div>

            <button style={{ width: '100%', background: '#1e293b', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', marginBottom: '24px' }}>
              {isLogin ? 'Sign in' : 'Create account'}
            </button>
          </form>

          <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748b' }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              style={{ marginLeft: '8px', border: 'none', background: 'transparent', color: '#2563eb', fontWeight: '700', cursor: 'pointer' }}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
