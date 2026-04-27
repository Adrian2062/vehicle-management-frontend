import React, { useState } from 'react';
import { 
  FileText, Plus, Search, Trash2, 
  Send, Printer, Download, Save,
  User, Mail, Phone, Hash,
  ChevronDown, AlertCircle, CheckCircle2
} from 'lucide-react';

const InvoiceItem = ({ name, sku, price, qty, onRemove }) => (
  <tr style={{ borderBottom: '1px solid #f0f2f5' }}>
    <td style={{ padding: '16px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Hash size={14} color="var(--color-text-muted)" />
        </div>
        <div>
          <p style={{ fontWeight: '800', fontSize: '14px', margin: 0 }}>{name}</p>
          <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: 0 }}>{sku}</p>
        </div>
      </div>
    </td>
    <td style={{ padding: '16px' }}><p style={{ margin: 0, fontWeight: '700' }}>${price.toFixed(2)}</p></td>
    <td style={{ padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #d2d6da', background: 'white', cursor: 'pointer' }}>-</button>
        <span style={{ fontWeight: '800' }}>{qty}</span>
        <button style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #d2d6da', background: 'white', cursor: 'pointer' }}>+</button>
      </div>
    </td>
    <td style={{ padding: '16px', fontWeight: '800' }}>${(price * qty).toFixed(2)}</td>
    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
      <button onClick={onRemove} style={{ color: '#f44336', background: 'transparent', border: 'none', cursor: 'pointer' }}>
        <Trash2 size={16} />
      </button>
    </td>
  </tr>
);

const SalesInvoice = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Dynamic Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', margin: 0 }}>Create Sales Invoice</h2>
            <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 12px', borderRadius: '6px', background: '#f8fafc', border: '1px solid #d2d6da', color: 'var(--color-text-muted)' }}>DRAFT #INV-4022</span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Build professional invoices with automated tax and inventory tracking.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'white', border: '1px solid #d2d6da', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Save size={16} /> Save Progress
          </button>
          <button className="btn btn-primary" style={{ background: 'var(--color-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Send size={16} /> Finalize & Send
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Item Builder Card */}
          <div className="card card-with-header" style={{ padding: 0 }}>
            <div className="card-header-float header-dark">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Invoice Line Items</h4>
                <button style={{ background: 'var(--color-blue)', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Plus size={14} /> ADD ITEM
                </button>
              </div>
            </div>
            <div style={{ marginTop: '80px' }}>
              <table style={{ width: '100%' }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    <th style={{ paddingLeft: '24px' }}>ITEM DESCRIPTION</th>
                    <th>UNIT PRICE</th>
                    <th>QTY</th>
                    <th>TOTAL</th>
                    <th style={{ textAlign: 'right', paddingRight: '24px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  <InvoiceItem name="Brake Pads - Performance Series" sku="SKU-882" price={124.99} qty={1} />
                  <InvoiceItem name="Synthetic Oil (5L)" sku="SKU-201" price={45.00} qty={2} />
                </tbody>
              </table>
              
              <div style={{ padding: '32px 24px', borderTop: '1px solid #f0f2f5', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: '700' }}>Subtotal</span>
                    <span style={{ fontSize: '14px', fontWeight: '800' }}>$214.99</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: '700' }}>VAT (15%)</span>
                    <span style={{ fontSize: '14px', fontWeight: '800' }}>$32.25</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '2px solid #f0f2f5' }}>
                    <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-text-main)' }}>Total Amount</span>
                    <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-blue)' }}>$247.24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="card" style={{ padding: '24px' }}>
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', marginBottom: '16px' }}>Invoice Notes & Terms</h4>
            <textarea 
              placeholder="Add payment terms or service notes here..." 
              style={{ width: '100%', height: '100px', padding: '16px', borderRadius: '12px', border: '1px solid #d2d6da', outline: 'none', fontSize: '14px' }}
            ></textarea>
          </div>
        </div>

        {/* Right Sidebar: Contextual Data */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="card card-with-header">
            <div className="card-header-float header-blue">
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Client Information</h4>
            </div>
            <div style={{ marginTop: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Adrian Smith</h4>
                  <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: '800' }}>CUSTOMER ID: #CS-8891</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={16} color="var(--color-text-muted)" />
                  <span style={{ fontSize: '13px', fontWeight: '700' }}>adrian@example.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={16} color="var(--color-text-muted)" />
                  <span style={{ fontSize: '13px', fontWeight: '700' }}>+1 (555) 902-1144</span>
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f0f2f5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--color-text-muted)' }}>CREDIT SCORE</span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#4caf50' }}>EXCELLENT</span>
                </div>
                <div style={{ height: '4px', background: '#f0f2f5', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: '#4caf50' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: '#f8fafc', border: '1px solid #d2d6da' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <AlertCircle size={20} color="#fb8c00" />
              <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800' }}>Billing Instructions</h4>
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Ensure part numbers match the physical stock labels.</li>
              <li>Apply the <strong>5% Gold Member</strong> discount if applicable.</li>
              <li>Verification required for amounts over $5,000.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;
