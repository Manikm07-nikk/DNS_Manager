import React from 'react';
import Dashboard from './components/Dashboard';
import DNSRecordForm from './components/DNSRecordForm';

const App = () => {
  return (
    <div>
      <Dashboard />
      {/* Render the DNSRecordForm component for adding/editing DNS records */}
      <DNSRecordForm />
    </div>
  );
};

export default App;