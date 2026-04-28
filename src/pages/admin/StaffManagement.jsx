import React, { useState } from 'react';
import { 
  Users, Plus, Search, Filter, Edit2, Trash2, 
  Shield, Mail, Phone, Calendar, MoreVertical,
  Activity, ShieldCheck, Clock, Award, UserPlus
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const PerformanceMetric = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-material p-5 flex items-center gap-4 transition-transform hover:scale-[1.02] duration-200">
    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color: color }}>
      <Icon size={20} />
    </div>
    <div>
      <p className="m-0 text-[11px] font-extrabold text-text-muted uppercase tracking-wider">{title}</p>
      <h4 className="m-0 text-lg font-extrabold text-text-main">{value}</h4>
    </div>
  </div>
);

const StaffManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="pb-10">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Team Operations & Roles</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Oversee workforce permissions, track system activity, and manage credentials.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white border border-[#d2d6da] text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all">
            <Activity size={16} /> Audit Logs
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95" onClick={() => setShowAddForm(!showAddForm)}>
            <UserPlus size={18} /> Register Personnel
          </button>
        </div>
      </div>

      {/* Team Health Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <PerformanceMetric title="Active Staff" value="14 / 16" icon={Users} color="#1A73E8" />
        <PerformanceMetric title="Admin Accounts" value="3" icon={ShieldCheck} color="#D81B60" />
        <PerformanceMetric title="Uptime Stats" value="99.9%" icon={Clock} color="#43A047" />
        <PerformanceMetric title="Avg Task Rate" value="12/day" icon={Award} color="#FB8C00" />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-xl shadow-material relative mb-12 overflow-hidden border border-primary/20">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
            <h4 className="m-0 text-base font-bold">Personnel Registration Portal</h4>
          </div>
          <div className="mt-20 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Full Name</p>
              <input type="text" placeholder="Johnathan Doe" className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all placeholder:text-text-muted/50" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Corporate Email</p>
              <input type="email" placeholder="j.doe@autopart.corp" className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all placeholder:text-text-muted/50" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Assigned Rank/Role</p>
              <select className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all bg-white cursor-pointer appearance-none">
                <option>Systems Administrator</option>
                <option>Inventory Manager</option>
                <option>Senior Technician</option>
                <option>Sales Associate</option>
              </select>
            </div>
            <div className="md:col-span-3 flex justify-end gap-4 mt-4">
              <button className="px-6 py-2.5 rounded-xl bg-slate-50 border border-[#d2d6da] text-text-main text-xs font-extrabold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-sm" onClick={() => setShowAddForm(false)}>Cancel Request</button>
              <button className="px-8 py-3 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest hover:bg-black shadow-header transition-all transform active:scale-95">Activate Access</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Staff Directory */}
      <div className="bg-white rounded-xl shadow-material relative mt-10 overflow-hidden border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-base font-bold">Personnel Directory</h4>
            <div className="bg-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/10 group focus-within:bg-white/20 transition-all">
              <Search size={14} className="text-white" />
              <input type="text" placeholder="Filter by name/ID..." className="bg-transparent border-none text-white text-xs outline-none w-40 placeholder:text-white/50" />
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">PERSONNEL</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">ROLE & SECURITY</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">CONTACT HUB</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">HIRE DATE</th>
                <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'EMP-001', name: 'Robert Fox', role: 'Full Admin', email: 'robert@auto.com', date: 'Jan 12, 2023', color: '#ef4444' },
                { id: 'EMP-045', name: 'Cody Fisher', role: 'Inventory', email: 'cody@auto.com', date: 'Feb 28, 2023', color: '#3b82f6' },
                { id: 'EMP-089', name: 'Esther Howard', role: 'Technician', email: 'esther@auto.com', date: 'Mar 15, 2023', color: '#10b981' },
                { id: 'EMP-112', name: 'Jenny Wilson', role: 'Sales Lead', email: 'jenny@auto.com', date: 'May 02, 2023', color: '#f59e0b' },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-text-main text-white flex items-center justify-center font-extrabold text-[12px] shadow-header">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-tight">{item.name}</p>
                        <p className="text-[10px] text-text-muted m-0 font-extrabold uppercase tracking-widest mt-0.5">ID: {item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs font-extrabold text-text-main tracking-tight">{item.role}</span>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-text-main">
                        <Mail size={12} className="text-text-muted" /> {item.email}
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]"><p className="text-[13px] text-text-muted m-0 font-extrabold">{item.date}</p></td>
                  <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg bg-slate-50 text-text-muted hover:text-text-main hover:bg-slate-100 transition-all shadow-sm border border-slate-100"><Edit2 size={14} /></button>
                      <button className="p-2 rounded-lg bg-slate-50 text-red-400 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm border border-slate-100"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalItems={16} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
