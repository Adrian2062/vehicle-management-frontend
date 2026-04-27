import React from 'react';
import { Search, Settings, Bell, UserCircle, Menu } from 'lucide-react';

const Navbar = ({ setActiveScreen }) => (
  <nav style={{ 
    height: '70px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '0 24px',
    backgroundColor: 'transparent',
    marginBottom: '24px'
  }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '2px' }}>
        Pages <span style={{ margin: '0 4px' }}>/</span> <span style={{ color: 'var(--color-text-main)', fontWeight: '600' }}>System</span>
      </p>
      <h6 style={{ fontWeight: '700', fontSize: '16px', margin: 0 }}>AutoPart Pro</h6>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <Search size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-text-muted)' }} />
        <input 
          type="text" 
          placeholder="Type here..." 
          style={{ 
            padding: '8px 12px 8px 36px', 
            borderRadius: '8px', 
            border: '1px solid #d2d6da', 
            fontSize: '14px', 
            outline: 'none',
            backgroundColor: 'white'
          }} 
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-text-muted)' }}>
        <UserCircle size={22} style={{ cursor: 'pointer' }} onClick={() => setActiveScreen('Profile')} />
        <Settings size={22} style={{ cursor: 'pointer' }} onClick={() => setActiveScreen('Settings')} />
        <div style={{ position: 'relative' }}>
          <Bell size={22} style={{ cursor: 'pointer' }} onClick={() => setActiveScreen('Notifications')} />
          <span style={{ 
            position: 'absolute', 
            top: '-2px', 
            right: '-2px', 
            width: '10px', 
            height: '10px', 
            backgroundColor: '#ef4444', 
            borderRadius: '50%', 
            border: '2px solid white' 
          }}></span>
        </div>
        <Menu size={22} style={{ cursor: 'pointer' }} onClick={() => setActiveScreen('MenuOverview')} />
      </div>
    </div>
  </nav>
);

export default Navbar;
