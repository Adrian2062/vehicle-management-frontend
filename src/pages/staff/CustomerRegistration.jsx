import React from 'react';
import { UserPlus, Car, Info, Save, User, MapPin, Phone, Mail, Hash, ShieldCheck, ChevronRight } from 'lucide-react';

const CustomerRegistration = () => {
  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Onboard New Customer</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Register personal credentials and vehicle technical specifications.</p>
        </div>
        <button 
          className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95"
          onClick={() => alert('Customer Registered!')}
        >
          <Save size={18} /> Complete Registration
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information Card */}
        <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-blue-gradient">
            <div className="flex items-center gap-3">
              <User size={20} />
              <h4 className="m-0 text-base font-bold">Personal Information</h4>
            </div>
          </div>
          
          <div className="mt-20 p-8 flex flex-col gap-6">
            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Full Legal Name</p>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. Jane Doe" 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Primary Phone</p>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
                    <Phone size={18} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50" 
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Email Address</p>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="jane@example.com" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50" 
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Service Address</p>
              <div className="relative group">
                <div className="absolute left-4 top-4 text-text-muted group-focus-within:text-blue-500 transition-colors">
                  <MapPin size={18} />
                </div>
                <textarea 
                  placeholder="Street, City, State, Zip Code" 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50 h-32 resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Specification Card */}
        <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
            <div className="flex items-center gap-3">
              <Car size={20} />
              <h4 className="m-0 text-base font-bold">Vehicle Technical Data</h4>
            </div>
          </div>

          <div className="mt-20 p-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">License Plate</p>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
                    <Hash size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="ABC-1234" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50" 
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Vehicle Category</p>
                <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm bg-white cursor-pointer appearance-none transition-all">
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Truck / Utility</option>
                  <option>Performance / Sport</option>
                  <option>Motorcycle</option>
                </select>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Manufacturer & Model Year</p>
              <input 
                type="text" 
                placeholder="e.g. 2022 Toyota Camry SE" 
                className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50" 
              />
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">Identification Number (VIN)</p>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
                  <ShieldCheck size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="17-character VIN identifier" 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/50 uppercase" 
                />
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4 items-start shadow-inner">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                <Info size={20} />
              </div>
              <div>
                <p className="m-0 text-xs font-extrabold text-text-main tracking-tight">Automated Compliance Check</p>
                <p className="m-0 text-[11px] text-text-muted mt-1 leading-relaxed font-medium">This data will be synchronized with our global part compatibility database to provide tailored service reminders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
