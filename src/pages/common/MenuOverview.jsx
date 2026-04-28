import React from 'react';
import { LayoutGrid, Users, Package, ShoppingCart, Truck, Settings, User, FileText, Bell } from 'lucide-react';

const MenuOverview = ({ setActiveScreen }) => {
  const modules = [
    { id: 'Financial', label: 'Financials', icon: LayoutGrid, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 'Staff', label: 'Team', icon: Users, color: 'text-slate-700', bg: 'bg-slate-100' },
    { id: 'Parts', label: 'Inventory', icon: Package, color: 'text-green-500', bg: 'bg-green-50' },
    { id: 'SalesInvoice', label: 'Sales', icon: ShoppingCart, color: 'text-pink-500', bg: 'bg-pink-50' },
    { id: 'Purchases', label: 'Purchases', icon: Truck, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 'Settings', label: 'Settings', icon: Settings, color: 'text-slate-700', bg: 'bg-slate-100' },
    { id: 'Profile', label: 'Account', icon: User, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 'CustomerReports', label: 'Reports', icon: FileText, color: 'text-green-500', bg: 'bg-green-50' },
    { id: 'Notifications', label: 'Alerts', icon: Bell, color: 'text-pink-500', bg: 'bg-pink-50' },
  ];

  return (
    <div className="pb-10">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">System Modules</h1>
        <p className="text-text-muted text-sm font-medium mt-1">Quick access to all platform sections.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {modules.map(mod => (
          <div 
            key={mod.id}
            onClick={() => setActiveScreen(mod.id)}
            className="bg-white p-8 rounded-xl shadow-material flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-header group border border-transparent hover:border-slate-100"
          >
            <div className={`w-14 h-14 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500`}>
              <mod.icon size={28} />
            </div>
            <h5 className="font-extrabold text-text-main m-0 tracking-tight text-base group-hover:text-blue-500 transition-colors">{mod.label}</h5>
            <p className="text-[10px] font-extrabold text-text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Open Module</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuOverview;
