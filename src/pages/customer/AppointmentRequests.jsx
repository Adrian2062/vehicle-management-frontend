import React from 'react';
import { 
  Calendar, PenTool, MessageSquare, CheckCircle, 
  Car, Clock, AlertTriangle, ShieldCheck,
  Search, ArrowRight
} from 'lucide-react';

const AppointmentRequests = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Strategic Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '4px' }}>Service Orchestration</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Schedule advanced maintenance or initiate specialty parts procurement.</p>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 20px', borderRadius: '12px', border: '1px solid #d2d6da', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Clock size={18} color="var(--color-blue)" />
          <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--color-text-main)' }}>Avg. Response: 2 Hours</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Advanced Maintenance Booking */}
        <div className="card card-with-header">
          <div className="card-header-float header-blue">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Calendar size={20} color="white" />
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Schedule Maintenance</h4>
            </div>
          </div>
          
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p className="label-caps">Target Vehicle Profile</p>
              <div style={{ position: 'relative' }}>
                <Car size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <select className="enterprise-input" style={{ paddingLeft: '44px' }}>
                  <option>Tesla Model S (XYZ-001)</option>
                  <option>Toyota RAV4 (ABC-992)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p className="label-caps">Preferred Date</p>
                <input type="date" className="enterprise-input" />
              </div>
              <div>
                <p className="label-caps">Maintenance Priority</p>
                <select className="enterprise-input">
                  <option>Standard Maintenance</option>
                  <option>High Priority / Urgent</option>
                  <option>Periodic Inspection</option>
                </select>
              </div>
            </div>

            <div>
              <p className="label-caps">Service Category</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['Engine Diagnostic', 'Brake Systems', 'Electrical Hub', 'Fluid Exchange'].map(service => (
                  <label key={service} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', border: '1px solid #f0f2f5', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <input type="checkbox" style={{ accentColor: 'var(--color-blue)' }} />
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-text-main)' }}>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="btn btn-primary" style={{ background: 'var(--color-blue)', width: '100%', padding: '14px', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <ShieldCheck size={18} /> CONFIRM BOOKING REQUEST
            </button>
          </div>
        </div>

        {/* Specialty Parts Sourcing */}
        <div className="card card-with-header">
          <div className="card-header-float header-pink">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <PenTool size={20} color="white" />
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Strategic Part Sourcing</h4>
            </div>
          </div>
          
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ padding: '16px', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fee2e2', display: 'flex', gap: '12px' }}>
              <AlertTriangle size={20} color="#ef4444" />
              <p style={{ fontSize: '12px', color: '#991b1b', margin: 0, fontWeight: '600' }}>For discontinued or rare OEM parts, please provide the exact VIN for accurate sourcing.</p>
            </div>

            <div>
              <p className="label-caps">Nomenclature / Part Number</p>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input type="text" placeholder="e.g. OEM Carbon Ceramic Rotors" className="enterprise-input" style={{ paddingLeft: '44px' }} />
              </div>
            </div>

            <div>
              <p className="label-caps">Technical Specifications</p>
              <textarea 
                placeholder="Include model years, trim levels, or material requirements..." 
                className="enterprise-input" 
                style={{ height: '140px', resize: 'none' }}
              ></textarea>
            </div>

            <button className="btn btn-primary" style={{ background: 'var(--color-dark)', width: '100%', padding: '14px', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <MessageSquare size={18} /> SUBMIT PROCUREMENT REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequests;
