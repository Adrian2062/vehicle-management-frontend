import React from 'react';
import { 
  FileCheck, Download, Search, MoreVertical, 
  Truck, ArrowUpRight, ArrowDownLeft, Calendar,
  ShieldCheck, Briefcase, Filter, RefreshCw
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const ProcureStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-material p-6 flex flex-col gap-3 transition-all hover:scale-[1.02] duration-200">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color: color }}>
      <Icon size={22} />
    </div>
    <div>
      <h3 className="m-0 text-2xl font-extrabold text-text-main leading-tight tracking-tight">{value}</h3>
      <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest mt-1">{title}</p>
    </div>
  </div>
);

const PurchaseInvoice = () => {
  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 leading-tight tracking-tight">Procurement Intelligence</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Analyze inbound supply chains, verify vendor invoicing, and manage inventory valuation.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white border border-[#d2d6da] text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all">
            <RefreshCw size={16} /> Sync ERP
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all">
            <FileCheck size={18} /> New Purchase Order
          </button>
        </div>
      </div>

      {/* Procurement Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <ProcureStat title="Pending Invoices" value="8" icon={Briefcase} color="#1A73E8" />
        <ProcureStat title="Inbound Value" value="$12,450" icon={Truck} color="#FB8C00" />
        <ProcureStat title="Verified (Q2)" value="94%" icon={ShieldCheck} color="#43A047" />
        <ProcureStat title="Tax Liability" value="$1,840" icon={ArrowDownLeft} color="#D81B60" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Advanced Procurement Table */}
        <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-pink-gradient">
            <div className="flex justify-between w-full items-center">
              <h4 className="m-0 text-base font-bold">Strategic Procurement Log</h4>
              <div className="bg-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/10 group focus-within:bg-white/20 transition-all">
                <Search size={14} className="text-white" />
                <input type="text" placeholder="Filter invoices..." className="bg-transparent border-none text-white text-xs outline-none w-32 placeholder:text-white/50" />
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">SUPPLIER</th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">INVOICE #</th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">DATE</th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">TOTAL</th>
                  <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vendor: 'Bosch Automotive', id: 'PO-2024-001', date: 'Apr 26, 2024', amount: '$4,250.00', status: 'RECEIVED', color: '#4caf50' },
                  { vendor: 'Castrol UK', id: 'PO-2024-088', date: 'Apr 22, 2024', amount: '$1,120.00', status: 'IN TRANSIT', color: '#fb8c00' },
                  { vendor: 'Brembo Italy', id: 'PO-2024-102', date: 'Apr 15, 2024', amount: '$8,400.00', status: 'RECEIVED', color: '#4caf50' },
                  { vendor: 'Michelin Global', id: 'PO-2024-114', date: 'Apr 10, 2024', amount: '$2,400.00', status: 'PENDING', color: '#7b809a' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm text-text-muted">
                          <Briefcase size={16} />
                        </div>
                        <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-tight">{row.vendor}</p>
                      </div>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]"><p className="text-xs font-extrabold text-blue-500 m-0 tracking-widest">{row.id}</p></td>
                    <td className="py-5 border-b border-[#f0f2f5]"><p className="text-[13px] text-text-muted m-0 font-extrabold">{row.date}</p></td>
                    <td className="py-5 border-b border-[#f0f2f5]"><p className="text-sm font-extrabold m-0 text-text-main tracking-tight">{row.amount}</p></td>
                    <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                      <span className="text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider border uppercase shadow-sm" style={{ color: row.color, backgroundColor: `${row.color}15`, borderColor: `${row.color}30` }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination totalItems={142} itemsPerPage={10} currentPage={1} />
          </div>
        </div>

        {/* Auditor's Intelligence Widget */}
        <div className="flex flex-col gap-8">
          <div className="bg-dark-gradient rounded-xl text-white p-6 shadow-header relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="m-0 text-lg font-extrabold tracking-tight">Inventory Valuation</h4>
                <p className="text-xs text-white/60 m-0 mt-1 font-medium">Live system calculation</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <h2 className="text-4xl font-extrabold m-0 tracking-tighter">$248,400</h2>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs font-extrabold text-green-400 bg-green-400/10 px-2 py-0.5 rounded shadow-sm">+4.2%</span>
              <span className="text-xs text-white/60 font-medium">growth from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-material p-6 border border-slate-100">
            <h4 className="m-0 text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-5">Audit Summary</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Unverified Invoices', value: '3', color: '#f44336' },
                { label: 'Outstanding Credit', value: '$4,500', color: '#fb8c00' },
                { label: 'Tax Deductible', value: '$840.50', color: '#4caf50' }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center group">
                  <span className="text-[13px] font-extrabold text-text-muted group-hover:text-text-main transition-colors">{item.label}</span>
                  <span className="text-sm font-extrabold tracking-tight" style={{ color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInvoice;
