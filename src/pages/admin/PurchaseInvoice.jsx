import React from 'react';
import { 
  FileCheck, Download, Search, MoreVertical, 
  Truck, ArrowUpRight, ArrowDownLeft, Calendar,
  ShieldCheck, Briefcase, Filter, RefreshCw
} from 'lucide-react';
import Pagination from '../../components/Pagination';

const ProcureStat = ({ title, value, icon: Icon, color }) => (
  <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${color}15`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={22} />
    </div>
    <div>
      <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)' }}>{value}</h3>
      <p style={{ margin: 0, fontSize: '12px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{title}</p>
    </div>
  </div>
);

const PurchaseInvoice = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Strategic Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '4px' }}>Procurement Intelligence</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Analyze inbound supply chains, verify vendor invoicing, and manage inventory valuation.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'white', border: '1px solid #d2d6da', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RefreshCw size={16} /> Sync ERP
          </button>
          <button className="btn btn-primary" style={{ background: 'var(--color-dark)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCheck size={18} /> New Purchase Order
          </button>
        </div>
      </div>

      {/* Procurement Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        <ProcureStat title="Pending Invoices" value="8" icon={Briefcase} color="#1A73E8" />
        <ProcureStat title="Inbound Value" value="$12,450" icon={Truck} color="#FB8C00" />
        <ProcureStat title="Verified (Q2)" value="94%" icon={ShieldCheck} color="#43A047" />
        <ProcureStat title="Tax Liability" value="$1,840" icon={ArrowDownLeft} color="#D81B60" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Advanced Procurement Table */}
        <div className="card card-with-header" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="card-header-float header-pink">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <h4 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '700' }}>Strategic Procurement Log</h4>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={14} color="white" />
                <input type="text" placeholder="Filter invoices..." style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '12px', outline: 'none', width: '150px' }} />
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '80px' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ paddingLeft: '24px' }}>SUPPLIER</th>
                  <th>INVOICE #</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th style={{ textAlign: 'right', paddingRight: '24px' }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vendor: 'Bosch Automotive', id: 'PO-2024-001', date: 'Apr 26, 2024', amount: '$4,250.00', status: 'RECEIVED', color: '#4caf50' },
                  { vendor: 'Castrol UK', id: 'PO-2024-088', date: 'Apr 22, 2024', amount: '$1,120.00', status: 'IN TRANSIT', color: '#fb8c00' },
                  { vendor: 'Brembo Italy', id: 'PO-2024-102', date: 'Apr 15, 2024', amount: '$8,400.00', status: 'RECEIVED', color: '#4caf50' },
                  { vendor: 'Michelin Global', id: 'PO-2024-114', date: 'Apr 10, 2024', amount: '$2,400.00', status: 'PENDING', color: '#7b809a' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ paddingLeft: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f0f2f5' }}>
                          <Briefcase size={16} color="var(--color-text-muted)" />
                        </div>
                        <p style={{ fontWeight: '800', fontSize: '14px', margin: 0, color: 'var(--color-text-main)' }}>{row.vendor}</p>
                      </div>
                    </td>
                    <td><p style={{ fontSize: '12px', fontWeight: '800', color: 'var(--color-blue)', margin: 0 }}>{row.id}</p></td>
                    <td><p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, fontWeight: '700' }}>{row.date}</p></td>
                    <td><p style={{ fontSize: '14px', fontWeight: '800', margin: 0, color: 'var(--color-text-main)' }}>{row.amount}</p></td>
                    <td style={{ textAlign: 'right', paddingRight: '24px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '800', color: row.color, background: `${row.color}15`, padding: '4px 10px', borderRadius: '6px', border: `1px solid ${row.color}30` }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination totalItems={142} itemsPerPage={10} currentPage={1} />
          </div>
        </div>

        {/* Auditor's Intelligence Widget */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="card" style={{ background: 'var(--color-dark)', color: 'white', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Inventory Valuation</h4>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Live system calculation</p>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowUpRight size={20} />
              </div>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0 }}>$248,400</h2>
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#4caf50' }}>+4.2%</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>growth from last month</span>
            </div>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', marginBottom: '20px' }}>Audit Summary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Unverified Invoices', value: '3', color: '#f44336' },
                { label: 'Outstanding Credit', value: '$4,500', color: '#fb8c00' },
                { label: 'Tax Deductible', value: '$840.50', color: '#4caf50' }
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted)' }}>{item.label}</span>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInvoice;
