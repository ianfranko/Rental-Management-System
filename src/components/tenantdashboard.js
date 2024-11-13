import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TenantDashboard = () => {
  const [tenantData, setTenantData] = useState({});
  const tenantId = 1;  // For example, this could be from the logged-in user's data

  useEffect(() => {
    axios.get(`/api/tenants/${tenantId}/dashboard`)
      .then(response => setTenantData(response.data))
      .catch(error => console.error(error));
  }, [tenantId]);

  return (
    <div>
      <h2>Welcome, Tenant</h2>
      <p>Rent Due: Ksh {tenantData.rent_due}</p>
      <p>Electricity Bill: Ksh {tenantData.electricity_bill}</p>
      <button onClick={() => alert('Payment initiated')}>Pay Now</button>
      <button onClick={() => window.location.href = `/invoice/${tenantId}`}>Download Invoice</button>
    </div>
  );
};

export default TenantDashboard;
