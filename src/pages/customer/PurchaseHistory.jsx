import React from 'react';
import { Clock, FileText, Download, ChevronRight } from 'lucide-react';

const PurchaseHistory = () => {
  const history = [
    { id: 'INV-2024-042', date: 'Apr 15, 2024', vehicle: 'Toyota Camry', amount: '$125.00', status: 'Completed' },
    { id: 'INV-2024-031', date: 'Mar 02, 2024', vehicle: 'Toyota Camry', amount: '$450.00', status: 'Completed' },
    { id: 'INV-2023-982', date: 'Dec 10, 2023', vehicle: 'Honda Civic', amount: '$85.00', status: 'Completed' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Service & Purchase History</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Keep track of your vehicle maintenance and part acquisitions.</p>
        </div>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Service Date</th>
              <th>Associated Vehicle</th>
              <th>Transaction Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.map(item => (
              <tr key={item.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={16} style={{ color: 'var(--color-text-muted)' }} />
                    <span style={{ fontWeight: '600' }}>{item.id}</span>
                  </div>
                </td>
                <td style={{ color: 'var(--color-text-muted)' }}>{item.date}</td>
                <td style={{ fontWeight: '500' }}>{item.vehicle}</td>
                <td style={{ fontWeight: '700' }}>{item.amount}</td>
                <td>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '12px', 
                    fontWeight: '600',
                    backgroundColor: '#ecfdf5',
                    color: '#10b981'
                  }}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                    <Download size={14} />
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseHistory;
