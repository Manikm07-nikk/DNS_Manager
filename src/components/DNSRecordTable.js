import React, { useState, useEffect } from 'react';
import './DNSRecordTable.css'; 

const DNSRecordTable = () => {

  const [dnsRecords, setDNSRecords] = useState([]);

  const fetchDNSRecords = async () => {
    try {
      const response = await fetch('https://proxy-server-jet-omega.vercel.app/pages/api/get');
      if (response.ok) {
        const data = await response.json();
        setDNSRecords(data);
      } else {
        console.error('Failed to fetch DNS records');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteRecord = async (domain, type, value) => {
    try {
        const response = await fetch(`https://proxy-server-jet-omega.vercel.app/pages/api/delete?domain=${domain}&type=${type}&values=${value}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('DNS record deleted successfully');
            // Fetch DNS records again after deletion
            fetchDNSRecords();
        } else {
            console.error('Failed to delete DNS record');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchDNSRecords();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Domain</th>
          <th>DNS Record Type</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dnsRecords.map(record => (
          <tr key={record.id}>
            <td>{record.domain}</td>
            <td>{record.type}</td>
            <td>{record.value}</td>
            <td>
              <button onClick={() => handleDeleteRecord(record.domain, record.type, record.value)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DNSRecordTable;
