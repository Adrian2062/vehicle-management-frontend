import React from 'react';
import { User, Car, History, CreditCard, Mail, Phone, MapPin, Calendar, ExternalLink, ShieldCheck, MoreHorizontal, Package } from 'lucide-react';

const CustomerDetails = () => {
  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Customer Strategic Profile</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Holistic view of historical transactions, vehicle assets, and communication logs.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all">
            <Mail size={16} /> Contact Hub
          </button>
          <button className="px-7 py-3 rounded-xl bg-blue-500 text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95">
            Update Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Core Identity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-material border border-slate-100 overflow-hidden">
            <div className="h-24 bg-dark-gradient"></div>
            <div className="px-8 pb-8 -mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-header mb-4 rotate-3 group hover:rotate-0 transition-transform">
                  <div className="w-full h-full rounded-2xl bg-blue-gradient flex items-center justify-center text-white text-3xl font-extrabold tracking-tighter">
                    JD
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-text-main m-0 tracking-tighter">Jane Doe</h3>
                <p className="text-xs font-extrabold text-blue-500 uppercase tracking-widest mt-1 mb-6">Platinum Member · Since 2022</p>
                
                <div className="w-full flex gap-2 mb-8">
                  <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-inner">
                    <p className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1">TOTAL SPENT</p>
                    <p className="text-lg font-extrabold text-text-main tracking-tight">$12,450</p>
                  </div>
                  <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-inner">
                    <p className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1">VISITS</p>
                    <p className="text-lg font-extrabold text-text-main tracking-tight">24</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-blue-500 transition-all border border-slate-100">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest m-0 leading-none mb-1">Electronic Mail</p>
                    <p className="text-sm font-extrabold text-text-main m-0 tracking-tight">jane.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-blue-500 transition-all border border-slate-100">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest m-0 leading-none mb-1">Mobile Access</p>
                    <p className="text-sm font-extrabold text-text-main m-0 tracking-tight">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-blue-500 transition-all border border-slate-100">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest m-0 leading-none mb-1">Credit Status</p>
                    <p className="text-sm font-extrabold text-green-500 m-0 tracking-tight">$0.00 Outstanding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Assets & History */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Asset Registry */}
          <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100 p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted shadow-sm border border-slate-100">
                  <Car size={20} />
                </div>
                <h4 className="m-0 text-lg font-extrabold text-text-main tracking-tight">Registered Vehicle Assets</h4>
              </div>
              <button className="text-blue-500 text-xs font-extrabold uppercase tracking-widest hover:text-black transition-colors flex items-center gap-2">
                Add Asset <ExternalLink size={14} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plate: 'ABC-1234', desc: '2022 Toyota Camry (Sedan)', color: 'blue' },
                { plate: 'XYZ-9876', desc: '2021 Honda Civic (Sport)', color: 'dark' }
              ].map((vehicle, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-material transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-white rounded-lg border border-slate-200 text-xs font-extrabold tracking-tighter shadow-sm group-hover:border-blue-500 transition-colors">{vehicle.plate}</span>
                    <MoreHorizontal size={16} className="text-text-muted" />
                  </div>
                  <p className="m-0 text-sm font-extrabold text-text-main tracking-tight mb-1">{vehicle.desc}</p>
                  <p className="m-0 text-[10px] text-text-muted font-extrabold uppercase tracking-widest">Active Insurance · SKU Enabled</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ledger / History */}
          <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-14 rounded-t-xl flex items-center px-8 text-white shadow-header bg-dark-gradient">
              <div className="flex items-center gap-3">
                <History size={18} className="text-white/60" />
                <h4 className="m-0 text-sm font-bold">Transaction Ledger</h4>
              </div>
            </div>
            
            <div className="mt-14">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="pl-8 py-4 text-[10px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">TIMELINE</th>
                    <th className="py-4 text-[10px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">SERVICE DESCRIPTION</th>
                    <th className="py-4 text-[10px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left tracking-widest">QUOTA</th>
                    <th className="pr-8 py-4 text-[10px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-right tracking-widest">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: 'Apr 15, 2024', desc: 'Brake Pad Replacement - Performance', amount: '$125.00', status: 'PAID', color: '#10b981' },
                    { date: 'Mar 02, 2024', desc: 'Engine Precision Tuning & Diagnostic', amount: '$450.00', status: 'PAID', color: '#10b981' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                      <td className="pl-8 py-5 border-b border-[#f0f2f5]">
                        <p className="text-[13px] font-extrabold text-text-main m-0 tracking-tight">{row.date}</p>
                      </td>
                      <td className="py-5 border-b border-[#f0f2f5]">
                        <p className="text-[13px] font-bold text-text-main m-0 tracking-tight">{row.desc}</p>
                      </td>
                      <td className="py-5 border-b border-[#f0f2f5]">
                        <p className="text-[13px] font-extrabold text-blue-500 m-0 tracking-tight">{row.amount}</p>
                      </td>
                      <td className="pr-8 py-5 border-b border-[#f0f2f5] text-right">
                        <span className="text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider border uppercase shadow-sm" style={{ color: row.color, backgroundColor: `${row.color}15`, borderColor: `${row.color}30` }}>
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
      </div>
    </div>
  );
};

export default CustomerDetails;
