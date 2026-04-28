import React from 'react';
import { Search, Settings, Bell, UserCircle, Menu, ChevronRight, LayoutGrid, Zap } from 'lucide-react';

const Navbar = ({ activeScreen, setActiveScreen }) => {
  const getScreenTitle = () => {
    const titles = {
      'Financial': 'Financial Performance',
      'Staff': 'Personnel Management',
      'Parts': 'Inventory Logistics',
      'Purchases': 'Procurement Pipeline',
      'Vendors': 'Vendor Ecosystem',
      'Registration': 'Customer Onboarding',
      'SalesInvoice': 'Point of Sale',
      'CustomerSearch': 'Intelligence Lookup',
      'CustomerDetails': 'Profile Analysis',
      'CustomerReports': 'Strategic Insights',
      'EmailInvoice': 'Digital Transmission',
      'CustomerDash': 'Performance Overview',
      'Marketplace': 'Asset Marketplace',
      'History': 'Service Logbook',
      'Appointments': 'Scheduling Hub',
      'Profile': 'Account Security',
      'Settings': 'System Configuration',
      'Notifications': 'Alert Center',
      'AssetDetails': 'Asset Exploration'
    };
    return titles[activeScreen] || 'System Module';
  };

  return (
    <nav className="h-[90px] flex items-center justify-between px-10 bg-white/60 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-[900] ml-72">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] m-0">AutoPart OS</p>
          <ChevronRight size={10} className="text-text-muted" />
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] m-0">{activeScreen}</p>
        </div>
        <h1 className="text-xl font-black text-text-main m-0 tracking-tight">{getScreenTitle()}</h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Query system data..." 
            className="w-64 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-text-main outline-none bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/40"
          />
        </div>

        <div className="flex items-center gap-2 border-l border-slate-200 pl-8">
          <button 
            className="p-2.5 rounded-xl text-text-muted hover:text-blue-500 hover:bg-blue-50 transition-all relative"
            onClick={() => setActiveScreen('Notifications')}
          >
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm animate-pulse"></span>
          </button>
          
          <button 
            className="p-2.5 rounded-xl text-text-muted hover:text-blue-500 hover:bg-blue-50 transition-all"
            onClick={() => setActiveScreen('Settings')}
          >
            <Settings size={20} />
          </button>

          <button 
            className="flex items-center gap-3 ml-2 pl-2 group"
            onClick={() => setActiveScreen('Profile')}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-text-muted border border-slate-200 group-hover:bg-blue-gradient group-hover:text-white transition-all shadow-sm">
              <UserCircle size={24} />
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-[10px] font-black text-text-muted uppercase tracking-widest m-0 leading-none mb-1">Session</p>
              <p className="text-[11px] font-black text-text-main m-0 leading-none">Verified Admin</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
