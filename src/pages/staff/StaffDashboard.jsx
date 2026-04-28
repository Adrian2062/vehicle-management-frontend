import React from 'react';
import { 
  Users, ShoppingCart, Search, ClipboardList, 
  BarChart3, Mail, UserPlus, Clock, 
  CheckCircle, ArrowRight, TrendingUp
} from 'lucide-react';

const QuickAction = ({ title, icon: Icon, color, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-2xl shadow-material p-6 flex flex-col items-center gap-4 cursor-pointer border border-slate-100 hover:scale-[1.04] hover:shadow-xl transition-all duration-300 group"
  >
    <div 
      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: `${color}15`, color: color, boxShadow: `0 8px 20px -4px ${color}30` }}
    >
      <Icon size={30} />
    </div>
    <h4 className="m-0 text-sm font-extrabold text-text-main tracking-tight text-center">{title}</h4>
  </div>
);

const StaffDashboard = ({ setActiveScreen }) => {
  return (
    <div className="pb-10">
      {/* Hero Welcome Banner */}
      <div className="mb-10 p-10 bg-dark-gradient rounded-3xl text-white relative overflow-hidden shadow-header">
        <div className="relative z-10">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/50 mb-3">STAFF PORTAL — OPERATIONS COMMAND</p>
          <h1 className="text-4xl font-extrabold m-0 mb-3 tracking-tighter leading-none">Staff Operations Command</h1>
          <p className="text-white/70 text-base font-medium max-w-lg leading-relaxed">Manage registrations, process sales, and monitor customer trends — all from a single control center.</p>
        </div>
        <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <TrendingUp size={240} />
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-lg font-extrabold text-text-main m-0 tracking-tight">Quick Management Hub</h3>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <QuickAction title="Register New Customer" icon={UserPlus} color="#1e293b" onClick={() => setActiveScreen('Registration')} />
          <QuickAction title="POS Terminal" icon={ShoppingCart} color="#e91e63" onClick={() => setActiveScreen('SalesInvoice')} />
          <QuickAction title="Customer Lookup" icon={Search} color="#1A73E8" onClick={() => setActiveScreen('CustomerSearch')} />
          <QuickAction title="Performance Reports" icon={BarChart3} color="#4caf50" onClick={() => setActiveScreen('CustomerReports')} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
            <div className="flex justify-between w-full items-center">
              <h4 className="m-0 text-base font-bold">Recent Operations</h4>
              <button className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-lg text-[10px] font-extrabold cursor-pointer hover:bg-white/20 transition-all uppercase tracking-widest">VIEW ALL</button>
            </div>
          </div>
          <div className="mt-20 px-6">
            {[
              { id: '#INV-4401', target: 'Jane Doe', type: 'SALE', amount: '$125.00', time: '12 mins ago', status: 'COMPLETED', statusColor: '#10b981' },
              { id: '#REG-9902', target: 'Robert Fox', type: 'REGISTRATION', amount: '—', time: '1 hour ago', status: 'VERIFIED', statusColor: '#1A73E8' },
              { id: '#INV-4403', target: 'Alice Wilson', type: 'SALE', amount: '$450.00', time: '3 hours ago', status: 'PENDING', statusColor: '#f59e0b' },
            ].map((op, idx, arr) => (
              <div key={idx} className={`flex items-center py-5 gap-4 ${idx !== arr.length - 1 ? 'border-b border-[#f0f2f5]' : ''}`}>
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted shadow-sm shrink-0">
                  {op.type === 'SALE' ? <ShoppingCart size={18} /> : <UserPlus size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="m-0 text-sm font-extrabold text-text-main tracking-tight truncate">{op.target}</p>
                  <p className="m-0 text-[11px] text-text-muted font-extrabold uppercase tracking-widest mt-0.5">{op.id} · {op.type}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="m-0 text-sm font-extrabold text-text-main tracking-tight">{op.amount}</p>
                  <span
                    className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md mt-1 inline-block border"
                    style={{ color: op.statusColor, backgroundColor: `${op.statusColor}15`, borderColor: `${op.statusColor}30` }}
                  >{op.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-[#f0f2f5] text-center">
            <p className="text-[11px] text-text-muted font-extrabold uppercase tracking-widest opacity-60">Last updated: Just now</p>
          </div>
        </div>

        {/* Today's Performance */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-blue-gradient">
              <h4 className="m-0 text-base font-bold">Today's Performance</h4>
            </div>
            <div className="mt-20 p-6 flex flex-col gap-5">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-1.5 h-12 bg-blue-500 rounded-full shrink-0"></div>
                <div>
                  <p className="m-0 text-3xl font-extrabold text-text-main tracking-tighter">14</p>
                  <p className="m-0 text-[10px] text-text-muted font-extrabold uppercase tracking-widest mt-0.5 opacity-70">NEW CUSTOMERS</p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-1.5 h-12 bg-pink-500 rounded-full shrink-0"></div>
                <div>
                  <p className="m-0 text-3xl font-extrabold text-text-main tracking-tighter">$2,840</p>
                  <p className="m-0 text-[10px] text-text-muted font-extrabold uppercase tracking-widest mt-0.5 opacity-70">DAILY SALES</p>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between items-center mb-3">
                  <p className="m-0 text-[11px] font-extrabold text-text-muted uppercase tracking-widest opacity-70">DAILY TARGET</p>
                  <span className="text-[11px] font-extrabold text-blue-500">85%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[85%] bg-blue-gradient rounded-full shadow-sm transition-all duration-1000"></div>
                </div>
                <p className="text-[11px] text-text-muted font-medium mt-2 opacity-60">85% of daily target achieved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
