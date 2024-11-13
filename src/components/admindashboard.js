import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/tenants')
      .then(response => setTenants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {tenants.map(tenant => (
          <li key={tenant.id}>{tenant.name} - Rent Due: Ksh {tenant.rent_due}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
