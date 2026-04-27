import React from 'react';
import { LayoutGrid, Users, Package, ShoppingCart, Truck, Settings, User, FileText, Bell } from 'lucide-react';

const MenuOverview = ({ setActiveScreen }) => {
  const modules = [
    { id: 'Financial', label: 'Financials', icon: LayoutGrid, color: 'header-blue' },
    { id: 'Staff', label: 'Team', icon: Users, color: 'header-dark' },
    { id: 'Parts', label: 'Inventory', icon: Package, color: 'header-green' },
    { id: 'SalesInvoice', label: 'Sales', icon: ShoppingCart, color: 'header-pink' },
    { id: 'Purchases', label: 'Purchases', icon: Truck, color: 'header-orange' },
    { id: 'Settings', label: 'Settings', icon: Settings, color: 'header-dark' },
    { id: 'Profile', label: 'Account', icon: User, color: 'header-blue' },
    { id: 'CustomerReports', label: 'Reports', icon: FileText, color: 'header-green' },
    { id: 'Notifications', label: 'Alerts', icon: Bell, color: 'header-pink' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700' }}>System Modules</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Quick access to all platform sections.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
        {modules.map(mod => (
          <div 
            key={mod.id}
            className="card" 
            onClick={() => setActiveScreen(mod.id)}
            style={{ cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s ease' }}
          >
            <div className={`stat-icon-float ${mod.color}`} style={{ position: 'static', margin: '0 auto 16px' }}>
              <mod.icon size={24} />
            </div>
            <h5 style={{ fontWeight: '700' }}>{mod.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuOverview;
