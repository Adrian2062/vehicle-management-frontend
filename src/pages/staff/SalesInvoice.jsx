import React, { useState } from 'react';
import { 
  FileText, Plus, Search, Trash2, 
  Send, Printer, Download, Save,
  User, Mail, Phone, Hash,
  ChevronDown, AlertCircle, CheckCircle2,
  MoreVertical, Calendar, CreditCard, Box
} from 'lucide-react';

const InvoiceItem = ({ name, sku, price, qty, onRemove }) => (
  <tr className="hover:bg-slate-50 transition-colors group">
    <td className="pl-6 py-5 border-b border-[#f0f2f5]">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted shadow-sm group-hover:scale-110 transition-transform">
          <Box size={18} />
        </div>
        <div>
          <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-none mb-1">{name}</p>
          <p className="text-[10px] text-text-muted m-0 font-extrabold uppercase tracking-widest">{sku}</p>
        </div>
      </div>
    </td>
    <td className="py-5 border-b border-[#f0f2f5]">
      <p className="text-sm font-extrabold text-text-main m-0 tracking-tight">${price.toFixed(2)}</p>
    </td>
    <td className="py-5 border-b border-[#f0f2f5]">
      <div className="flex items-center gap-3">
        <button className="w-7 h-7 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-text-main hover:bg-slate-50 hover:border-blue-500 transition-all shadow-sm active:scale-90">-</button>
        <span className="text-sm font-extrabold text-text-main w-6 text-center">{qty}</span>
        <button className="w-7 h-7 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-text-main hover:bg-slate-50 hover:border-blue-500 transition-all shadow-sm active:scale-90">+</button>
      </div>
    </td>
    <td className="py-5 border-b border-[#f0f2f5]">
      <p className="text-sm font-extrabold text-text-main m-0 tracking-tight">${(price * qty).toFixed(2)}</p>
    </td>
    <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
      <button 
        onClick={onRemove} 
        className="p-2 rounded-lg bg-slate-50 text-red-400 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm border border-slate-100"
      >
        <Trash2 size={16} />
      </button>
    </td>
  </tr>
);

const SalesInvoice = () => {
  return (
    <div className="pb-10">
      {/* Dynamic Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Create Sales Invoice</h2>
            <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-extrabold text-text-muted uppercase tracking-widest shadow-sm">DRAFT #INV-4022</span>
          </div>
          <p className="text-text-muted text-sm font-medium">Generate high-fidelity invoices with integrated tax and stock reconciliation.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all">
            <Save size={16} /> Save Draft
          </button>
          <button className="px-7 py-3 rounded-xl bg-blue-500 text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95">
            <Send size={16} /> Finalize & Transmit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Main Item Builder */}
          <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-3">
                  <Hash size={18} className="text-white/60" />
                  <h4 className="m-0 text-base font-bold">Line Item Assets</h4>
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-blue-500 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-blue-600 transition-all border border-white/10 flex items-center gap-2">
                  <Plus size={14} /> Add Inventory Entry
                </button>
              </div>
            </div>
            
            <div className="mt-20">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">SPECIFICATION</th>
                    <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">UNIT PRICE</th>
                    <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">QUANTITY</th>
                    <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">SUBTOTAL</th>
                    <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <InvoiceItem name="Brake Pads - Performance Series" sku="SKU-882" price={124.99} qty={1} />
                  <InvoiceItem name="Synthetic Oil (5L)" sku="SKU-201" price={45.00} qty={2} />
                </tbody>
              </table>
              
              <div className="p-8 border-t border-[#f0f2f5] flex justify-end">
                <div className="w-64 flex flex-col gap-4">
                  <div className="flex justify-between items-center group">
                    <span className="text-sm font-extrabold text-text-muted tracking-tight group-hover:text-text-main transition-colors">Subtotal (USD)</span>
                    <span className="text-sm font-extrabold text-text-main">$214.99</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-sm font-extrabold text-text-muted tracking-tight group-hover:text-text-main transition-colors">Taxation (15%)</span>
                    <span className="text-sm font-extrabold text-text-main">$32.25</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-4 border-t-2 border-slate-100">
                    <span className="text-lg font-extrabold text-text-main tracking-tighter">Total Payable</span>
                    <span className="text-2xl font-extrabold text-blue-500 tracking-tighter">$247.24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Memo Card */}
          <div className="bg-white rounded-xl shadow-material p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted shadow-sm border border-slate-100">
                <FileText size={20} />
              </div>
              <h4 className="m-0 text-base font-bold text-text-main">Billing Notes & Terms</h4>
            </div>
            <textarea 
              placeholder="Include specific warranty terms or service notes here..." 
              className="w-full px-5 py-4 rounded-xl border border-slate-200 text-sm font-medium text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm placeholder:text-text-muted/40 h-32 resize-none transition-all"
            ></textarea>
          </div>
        </div>

        {/* Right Information Hub */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-blue-gradient">
              <h4 className="m-0 text-base font-bold">Client Metadata</h4>
            </div>
            <div className="mt-20 p-8 pt-4">
              <div className="flex items-center gap-5 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner group">
                <div className="w-14 h-14 rounded-2xl bg-dark-gradient flex items-center justify-center text-white shadow-header group-hover:rotate-3 transition-transform">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="m-0 text-xl font-extrabold text-text-main tracking-tighter">Adrian Smith</h4>
                  <p className="m-0 text-[10px] font-extrabold text-blue-500 uppercase tracking-widest mt-0.5">#CS-8891 · GOLD MEMBER</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-5 px-2">
                <div className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-blue-500 transition-all border border-slate-100">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm font-extrabold text-text-main tracking-tight">adrian@example.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-blue-500 transition-all border border-slate-100">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm font-extrabold text-text-main tracking-tight">+1 (555) 902-1144</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#f0f2f5]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest">CREDIT RELIABILITY</span>
                  <span className="text-[11px] font-extrabold text-green-500">EXCELLENT</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[92%] bg-green-500 rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-orange-200 group-hover:scale-110 transition-transform duration-700">
              <AlertCircle size={100} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={20} className="text-orange-600" />
                <h4 className="m-0 text-sm font-extrabold text-orange-900 uppercase tracking-tight">Verification Guidelines</h4>
              </div>
              <ul className="m-0 pl-0 space-y-3 list-none">
                {[
                  'Cross-reference part IDs with ERP labels.',
                  'Apply 5% Gold Member loyalty discount.',
                  'Manager override needed for >$5,000.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold text-orange-800/80 leading-relaxed">
                    <CheckCircle2 size={14} className="shrink-0 text-orange-500 mt-0.5" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;
