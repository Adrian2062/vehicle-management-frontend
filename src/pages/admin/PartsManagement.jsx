import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Edit2, Trash2, Eye, 
  Image as ImageIcon, Upload, AlertCircle, 
  Package, TrendingDown, DollarSign, ArrowRight,
  MoreVertical, Download, Box
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const InventoryStat = ({ title, value, icon: Icon, color }) => (
  <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${color}15`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={24} />
    </div>
    <div>
      <p style={{ margin: 0, fontSize: '12px', fontWeight: '700', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{title}</p>
      <h4 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>{value}</h4>
    </div>
  </div>
);

const PartsManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '4px' }}>Global Inventory Control</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Monitor stock levels, manage visual assets, and handle procurement.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'white', border: '1px solid #d2d6da', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={16} /> Export CSV
          </button>
          <button className="btn" style={{ background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setShowAddForm(!showAddForm)}>
            <Plus size={18} /> {showAddForm ? 'Close Editor' : 'New Catalog Entry'}
          </button>
        </div>
      </div>

      {/* Quick Insights Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        <InventoryStat title="Total SKUs" value="1,240" icon={Box} color="#1A73E8" />
        <InventoryStat title="Low Stock Items" value="14" icon={AlertCircle} color="#fb8c00" />
        <InventoryStat title="Inventory Value" value="$42,800" icon={DollarSign} color="#4caf50" />
        <InventoryStat title="Monthly Turnover" value="84%" icon={Package} color="#e91e63" />
      </div>

      {showAddForm && (
        <div className="card card-with-header" style={{ marginBottom: '48px', border: '2px solid var(--color-blue)' }}>
          <div className="card-header-float header-blue">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Catalog Asset Editor</h4>
          </div>
          <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
            <div>
              <div style={{ height: '240px', border: '2px dashed #d2d6da', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', transition: 'all 0.3s' }}>
                <Upload size={32} style={{ color: 'var(--color-text-muted)', marginBottom: '12px' }} />
                <p style={{ fontSize: '13px', fontWeight: '800', color: 'var(--color-text-muted)', margin: 0 }}>DRAG PHOTO HERE</p>
                <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px' }}>PNG, JPG up to 10MB</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <p className="label-caps">Part Nomenclature</p>
                <input type="text" placeholder="e.g. V8 Fuel Injector" className="enterprise-input" />
              </div>
              <div>
                <p className="label-caps">Global SKU</p>
                <input type="text" placeholder="e.g. PRT-900X" className="enterprise-input" />
              </div>
              <div>
                <p className="label-caps">Base Unit Price ($)</p>
                <input type="number" placeholder="0.00" className="enterprise-input" />
              </div>
              <div>
                <p className="label-caps">Inventory Category</p>
                <select className="enterprise-input">
                  <option>Engine Components</option>
                  <option>Braking Systems</option>
                  <option>Electrical</option>
                  <option>Body & Trim</option>
                </select>
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px' }}>
                <button className="btn" style={{ background: '#f8fafc', border: '1px solid #d2d6da' }}>Save as Draft</button>
                <button className="btn" style={{ background: 'var(--color-blue)', color: 'white', padding: '12px 32px' }}>Publish Entry</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Catalog Card */}
      <div className="card card-with-header" style={{ padding: 0 }}>
        <div className="card-header-float header-dark">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Live Product Catalog</h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={14} color="white" />
                <input type="text" placeholder="Quick search..." style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '12px', outline: 'none', width: '150px' }} />
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '80px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ paddingLeft: '24px' }}>PRODUCT ASSET</th>
                <th>CATEGORY</th>
                <th>AVAILABILITY</th>
                <th>VALUATION</th>
                <th style={{ textAlign: 'right', paddingRight: '24px' }}>MGMT</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Ceramic Brake Pads', sku: 'SKU-BR-001', cat: 'BRAKING', stock: 45, price: 124.99, status: 'IN STOCK', color: '#4caf50' },
                { name: 'Synthetic Oil Filter', sku: 'SKU-OL-992', cat: 'MAINTENANCE', stock: 8, price: 18.50, status: 'LOW STOCK', color: '#fb8c00' },
                { name: 'LED Headlight Unit', sku: 'SKU-EL-404', cat: 'ELECTRICAL', stock: 0, price: 299.00, status: 'OUT OF STOCK', color: '#f44336' },
                { name: 'Air Intake Filter', sku: 'SKU-AI-112', cat: 'ENGINE', stock: 120, price: 45.00, status: 'IN STOCK', color: '#4caf50' },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td style={{ paddingLeft: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ImageIcon size={20} color="var(--color-text-muted)" />
                      </div>
                      <div>
                        <p style={{ fontWeight: '800', fontSize: '14px', margin: 0, color: 'var(--color-text-main)' }}>{item.name}</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '600' }}>{item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td><span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--color-text-muted)', background: '#f8fafc', padding: '4px 8px', borderRadius: '4px' }}>{item.cat}</span></td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color }}></div>
                        <span style={{ fontSize: '12px', fontWeight: '800', color: item.color }}>{item.status}</span>
                      </div>
                      <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '700' }}>{item.stock} UNITS</p>
                    </div>
                  </td>
                  <td><p style={{ fontSize: '14px', fontWeight: '800', margin: 0, color: 'var(--color-text-main)' }}>${item.price.toFixed(2)}</p></td>
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
          <Pagination totalItems={1240} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default PartsManagement;
