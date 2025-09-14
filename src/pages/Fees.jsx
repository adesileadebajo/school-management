import React, { useState } from 'react';

const Fees = () => {
  const [feesData] = useState([
    { id: 1, student: 'John Doe', due: '$500', paid: '$500', balance: '$0', dueDate: '2024-09-01', status: 'Paid' },
    { id: 2, student: 'Jane Smith', due: '$450', paid: '$0', balance: '$450', dueDate: '2024-09-01', status: 'Overdue' },
    { id: 3, student: 'Bob Johnson', due: '$500', paid: '$300', balance: '$200', dueDate: '2024-09-15', status: 'Pending' },
    { id: 4, student: 'Alice Brown', due: '$450', paid: '$450', balance: '$0', dueDate: '2024-09-01', status: 'Paid' },
  ]);

  const summary = {
    totalDue: '$1,900',
    totalPaid: '$1,250',
    outstanding: '$650',
    pending: 2,
  };

  const statusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Fees Management</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600">Total Due</h3>
          <p className="text-2xl font-bold text-primary-900 mt-1">{summary.totalDue}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600">Total Paid</h3>
          <p className="text-2xl font-bold text-green-600 mt-1">{summary.totalPaid}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600">Outstanding</h3>
          <p className="text-2xl font-bold text-red-600 mt-1">{summary.outstanding}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600">Pending Payments</h3>
          <p className="text-2xl font-bold text-primary-900 mt-1">{summary.pending}</p>
        </div>
      </div>

      {/* Fees Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary-900">Fee Records</h3>
          <button className="bg-secondary-500 text-white px-4 py-2 rounded-md hover:bg-secondary-600">
            Add Fee Record
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {feesData.map((fee) => (
                <tr key={fee.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.due}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.paid}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-semibold ${fee.balance === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                      {fee.balance}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor(fee.status)}`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-primary-600 hover:text-primary-900">Pay</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fees;