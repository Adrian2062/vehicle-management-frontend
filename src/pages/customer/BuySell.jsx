import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Tag, 
  Search, 
  Filter, 
  Car, 
  Package, 
  Upload, 
  DollarSign,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const BuySell = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [sellSuccess, setSellSuccess] = useState(false);

  const inventoryItems = [
    { id: 1, name: '2023 Tesla Model 3 Long Range', type: 'Vehicle', price: '$42,500', image: 'car', status: 'Available', tags: ['Electric', 'AWD'] },
    { id: 2, name: 'Brembo Ceramic Brake Kit', type: 'Part', price: '$850', image: 'package', status: 'In Stock', tags: ['Performance', 'Braking'] },
    { id: 3, name: '2021 Ford Mustang GT', type: 'Vehicle', price: '$35,000', image: 'car', status: 'Available', tags: ['V8', 'RWD'] },
    { id: 4, name: 'Michelin Pilot Sport 4S (Set of 4)', type: 'Part', price: '$1,200', image: 'package', status: 'In Stock', tags: ['Tires', 'Summer'] },
    { id: 5, name: 'KW V3 Coilover Suspension', type: 'Part', price: '$2,800', image: 'package', status: 'Low Stock', tags: ['Suspension', 'Track'] },
    { id: 6, name: '2022 BMW M3 Competition', type: 'Vehicle', price: '$78,000', image: 'car', status: 'Reserved', tags: ['Turbo', 'AWD'] },
  ];

  const handleSellSubmit = (e) => {
    e.preventDefault();
    setSellSuccess(true);
    setTimeout(() => setSellSuccess(false), 3000);
  };

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-text-main)', margin: '0 0 8px 0' }}>Marketplace</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0 }}>Browse premium inventory or request an appraisal for your vehicle.</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderBottom: '2px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
        <button 
          onClick={() => setActiveTab('buy')}
          style={{ 
            background: activeTab === 'buy' ? 'var(--color-blue)' : 'transparent',
            color: activeTab === 'buy' ? 'white' : 'var(--color-text-muted)',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: '800',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <ShoppingBag size={18} /> Buy
        </button>
        <button 
          onClick={() => setActiveTab('sell')}
          style={{ 
            background: activeTab === 'sell' ? 'var(--color-dark)' : 'transparent',
            color: activeTab === 'sell' ? 'white' : 'var(--color-text-muted)',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: '800',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <Tag size={18} /> Sell or Trade-In
        </button>
      </div>

      {activeTab === 'buy' && (
        <>
          {/* Filters Bar */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ flex: 1, background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Search size={20} color="var(--color-text-muted)" />
              <input 
                type="text" 
                placeholder="Search vehicles and parts..." 
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--color-text-main)', fontWeight: '600' }} 
              />
            </div>
            <button className="btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={18} /> Filters
            </button>
          </div>

          {/* Inventory Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {inventoryItems.map((item) => (
              <div key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '180px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {item.image === 'car' ? <Car size={64} color="#cbd5e1" /> : <Package size={64} color="#cbd5e1" />}
                  <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '800', color: item.status === 'Available' || item.status === 'In Stock' ? 'var(--color-green)' : 'var(--color-orange)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    {item.status}
                  </span>
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--color-blue)', background: 'rgba(26,115,232,0.1)', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>{item.type}</span>
                    {item.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '10px', fontWeight: '800', color: 'var(--color-text-muted)', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>{tag}</span>
                    ))}
                  </div>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '800', color: 'var(--color-text-main)', flex: 1 }}>{item.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-text-main)' }}>{item.price}</span>
                    <button className="btn" style={{ background: 'var(--color-dark)', color: 'white', padding: '8px 16px', fontSize: '13px' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'sell' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Sell Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '32px', background: 'linear-gradient(135deg, var(--color-dark) 0%, #000 100%)', color: 'white' }}>
              <ShieldCheck size={40} color="var(--color-blue)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 12px 0' }}>Get a Premium Offer</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: '0 0 24px 0', lineHeight: 1.6 }}>
                Looking to sell your vehicle or high-performance parts? Submit your details below for a quick, competitive appraisal from our expert team.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: '600' }}><CheckCircle2 size={18} color="var(--color-blue)" /> Immediate cash offers</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: '600' }}><CheckCircle2 size={18} color="var(--color-blue)" /> Trade-in credit bonuses</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: '600' }}><CheckCircle2 size={18} color="var(--color-blue)" /> Hassle-free paperwork</li>
              </ul>
            </div>
            
            {sellSuccess && (
              <div style={{ background: 'rgba(76, 175, 80, 0.1)', border: '1px solid #4caf50', padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', color: '#2e7d32' }}>
                <CheckCircle2 size={24} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800' }}>Request Submitted</h4>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '600' }}>Our team will review your details and contact you shortly.</p>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="card card-with-header" style={{ padding: 0, border: '1px solid #e2e8f0' }}>
            <div className="card-header-float header-blue">
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Appraisal Request Form</h4>
            </div>
            <form onSubmit={handleSellSubmit} style={{ padding: '32px', marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div>
                <p className="label-caps">Item Type</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                    <input type="radio" name="itemType" value="vehicle" defaultChecked /> Complete Vehicle
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                    <input type="radio" name="itemType" value="part" /> Auto Part / Accessory
                  </label>
                </div>
              </div>

              <div>
                <p className="label-caps">Make, Model, Year / Part Name</p>
                <input type="text" className="enterprise-input" placeholder="e.g. 2019 Porsche 911 Carrera S" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <p className="label-caps">Condition</p>
                  <select className="enterprise-input">
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Needs Repair</option>
                  </select>
                </div>
                <div>
                  <p className="label-caps">Mileage (If Vehicle)</p>
                  <input type="number" className="enterprise-input" placeholder="0" />
                </div>
              </div>

              <div>
                <p className="label-caps">Upload Photos (Max 5)</p>
                <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '32px', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}>
                  <Upload size={24} color="var(--color-text-muted)" style={{ marginBottom: '8px' }} />
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: 'var(--color-text-main)' }}>Click to upload or drag and drop</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: 'var(--color-text-muted)' }}>JPG, PNG up to 10MB each</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button type="submit" className="btn" style={{ background: 'var(--color-blue)', color: 'white', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  Submit for Appraisal <ArrowRight size={16} />
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuySell;
