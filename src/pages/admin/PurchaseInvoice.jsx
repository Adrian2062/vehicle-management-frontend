import React from 'react';
import { Plus, ShoppingCart, Truck, Search, FileText } from 'lucide-react';

const PurchaseInvoice = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Purchase Orders</h1>
        <button className="btn" style={{ background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          Create New Purchase
        </button>
      </div>

      <div className="card" style={{ marginTop: '40px', padding: 0 }}>
        <div className="card-header-float header-pink">
          <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Stock Update Invoices</h4>
        </div>
        
        <div style={{ marginTop: '40px', padding: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Pending Orders</p>
              <h3 style={{ margin: 0 }}>12</h3>
            </div>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Received Today</p>
              <h3 style={{ margin: 0 }}>4</h3>
            </div>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
              <p className="label-caps" style={{ padding: 0, marginBottom: '8px' }}>Total Spent (MTD)</p>
              <h3 style={{ margin: 0 }}>$14,250</h3>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Vendor</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: '700' }}>INV-P-990</td>
                <td>Global Parts Inc.</td>
                <td>Apr 27, 2024</td>
                <td>$3,200.00</td>
                <td><span style={{ fontSize: '11px', fontWeight: '700', color: '#10b981' }}>RECEIVED</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: '700' }}>INV-P-991</td>
                <td>Titanium Brake Ltd.</td>
                <td>Apr 26, 2024</td>
                <td>$1,850.00</td>
                <td><span style={{ fontSize: '11px', fontWeight: '700', color: '#f59e0b' }}>IN TRANSIT</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInvoice;
