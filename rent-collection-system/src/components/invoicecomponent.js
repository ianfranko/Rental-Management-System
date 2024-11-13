import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceComponent = ({ tenantId }) => {
  const [invoiceData, setInvoiceData] = useState({});

  useEffect(() => {
    axios.get(`/api/invoices/${tenantId}`)
      .then(response => setInvoiceData(response.data))
      .catch(error => console.error(error));
  }, [tenantId]);

  return (
    <div>
      <h3>Invoice for Tenant {tenantId}</h3>
      <p>Amount Due: Ksh {invoiceData.amount_due}</p>
      <button onClick={() => window.print()}>Download Invoice</button>
    </div>
  );
};

export default InvoiceComponent;
