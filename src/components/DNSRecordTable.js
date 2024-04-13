
import React from 'react';
import './DNSRecordTable.css'; 

const DNSRecordTable = ({ dnsRecords, onDelete }) => {
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
              <button onClick={() => onDelete(record.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DNSRecordTable;
