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
  BarChart,
  Mail,
  ClipboardList,
  ShoppingBag,
  Zap,
  Shield,
  Activity,
  UserCircle2
} from 'lucide-react';

const Sidebar = ({ activeScreen, setActiveScreen, userRole, onLogout }) => {
  const getRoleInfo = () => {
    switch (userRole) {
      case 'admin': return { label: 'ADMIN CONTROL', color: 'text-blue-400', bg: 'bg-blue-400/10', icon: Shield };
      case 'staff': return { label: 'STAFF PORTAL', color: 'text-emerald-400', bg: 'bg-emerald-400/10', icon: Activity };
      case 'customer': return { label: 'CUSTOMER HUB', color: 'text-orange-400', bg: 'bg-orange-400/10', icon: UserCircle2 };
      default: return { label: 'SYSTEM ACCESS', color: 'text-slate-400', bg: 'bg-slate-400/10', icon: Zap };
    }
  };

  const roleInfo = getRoleInfo();

  const adminLinks = [
    { id: 'Financial', label: 'Financial Matrix', icon: Home },
    { id: 'Staff', label: 'Human Assets', icon: Users },
    { id: 'Parts', label: 'Inventory Core', icon: Package },
    { id: 'Purchases', label: 'Supply Chain', icon: Truck },
    { id: 'Vendors', label: 'Vendor Node', icon: Settings },
  ];

  const staffLinks = [
    { id: 'Registration', label: 'Onboarding', icon: UserPlus },
    { id: 'SalesInvoice', label: 'POS Terminal', icon: ShoppingCart },
    { id: 'CustomerSearch', label: 'Intelligence', icon: Search },
    { id: 'CustomerDetails', label: 'Profile Hub', icon: ClipboardList },
    { id: 'CustomerReports', label: 'Analytics', icon: BarChart },
    { id: 'EmailInvoice', label: 'Invoicing', icon: Mail },
  ];

  const NavItem = ({ id, label, icon: Icon }) => (
    <div 
      className={`group flex items-center gap-4 mx-4 my-1 px-5 py-3.5 rounded-xl text-white/60 cursor-pointer transition-all duration-300 relative overflow-hidden ${
        activeScreen === id 
        ? 'bg-blue-gradient text-white shadow-header scale-105 z-10' 
        : 'hover:bg-white/5 hover:text-white hover:pl-6'
      }`}
      onClick={() => setActiveScreen(id)}
    >
      <Icon size={18} className={`${activeScreen === id ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
      <span className="text-[13px] font-extrabold uppercase tracking-widest">{label}</span>
      {activeScreen === id && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
      )}
    </div>
  );

  return (
    <div className="w-[280px] h-[calc(100vh-48px)] bg-dark-gradient rounded-3xl fixed left-6 top-6 flex flex-col py-8 z-[1000] shadow-material border border-white/5">
      {/* Dynamic Role Header */}
      <div className="px-8 mb-10">
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shadow-sm border border-white/10">
              <Package size={18} />
            </div>
            <h3 className="text-white text-lg font-black tracking-tighter m-0">AutoPart <span className="text-blue-400">Pro</span></h3>
          </div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${roleInfo.bg} ${roleInfo.color} border border-current/20`}>
            <roleInfo.icon size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.15em]">{roleInfo.label}</span>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>
      </div>
      
      <div className="overflow-y-auto flex-1 px-2 space-y-1">
        {userRole === 'admin' && adminLinks.map(link => <NavItem key={link.id} {...link} />)}
        {userRole === 'staff' && staffLinks.map(link => <NavItem key={link.id} {...link} />)}
        {userRole === 'customer' && (
          <>
            <NavItem id="CustomerDash" label="Performance" icon={Home} />
            <NavItem id="Marketplace" label="Marketplace" icon={ShoppingBag} />
            <NavItem id="History" label="Logbook" icon={Clock} />
            <NavItem id="Appointments" label="Requests" icon={Calendar} />
          </>
        )}
      </div>

      <div className="px-6 mt-6">
        <div className="p-1 rounded-2xl bg-white/5 border border-white/5 mb-4 group cursor-pointer hover:bg-white/10 transition-all" onClick={() => setActiveScreen('Profile')}>
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-blue-gradient flex items-center justify-center text-white font-black text-sm shadow-header">
              {userRole[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-xs font-black text-white uppercase tracking-widest m-0">Account</p>
              <p className="text-[10px] text-white/40 m-0 font-bold">Manage Profile</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="w-full py-4 bg-red-500 text-white border-none rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] cursor-pointer hover:bg-black transition-all shadow-header transform active:scale-95"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
