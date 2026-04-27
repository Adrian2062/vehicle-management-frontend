import React from 'react';
import { Mail, Send, FileText, CheckCircle } from 'lucide-react';

const EmailInvoice = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Send Email Invoice</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Communicate billing details directly to your customer.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
        <div className="card">
          <h4 style={{ marginBottom: '24px' }}>Compose Message</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Recipient Email</p>
              <input type="email" value="jane.doe@example.com" readOnly style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-main)', outline: 'none' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Subject</p>
              <input type="text" value="Invoice for Service: Toyota Camry (ABC-1234)" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div>
              <p className="label-caps" style={{ padding: 0, color: 'var(--color-text-muted)' }}>Message Body</p>
              <textarea style={{ width: '100%', height: '200px', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontSize: '14px', resize: 'none' }}>
                Dear Jane Doe,

Thank you for choosing AutoPart Pro for your recent vehicle service. Please find your detailed invoice attached for the maintenance performed on your Toyota Camry.

Total Amount: $125.00
Status: Paid

If you have any questions, feel free to reply to this email.

Best regards,
AutoPart Pro Team
              </textarea>
            </div>
            <button className="btn btn-primary" onClick={() => alert('Invoice Sent!')}>
              <Send size={18} />
              Send Invoice Now
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card" style={{ borderStyle: 'dashed' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <FileText size={20} style={{ color: 'var(--color-primary)' }} />
              <h4 style={{ margin: 0 }}>Attachment Preview</h4>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Generated PDF</p>
              <p style={{ fontWeight: '600' }}>INV-2024-042.pdf</p>
              <p style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Size: 245 KB</p>
            </div>
          </div>

          <div style={{ padding: '20px', backgroundColor: '#ecfdf5', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px' }}>
            <CheckCircle size={20} style={{ color: '#10b981' }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#065f46', marginBottom: '4px' }}>Email Deliverability</p>
              <p style={{ fontSize: '12px', color: '#065f46', margin: 0 }}>Customer has a verified email address and is opted into digital billing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInvoice;
