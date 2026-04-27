import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit2, 
  Trash2, 
  Eye, 
  Image as ImageIcon, 
  Upload, 
  AlertCircle 
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const PartsManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Inventory Management</h1>
        </div>
        <button className="btn" style={{ background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setShowAddForm(!showAddForm)}>
          <Plus size={18} />
          {showAddForm ? 'Cancel' : 'Add New Part'}
        </button>
      </div>

      {showAddForm && (
        <div className="card" style={{ marginBottom: '48px', marginTop: '40px' }}>
          <div className="card-header-float header-blue">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Add Part Media & Details</h4>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', marginTop: '40px' }}>
            <div>
              <div style={{ height: '200px', border: '1px dashed #d2d6da', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
                <Upload size={24} style={{ color: 'var(--color-text-muted)', marginBottom: '8px' }} />
                <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-text-muted)' }}>UPLOAD PHOTO</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input type="text" placeholder="Part Name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d2d6da', outline: 'none' }} />
              <input type="text" placeholder="SKU" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d2d6da', outline: 'none' }} />
              <input type="number" placeholder="Price" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d2d6da', outline: 'none' }} />
              <button className="btn" style={{ background: 'var(--color-blue)', color: 'white' }}>Save Part</button>
            </div>
          </div>
        </div>
      )}

      <div className="card card-with-header" style={{ marginTop: '40px', padding: 0 }}>
        <div className="card-header-float header-dark">
          <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Inventory List</h4>
        </div>
        <div style={{ marginTop: '80px' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #f0f2f5', display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input type="text" placeholder="Search inventory..." style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: '8px', border: '1px solid #d2d6da', fontSize: '14px', outline: 'none' }} />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th style={{ paddingLeft: '24px' }}>Part</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th style={{ textAlign: 'right', paddingRight: '24px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Brake Pads', sku: 'BP-101', stock: 45, price: 85.00, color: 'header-blue' },
                { name: 'Oil Filter', sku: 'OF-202', stock: 12, price: 15.50, color: 'header-green' }
              ].map((item, idx) => (
                <tr key={idx}>
                  <td style={{ paddingLeft: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className={`stat-icon-float ${item.color}`} style={{ position: 'static', width: '36px', height: '36px', borderRadius: '8px' }}>
                        <ImageIcon size={16} />
                      </div>
                      <div>
                        <p style={{ fontWeight: '700', fontSize: '14px', margin: 0 }}>{item.name}</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0 }}>{item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td><span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-text-muted)' }}>SERVICE</span></td>
                  <td><span style={{ fontWeight: '700' }}>{item.stock}</span></td>
                  <td style={{ fontWeight: '700' }}>${item.price}</td>
                  <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                      <Edit2 size={16} style={{ cursor: 'pointer', color: '#1A73E8' }} />
                      <Trash2 size={16} style={{ cursor: 'pointer', color: '#f44336' }} />
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

export default PartsManagement;
