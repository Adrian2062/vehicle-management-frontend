import React, { useState } from 'react';
import { 
  Bell, AlertTriangle, CheckCircle, Info, Mail, 
  Trash2, Check, Filter, Package, ShoppingCart, 
  UserPlus, FileText, ChevronRight 
} from 'lucide-react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    { id: 1, type: 'inventory', title: 'Critical Stock Level', msg: 'Engine Oil Filter (SKU: OF-202) is currently at 3 units. Minimum threshold is 10.', time: '12:45 PM', date: 'Today', icon: Package, color: 'var(--color-pink)', action: 'Restock Now' },
    { id: 2, type: 'financial', title: 'Bulk Purchase Completed', msg: 'Order #PUR-7781 for "Radiator Fans" has been processed and paid.', time: '10:30 AM', date: 'Today', icon: ShoppingCart, color: 'var(--color-green)', action: 'View Invoice' },
    { id: 3, type: 'system', title: 'New Staff Registered', msg: 'Robert Fox has been added as a "Technician" to the system.', time: 'Yesterday', date: 'Yesterday', icon: UserPlus, color: 'var(--color-blue)', action: 'View Profile' },
    { id: 4, type: 'financial', title: 'Unpaid Credit Reminder', msg: 'Customer "Alice Wilson" has a pending balance of $450.00 for 32 days.', time: 'Yesterday', date: 'Yesterday', icon: AlertTriangle, color: 'var(--color-orange)', action: 'Send Reminder' },
    { id: 5, type: 'system', title: 'Backup Successful', msg: 'Full database backup has been archived to secure storage.', time: 'Apr 25, 2024', date: 'Older', icon: FileText, color: 'var(--color-dark)', action: 'Download Log' },
  ];

  const filteredNotifications = activeTab === 'All' 
    ? notifications 
    : notifications.filter(n => n.type === activeTab.toLowerCase());

  const Tab = ({ label }) => (
    <button 
      onClick={() => setActiveScreen(label)} // Note: Simplified for logic
      style={{ 
        padding: '10px 20px', 
        background: activeTab === label ? 'var(--color-blue)' : 'transparent', 
        color: activeTab === label ? 'white' : 'var(--color-text-muted)',
        border: 'none',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );

  return (
    <div style={{ paddingBottom: '40px' }}>
      <div className="card" style={{ marginTop: '40px' }}>
        <div className="card-header-float header-dark">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h4 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Notification Center</h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                <Check size={12} style={{ marginRight: '6px' }} /> Mark All Read
              </button>
              <button style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                <Trash2 size={12} style={{ marginRight: '6px' }} /> Clear All
              </button>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', borderBottom: '1px solid #f0f2f5', paddingBottom: '16px' }}>
            <Tab label="All" />
            <Tab label="Inventory" />
            <Tab label="Financial" />
            <Tab label="System" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredNotifications.map((notif) => (
              <div key={notif.id} className="notif-item" style={{ 
                display: 'flex', 
                gap: '20px', 
                padding: '20px', 
                borderRadius: '16px', 
                border: '1px solid #f1f5f9',
                background: '#fff',
                transition: 'all 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: notif.color, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white',
                  boxShadow: 'var(--shadow-header)'
                }}>
                  <notif.icon size={22} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h5 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: 'var(--color-text-main)' }}>{notif.title}</h5>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '600' }}>{notif.time}</span>
                  </div>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{notif.msg}</p>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn" style={{ background: 'var(--color-bg-main)', color: 'var(--color-text-main)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {notif.action}
                      <ChevronRight size={14} />
                    </button>
                    <button className="btn" style={{ padding: '8px 16px', background: 'transparent', color: 'var(--color-text-muted)' }}>Dismiss</button>
                  </div>
                </div>

                {/* Left status accent line */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: notif.color }}></div>
              </div>
            ))}

            {filteredNotifications.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted)' }}>
                <Bell size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
                <p style={{ fontWeight: '700' }}>All caught up!</p>
                <p style={{ fontSize: '13px' }}>No {activeTab.toLowerCase()} notifications found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
