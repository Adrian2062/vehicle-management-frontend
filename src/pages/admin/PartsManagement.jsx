import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Edit2, Trash2, Eye, 
  Image as ImageIcon, Upload, AlertCircle, 
  Package, TrendingDown, DollarSign, ArrowRight,
  MoreVertical, Download, Box
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const InventoryStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-material p-5 flex items-center gap-4 transition-transform hover:scale-[1.02] duration-200">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color: color }}>
      <Icon size={24} />
    </div>
    <div>
      <p className="m-0 text-[11px] font-extrabold text-text-muted uppercase tracking-wider">{title}</p>
      <h4 className="m-0 text-xl font-extrabold text-text-main">{value}</h4>
    </div>
  </div>
);

const PartsManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="pb-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Global Inventory Control</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Monitor stock levels, manage visual assets, and handle procurement.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white border border-[#d2d6da] text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all">
            <Download size={16} /> Export CSV
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus size={18} /> {showAddForm ? 'Close Editor' : 'New Catalog Entry'}
          </button>
        </div>
      </div>

      {/* Quick Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <InventoryStat title="Total SKUs" value="1,240" icon={Box} color="#1A73E8" />
        <InventoryStat title="Low Stock Items" value="14" icon={AlertCircle} color="#fb8c00" />
        <InventoryStat title="Inventory Value" value="$42,800" icon={DollarSign} color="#4caf50" />
        <InventoryStat title="Monthly Turnover" value="84%" icon={Package} color="#e91e63" />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-xl shadow-material relative mb-12 overflow-hidden border border-blue-500/10">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-blue-gradient">
            <h4 className="m-0 text-base font-bold">Catalog Asset Editor</h4>
          </div>
          <div className="mt-20 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="h-64 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-text-muted group-hover:scale-110 transition-transform">
                  <Upload size={32} />
                </div>
                <p className="text-[12px] font-extrabold text-text-muted mt-4 tracking-widest uppercase">DRAG PHOTO HERE</p>
                <p className="text-[10px] text-text-muted mt-1 font-bold">PNG, JPG up to 10MB</p>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Part Nomenclature</p>
                <input type="text" placeholder="e.g. V8 Fuel Injector" className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all placeholder:text-text-muted/50" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Global SKU</p>
                <input type="text" placeholder="e.g. PRT-900X" className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all placeholder:text-text-muted/50" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Base Unit Price ($)</p>
                <input type="number" placeholder="0.00" className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all placeholder:text-text-muted/50" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Inventory Category</p>
                <select className="w-full px-4 py-3 rounded-xl border border-[#d2d6da] text-sm font-medium outline-none focus:border-blue-500 shadow-sm transition-all bg-white cursor-pointer appearance-none">
                  <option>Engine Components</option>
                  <option>Braking Systems</option>
                  <option>Electrical</option>
                  <option>Body & Trim</option>
                </select>
              </div>
              <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                <button className="px-6 py-2.5 rounded-xl bg-slate-50 border border-[#d2d6da] text-text-main text-xs font-extrabold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-sm" onClick={() => setShowAddForm(false)}>Cancel Edit</button>
                <button className="px-8 py-3 rounded-xl bg-blue-500 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-blue-600 shadow-header transition-all transform active:scale-95">Publish Entry</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Catalog Card */}
      <div className="bg-white rounded-xl shadow-material relative mt-10 overflow-hidden border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-base font-bold">Live Product Catalog</h4>
            <div className="bg-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/10 group focus-within:bg-white/20 transition-all">
              <Search size={14} className="text-white" />
              <input type="text" placeholder="Quick search..." className="bg-transparent border-none text-white text-xs outline-none w-40 placeholder:text-white/50" />
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">PRODUCT ASSET</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">CATEGORY</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">AVAILABILITY</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">VALUATION</th>
                <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">MGMT</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Ceramic Brake Pads', sku: 'SKU-BR-001', cat: 'BRAKING', stock: 45, price: 124.99, status: 'IN STOCK', color: '#10b981' },
                { name: 'Synthetic Oil Filter', sku: 'SKU-OL-992', cat: 'MAINTENANCE', stock: 8, price: 18.50, status: 'LOW STOCK', color: '#f59e0b' },
                { name: 'LED Headlight Unit', sku: 'SKU-EL-404', cat: 'ELECTRICAL', stock: 0, price: 299.00, status: 'OUT OF STOCK', color: '#ef4444' },
                { name: 'Air Intake Filter', sku: 'SKU-AI-112', cat: 'ENGINE', stock: 120, price: 45.00, status: 'IN STOCK', color: '#10b981' },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted shadow-sm">
                        <ImageIcon size={20} />
                      </div>
                      <div>
                        <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-none mb-1">{item.name}</p>
                        <p className="text-[10px] text-text-muted m-0 font-extrabold uppercase tracking-widest">{item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <span className="text-[10px] font-extrabold text-text-muted bg-slate-100 px-3 py-1 rounded-md tracking-wider border border-slate-200 uppercase shadow-sm">{item.cat}</span>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                        <span className="text-xs font-extrabold uppercase tracking-tight" style={{ color: item.color }}>{item.status}</span>
                      </div>
                      <p className="text-[11px] text-text-muted m-0 font-extrabold tracking-widest uppercase">{item.stock} UNITS</p>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <p className="text-sm font-extrabold m-0 text-text-main tracking-tight">${item.price.toFixed(2)}</p>
                  </td>
                  <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg bg-slate-50 text-text-muted hover:text-text-main hover:bg-slate-100 transition-all shadow-sm border border-slate-100"><Edit2 size={14} /></button>
                      <button className="p-2 rounded-lg bg-slate-50 text-red-400 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm border border-slate-100"><Trash2 size={14} /></button>
                      <button className="p-2 rounded-lg bg-slate-50 text-text-muted hover:text-text-main hover:bg-slate-100 transition-all shadow-sm border border-slate-100"><MoreVertical size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalItems={1240} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default PartsManagement;
