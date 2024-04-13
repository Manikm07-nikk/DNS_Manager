// Dashboard.js
import React, { useState } from 'react';
import Upload from './Upload';
import DNSRecordTable from './DNSRecordTable';
import './Dashboard.css'; 

const Dashboard = () => {
  const [dnsRecords, setDNSRecords] = useState([]);

  const handleAddRecord = (newRecord) => {
    setDNSRecords([...dnsRecords, newRecord]);
  };

  const handleDeleteRecord = (recordId) => {
    setDNSRecords(dnsRecords.filter(record => record.id !== recordId));
  };

  return (
    <div className="dashboard-container">
      <h1>Domain and DNS Record Management</h1>
      <div className="upload-container">
        <Upload onUpload={handleAddRecord} />
      </div>
      <DNSRecordTable dnsRecords={dnsRecords} onDelete={handleDeleteRecord} />
    </div>
  );
};

export default Dashboard;
