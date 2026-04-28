import React from 'react';
import { 
  Truck, Star, Phone, Mail, 
  MapPin, Plus, Search, MoreVertical,
  Edit2, Trash2, ShieldCheck, Globe,
  Briefcase, Activity, Package
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const VendorStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-material p-5 flex items-center gap-4 transition-all hover:scale-[1.02] duration-200">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color: color }}>
      <Icon size={24} />
    </div>
    <div>
      <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest leading-none mb-1">{title}</p>
      <h4 className="m-0 text-xl font-extrabold text-text-main leading-none">{value}</h4>
    </div>
  </div>
);

const VendorManagement = () => {
  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 leading-tight tracking-tight">Strategic Supply Chain</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Manage global vendor partnerships, monitor fulfillment rates, and optimize procurement.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white border border-[#d2d6da] text-text-main text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all">
            <Activity size={16} /> Fulfillment Audit
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all">
            <Plus size={18} /> Add Strategic Partner
          </button>
        </div>
      </div>

      {/* Supply Chain Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <VendorStat title="Active Partners" value="24" icon={Truck} color="#1A73E8" />
        <VendorStat title="Avg. Lead Time" value="3.2 Days" icon={Package} color="#FB8C00" />
        <VendorStat title="Fulfillment Rate" value="96.4%" icon={ShieldCheck} color="#43A047" />
        <VendorStat title="Procured (MTD)" value="$18,400" icon={Briefcase} color="#D81B60" />
      </div>

      {/* Rich Vendor Registry Card */}
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-blue-gradient">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-base font-bold">Global Supplier Registry</h4>
            <div className="bg-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/10 group focus-within:bg-white/20 transition-all">
              <Search size={14} className="text-white" />
              <input type="text" placeholder="Search partners..." className="bg-transparent border-none text-white text-xs outline-none w-48 placeholder:text-white/50" />
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">VENDOR IDENTITY</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">PRIMARY CATEGORY</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">TRUST RATING</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">CONTACT HUB</th>
                <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">MGMT</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Bosch Automotive', id: 'V-9001', cat: 'ELECTRICAL', rating: 4.9, country: 'Germany', email: 'orders@bosch.de', color: '#1A73E8' },
                { name: 'Michelin Tires Co.', id: 'V-9042', cat: 'WHEELS & TIRES', rating: 4.7, country: 'France', email: 'sales@michelin.fr', color: '#43A047' },
                { name: 'Castrol Lubricants', id: 'V-8821', cat: 'MAINTENANCE', rating: 4.5, country: 'UK', email: 'uk-desk@castrol.com', color: '#FB8C00' },
                { name: 'Brembo Braking', id: 'V-7712', cat: 'BRAKES', rating: 5.0, country: 'Italy', email: 'support@brembo.it', color: '#D81B60' },
              ].map((vendor, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm text-text-muted">
                        <Globe size={20} />
                      </div>
                      <div>
                        <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-none mb-1">{vendor.name}</p>
                        <p className="text-[11px] text-text-muted font-extrabold m-0 uppercase tracking-widest">{vendor.country} • {vendor.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider border uppercase shadow-sm" style={{ color: vendor.color, backgroundColor: `${vendor.color}15`, borderColor: `${vendor.color}30` }}>{vendor.cat}</span>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <span className="text-sm font-extrabold text-text-main">{vendor.rating}</span>
                      <span className="text-xs text-text-muted font-bold">/ 5.0</span>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-text-main">
                        <Mail size={12} className="text-text-muted" /> {vendor.email}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-text-muted font-bold">
                        <Phone size={11} className="text-text-muted" /> +44 992 110
                      </div>
                    </div>
                  </td>
                  <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg bg-slate-50 text-text-muted hover:text-blue-500 hover:bg-blue-50 transition-all shadow-sm border border-slate-100"><Edit2 size={14} /></button>
                      <button className="p-2 rounded-lg bg-slate-50 text-red-400 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm border border-slate-100"><Trash2 size={14} /></button>
                      <button className="p-2 rounded-lg bg-slate-50 text-text-muted hover:text-text-main hover:bg-slate-100 transition-all shadow-sm border border-slate-100"><MoreVertical size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalItems={24} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
