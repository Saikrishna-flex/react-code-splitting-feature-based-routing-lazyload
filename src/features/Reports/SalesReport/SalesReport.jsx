import React from 'react'

const SalesReport = () => {
  const sales = [
    { id: 'A101', amount: '$1,200', date: '2025-06-01' },
    { id: 'A102', amount: '$980', date: '2025-06-02' },
    { id: 'A103', amount: '$1,450', date: '2025-06-03' }
  ];
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <h2>🧾 Sales Report</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            sales.map((sale) =>(
              <tr key={sale.id}>
                  <td>{sale.id}</td>
                  <td>{sale.amount}</td>
                  <td>{sale.date}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default SalesReport
