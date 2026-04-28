import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';

// Admin Pages
import FinancialDashboard from './pages/admin/FinancialDashboard';
import StaffManagement from './pages/admin/StaffManagement';
import PartsManagement from './pages/admin/PartsManagement';
import PurchaseInvoice from './pages/admin/PurchaseInvoice';
import VendorManagement from './pages/admin/VendorManagement';

// Staff Pages
import CustomerRegistration from './pages/staff/CustomerRegistration';
import SalesInvoice from './pages/staff/SalesInvoice';
import CustomerSearch from './pages/staff/CustomerSearch';
import CustomerDetails from './pages/staff/CustomerDetails';
import CustomerReports from './pages/staff/CustomerReports';
import EmailInvoice from './pages/staff/EmailInvoice';

// Customer Pages
import CustomerDashboard from './pages/customer/CustomerDashboard';
import PurchaseHistory from './pages/customer/PurchaseHistory';
import AppointmentRequests from './pages/customer/AppointmentRequests';
import BuySell from './pages/customer/BuySell';
import AssetDetails from './pages/customer/AssetDetails';

// Common Pages
import Profile from './pages/common/Profile';
import Settings from './pages/common/Settings';
import Notifications from './pages/common/Notifications';
import MenuOverview from './pages/common/MenuOverview';

const App = () => {
  const [user, setUser] = useState(null); // { email, role }
  const [activeScreen, setActiveScreen] = useState('Financial');
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    if (userData.role === 'admin') setActiveScreen('Financial');
    else if (userData.role === 'staff') setActiveScreen('Registration');
    else if (userData.role === 'customer') setActiveScreen('CustomerDash');
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleExploreAsset = (asset) => {
    setSelectedAsset(asset);
    setActiveScreen('AssetDetails');
  };

  const renderScreen = () => {
    switch (activeScreen) {
      // Admin
      case 'Financial': return <FinancialDashboard />;
      case 'Staff': return <StaffManagement />;
      case 'Parts': return <PartsManagement />;
      case 'Purchases': return <PurchaseInvoice />;
      case 'Vendors': return <VendorManagement />;
      
      // Staff
      case 'Registration': return <CustomerRegistration />;
      case 'SalesInvoice': return <SalesInvoice />;
      case 'CustomerSearch': return <CustomerSearch />;
      case 'CustomerDetails': return <CustomerDetails />;
      case 'CustomerReports': return <CustomerReports />;
      case 'EmailInvoice': return <EmailInvoice />;
      
      // Customer
      case 'CustomerDash': return <CustomerDashboard />;
      case 'History': return <PurchaseHistory />;
      case 'Appointments': return <AppointmentRequests />;
      case 'Marketplace': return <BuySell onExploreAsset={handleExploreAsset} />;
      case 'AssetDetails': return <AssetDetails asset={selectedAsset} onBack={() => setActiveScreen('Marketplace')} />;

      // Common
      case 'Profile': return <Profile />;
      case 'Settings': return <Settings />;
      case 'Notifications': return <Notifications />;
      case 'MenuOverview': return <MenuOverview setActiveScreen={setActiveScreen} />;
      
      default: return <FinancialDashboard />;
    }
  };

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex p-6 min-h-screen bg-[#f0f2f5]">
      <Sidebar 
        activeScreen={activeScreen} 
        setActiveScreen={setActiveScreen} 
        userRole={user.role} 
        onLogout={handleLogout}
      />
      <div className="flex-1">
        <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        <main className="flex-1 ml-72 pt-2.5">
          {renderScreen()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
