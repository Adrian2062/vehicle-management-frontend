import React from 'react';
import { BarChart3, Users, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight, UserCheck, CreditCard } from 'lucide-react';

const CustomerReports = () => {
  const categories = [
    { label: 'Regular Customers', count: 45, icon: Users, color: '#3b82f6', trend: '+12%', isUp: true },
    { label: 'High Spenders', count: 12, icon: TrendingUp, color: '#10b981', trend: '+5%', isUp: true },
    { label: 'Pending Credits', count: 8, icon: AlertTriangle, color: '#ef4444', trend: '-2%', isUp: false },
  ];

  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Customer Analytics & Insights</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Quantitative analysis of customer loyalty metrics and financial risk profiles.</p>
        </div>
      </div>

      {/* Modern Stat Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-material p-8 border border-slate-100 relative overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-gradient group-hover:text-white transition-all duration-500">
                <cat.icon size={28} style={{ color: i === 0 ? cat.color : 'inherit' }} className="group-hover:text-white transition-colors" />
              </div>
              <div className={`flex items-center gap-1 text-[11px] font-extrabold px-2 py-1 rounded-lg ${cat.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {cat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {cat.trend}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-1">{cat.label}</p>
              <h2 className="text-3xl font-extrabold text-text-main tracking-tighter m-0">{cat.count}</h2>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
              <cat.icon size={120} />
            </div>
          </div>
        ))}
      </div>

      {/* High Fidelity Spend Analysis Table */}
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-3">
              <TrendingUp size={18} className="text-white/60" />
              <h4 className="m-0 text-base font-bold">Top Portfolio Spenders (30D)</h4>
            </div>
            <button className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
              <BarChart3 size={14} /> Full Economic Report
            </button>
          </div>
        </div>
        
        <div className="mt-20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-8 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">CUSTOMER</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">ENGAGEMENT (VISITS)</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">TOTAL ACQUISITION</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">LOYALTY TIER</th>
                <th className="pr-8 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-right tracking-widest">LIFECYCLE</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Robert Brown', visits: 5, spent: '$3,200.00', level: 'PLATINUM', color: '#8b5cf6', status: 'ACTIVE' },
                { name: 'John Smith', visits: 3, spent: '$820.00', level: 'SILVER', color: '#94a3b8', status: 'ACTIVE' },
                { name: 'Michael Chen', visits: 8, spent: '$5,120.00', level: 'DIAMOND', color: '#3b82f6', status: 'ACTIVE' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="pl-8 py-6 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-text-main font-extrabold text-xs shadow-sm border border-slate-200 group-hover:scale-110 transition-transform">
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="font-extrabold text-sm m-0 text-text-main tracking-tight">{row.name}</p>
                    </div>
                  </td>
                  <td className="py-6 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(row.visits/10)*100}%` }}></div>
                      </div>
                      <span className="text-xs font-extrabold text-text-main">{row.visits}</span>
                    </div>
                  </td>
                  <td className="py-6 border-b border-[#f0f2f5]">
                    <p className="text-sm font-extrabold text-blue-600 m-0 tracking-tighter">{row.spent}</p>
                  </td>
                  <td className="py-6 border-b border-[#f0f2f5]">
                    <span className="text-[9px] font-extrabold px-2.5 py-1 rounded-md tracking-widest border uppercase shadow-sm bg-white" style={{ color: row.color, borderColor: `${row.color}40` }}>
                      {row.level}
                    </span>
                  </td>
                  <td className="pr-8 py-6 border-b border-[#f0f2f5] text-right">
                    <span className="text-[10px] font-extrabold text-green-500 bg-green-50 px-3 py-1 rounded-full border border-green-100 uppercase tracking-widest">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerReports;
