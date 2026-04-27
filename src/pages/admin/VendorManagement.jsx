import React from 'react';
import { 
  Truck, Star, Phone, Mail, 
  MapPin, Plus, Search, MoreVertical,
  Edit2, Trash2, ShieldCheck, Globe,
  Briefcase, Activity, Package
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const VendorStat = ({ title, value, icon: Icon, color }) => (
  <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${color}15`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={24} />
    </div>
    <div>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{title}</p>
      <h4 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>{value}</h4>
    </div>
  </div>
);

const VendorManagement = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Strategic Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '4px' }}>Strategic Supply Chain</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Manage global vendor partnerships, monitor fulfillment rates, and optimize procurement.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'white', border: '1px solid #d2d6da', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={16} /> Fulfillment Audit
          </button>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Add Strategic Partner
          </button>
        </div>
      </div>

      {/* Supply Chain Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        <VendorStat title="Active Partners" value="24" icon={Truck} color="#1A73E8" />
        <VendorStat title="Avg. Lead Time" value="3.2 Days" icon={Package} color="#FB8C00" />
        <VendorStat title="Fulfillment Rate" value="96.4%" icon={ShieldCheck} color="#43A047" />
        <VendorStat title="Procured (MTD)" value="$18,400" icon={Briefcase} color="#D81B60" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
        {/* Rich Vendor Registry Card */}
        <div className="card card-with-header" style={{ padding: 0 }}>
          <div className="card-header-float header-blue">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Global Supplier Registry</h4>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={14} color="white" />
                <input type="text" placeholder="Search partners..." style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '12px', outline: 'none', width: '200px' }} />
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '80px' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ paddingLeft: '24px' }}>VENDOR IDENTITY</th>
                  <th>PRIMARY CATEGORY</th>
                  <th>TRUST RATING</th>
                  <th>CONTACT HUB</th>
                  <th style={{ textAlign: 'right', paddingRight: '24px' }}>MGMT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Bosch Automotive', id: 'V-9001', cat: 'ELECTRICAL', rating: 4.9, country: 'Germany', email: 'orders@bosch.de', color: '#1A73E8' },
                  { name: 'Michelin Tires Co.', id: 'V-9042', cat: 'WHEELS & TIRES', rating: 4.7, country: 'France', email: 'sales@michelin.fr', color: '#43A047' },
                  { name: 'Castrol Lubricants', id: 'V-8821', cat: 'MAINTENANCE', rating: 4.5, country: 'UK', email: 'uk-desk@castrol.com', color: '#FB8C00' },
                  { name: 'Brembo Braking', id: 'V-7712', cat: 'BRAKES', rating: 5.0, country: 'Italy', email: 'support@brembo.it', color: '#D81B60' },
                ].map((vendor, idx) => (
                  <tr key={idx}>
                    <td style={{ paddingLeft: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f0f2f5' }}>
                          <Globe size={20} color="var(--color-text-muted)" />
                        </div>
                        <div>
                          <p style={{ fontWeight: '800', fontSize: '14px', margin: 0, color: 'var(--color-text-main)' }}>{vendor.name}</p>
                          <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '700' }}>{vendor.country} • {vendor.id}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: vendor.color, background: `${vendor.color}15`, padding: '4px 10px', borderRadius: '6px' }}>{vendor.cat}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={14} color="#FFB300" fill="#FFB300" />
                        <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--color-text-main)' }}>{vendor.rating}</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '600' }}>/ 5.0</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', color: 'var(--color-text-main)' }}>
                          <Mail size={12} color="var(--color-text-muted)" /> {vendor.email}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                          <Phone size={11} color="var(--color-text-muted)" /> +{Math.floor(Math.random() * 90) + 10} 44 992 110
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button className="icon-btn-elevated"><Edit2 size={14} /></button>
                        <button className="icon-btn-elevated" style={{ color: '#f44336' }}><Trash2 size={14} /></button>
                        <button className="icon-btn-elevated"><MoreVertical size={14} /></button>
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
    </div>
  );
};

export default VendorManagement;
