import React from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  Package, 
  Truck, 
  UserPlus, 
  ShoppingCart, 
  Search, 
  User, 
  Clock, 
  Calendar,
  LogOut,
  BarChart3,
  Mail,
  ClipboardList
} from 'lucide-react';

const Sidebar = ({ activeScreen, setActiveScreen, userRole, onLogout }) => {
  const adminLinks = [
    { id: 'Financial', label: 'Dashboard', icon: Home },
    { id: 'Staff', label: 'Staff & Roles', icon: Users },
    { id: 'Parts', label: 'Inventory', icon: Package },
    { id: 'Purchases', label: 'Purchases', icon: Truck },
    { id: 'Vendors', label: 'Vendors', icon: Settings },
  ];

  const staffLinks = [
    { id: 'Registration', label: 'Register', icon: UserPlus },
    { id: 'SalesInvoice', label: 'POS Terminal', icon: ShoppingCart },
    { id: 'CustomerSearch', label: 'Lookup', icon: Search },
    { id: 'CustomerDetails', label: 'Profiles', icon: ClipboardList },
    { id: 'CustomerReports', label: 'Insights', icon: BarChart3 },
    { id: 'EmailInvoice', label: 'Invoicing', icon: Mail },
  ];

  const NavItem = ({ id, label, icon: Icon }) => (
    <div 
      className={`nav-item ${activeScreen === id ? 'active' : ''}`}
      onClick={() => setActiveScreen(id)}
    >
      <Icon size={18} />
      <span style={{ fontSize: '13px' }}>{label}</span>
    </div>
  );

  return (
    <div className="sidebar">
      <div style={{ padding: '0 32px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
        <h3 style={{ color: 'white', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AutoPart Pro</h3>
      </div>
      
      <div style={{ overflowY: 'auto', flex: 1 }}>
        {userRole === 'admin' && adminLinks.map(link => <NavItem key={link.id} {...link} />)}
        {userRole === 'staff' && staffLinks.map(link => <NavItem key={link.id} {...link} />)}
        {userRole === 'customer' && (
          <>
            <NavItem id="CustomerDash" label="Dashboard" icon={Home} />
            <NavItem id="History" label="History" icon={Clock} />
            <NavItem id="Appointments" label="Requests" icon={Calendar} />
          </>
        )}
      </div>

      <div style={{ padding: '16px' }}>
        <button 
          onClick={onLogout}
          style={{ 
            width: '100%', 
            padding: '12px', 
            background: 'rgba(239, 68, 68, 0.1)', 
            color: '#ef4444', 
            border: 'none', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
