import React from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, ShoppingBag, 
  PieChart, Users, ArrowUpRight, MoreVertical,
  Calendar, Download, CheckCircle, Clock
} from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
  <div className="bg-white rounded-xl shadow-material relative p-6 mt-10 transition-all hover:scale-[1.02] duration-200 border border-slate-100">
    <div className={`absolute -top-6 left-4 w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-header ${colorClass}`}>
      <Icon size={24} />
    </div>
    <div className="text-right pb-2">
      <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-1">{title}</p>
      <h3 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter">{value}</h3>
    </div>
    <div className="border-t border-[#f0f2f5] pt-4 mt-3 text-xs flex items-center gap-1 font-bold">
      <span className={`flex items-center gap-0.5 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={14} className="stroke-[3px]" /> : <TrendingDown size={14} className="stroke-[3px]" />}
        {change}
      </span>
      <span className="text-text-muted font-medium ml-1">than yesterday</span>
    </div>
  </div>
);

const FinancialDashboard = () => {
  return (
    <div className="pb-10">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Financial Nerve Center</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Real-time revenue tracking and performance analytics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-[#d2d6da] bg-white text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Calendar size={16} /> Last 30 Days
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95">
            <Download size={16} /> Export Report
          </button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        <StatCard title="Daily Revenue" value="$2,450" change="+15%" isPositive={true} icon={DollarSign} colorClass="bg-blue-gradient" />
        <StatCard title="New Orders" value="48" change="+8%" isPositive={true} icon={ShoppingBag} colorClass="bg-pink-gradient" />
        <StatCard title="Active Vendors" value="12" change="0%" isPositive={true} icon={Users} colorClass="bg-green-gradient" />
        <StatCard title="Pending Payouts" value="$1,200" change="+32%" isPositive={false} icon={Clock} colorClass="bg-orange-gradient" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Advanced Transaction Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-material relative mt-10 overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
            <div className="flex justify-between w-full items-center">
              <h4 className="m-0 text-base font-bold">Recent Financial Activity</h4>
              <MoreVertical size={20} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          <div className="mt-20">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">TRANSACTION</th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">DATE</th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">AMOUNT</th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">STATUS</th>
                  <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#TRX-9901', desc: 'Bulk Engine Oil Purchase', date: 'Today, 12:45 PM', amount: '-$1,250.00', status: 'COMPLETED', color: '#10b981' },
                  { id: '#TRX-9902', desc: 'Customer Payment - INV-44', date: 'Today, 10:30 AM', amount: '+$450.00', status: 'PENDING', color: '#f59e0b' },
                  { id: '#TRX-9903', desc: 'Staff Salary - April', date: 'Yesterday', amount: '-$5,400.00', status: 'COMPLETED', color: '#10b981' },
                  { id: '#TRX-9904', desc: 'Vendor Refund', date: 'Apr 25, 2024', amount: '+$120.00', status: 'CANCELLED', color: '#ef4444' },
                ].map((trx, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted shadow-sm">
                          <TrendingUp size={16} className={trx.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'} />
                        </div>
                        <div>
                          <p className="font-extrabold text-sm m-0 text-text-main leading-tight">{trx.desc}</p>
                          <p className="text-[10px] text-text-muted m-0 font-bold uppercase tracking-wider mt-0.5">{trx.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]">
                      <p className="text-[13px] text-text-muted m-0 font-extrabold">{trx.date}</p>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]">
                      <p className={`text-sm font-extrabold m-0 tracking-tight ${trx.amount.startsWith('+') ? 'text-green-500' : 'text-text-main'}`}>{trx.amount}</p>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]">
                      <span className="text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider border uppercase shadow-sm" style={{ color: trx.color, backgroundColor: `${trx.color}15`, borderColor: `${trx.color}30` }}>
                        {trx.status}
                      </span>
                    </td>
                    <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                      <button className="p-2 rounded-lg bg-slate-50 text-text-muted hover:text-text-main transition-all border border-slate-100">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 text-center border-t border-[#f0f2f5]">
              <button className="bg-transparent border-none text-blue-500 text-[11px] font-extrabold cursor-pointer hover:text-blue-600 tracking-widest uppercase flex items-center gap-2 mx-auto">
                <ArrowUpRight size={14} /> VIEW ALL TRANSACTIONS
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Performance Widget */}
        <div className="bg-white rounded-xl shadow-material relative mt-10 p-8 border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-pink-gradient">
            <h4 className="m-0 text-base font-bold">Revenue Sources</h4>
          </div>
          <div className="mt-16">
            <div className="relative h-56 w-full flex items-center justify-center mb-10">
              <div className="w-40 h-40 rounded-full border-[18px] border-[#f0f2f5] border-t-pink-500 border-r-blue-500 border-b-green-500 shadow-lg transform rotate-[30deg]"></div>
              <div className="absolute text-center bg-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-inner border border-slate-50">
                <h4 className="m-0 text-3xl font-extrabold text-text-main tracking-tighter leading-none">84%</h4>
                <p className="m-0 text-[10px] text-text-muted font-extrabold tracking-widest uppercase mt-1">TARGET</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                { label: 'Direct Sales', value: 65, color: '#e91e63' },
                { label: 'Service Fees', value: 25, color: '#2196f3' },
                { label: 'Subsidies', value: 10, color: '#10b981' }
              ].map(item => (
                <div key={item.label} className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ background: item.color }}></div>
                      <span className="text-sm font-extrabold text-text-main tracking-tight group-hover:text-pink-500 transition-colors">{item.label}</span>
                    </div>
                    <span className="text-sm text-text-muted font-extrabold">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-[#f0f2f5] rounded-full overflow-hidden shadow-inner">
                    <div className="h-full rounded-full transition-all duration-1000 group-hover:brightness-110" style={{ width: `${item.value}%`, background: item.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
