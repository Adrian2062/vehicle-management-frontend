import React from 'react';
import { ShoppingCart, Plus, Search, Trash2, CreditCard } from 'lucide-react';

const SalesInvoice = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700' }}>POS Terminal</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Generate sales invoices and process customer payments.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
        <div className="card" style={{ marginTop: '40px' }}>
          <div className="card-header-float header-dark">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Current Cart</h4>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div style={{ marginBottom: '24px', position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input type="text" placeholder="Scan barcode or type part name..." style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid #d2d6da', outline: 'none' }} />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: '700' }}>Brake Pad Set</td>
                  <td>1</td>
                  <td>$85.00</td>
                  <td style={{ fontWeight: '700' }}>$85.00</td>
                  <td><Trash2 size={16} color="#f44336" style={{ cursor: 'pointer' }} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{ marginTop: '40px' }}>
          <div className="card-header-float header-green">
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Order Summary</h4>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Subtotal</span>
                <span style={{ fontWeight: '700' }}>$85.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Tax (8%)</span>
                <span style={{ fontWeight: '700' }}>$6.80</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f0f2f5', paddingTop: '16px' }}>
                <span style={{ fontSize: '18px', fontWeight: '800' }}>Total</span>
                <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-primary)' }}>$91.80</span>
              </div>
            </div>
            <button className="btn" style={{ width: '100%', background: 'var(--color-green)', color: 'white', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '14px' }}>
              <CreditCard size={20} />
              Process Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;
