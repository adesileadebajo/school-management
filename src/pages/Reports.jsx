import React, { useState } from 'react';

const Reports = () => {
  const [reports] = useState([
    { id: 1, type: 'Attendance Report', date: '2024-09-01', status: 'Generated', actions: 'Download' },
    { id: 2, type: 'Grade Report', date: '2024-08-15', status: 'Generated', actions: 'View' },
    { id: 3, type: 'Fee Report', date: '2024-09-10', status: 'Pending', actions: 'Generate' },
    { id: 4, type: 'Student Performance', date: '2024-09-05', status: 'Generated', actions: 'Export' },
  ]);

  const reportTypes = [
    { title: 'Attendance Report', description: 'Monthly attendance summary', icon: '📊', generated: 5 },
    { title: 'Grade Report', description: 'Student grades and performance', icon: '📈', generated: 3 },
    { title: 'Fee Report', description: 'Financial overview and payments', icon: '💰', generated: 8 },
    { title: 'Student Performance', description: 'Overall student analytics', icon: '🏆', generated: 2 },
  ];

  const statusColor = (status) => {
    switch (status) {
      case 'Generated': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Reports</h1>

      {/* Report Types Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportTypes.map((report, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-secondary-100 rounded-full mr-3">
                <span className="text-xl">{report.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900">{report.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{report.description}</p>
            <p className="text-sm text-gray-500 mb-4">Generated: {report.generated} times</p>
            <button className="bg-secondary-500 text-white px-4 py-2 rounded-md hover:bg-secondary-600 text-sm">
              Generate Report
            </button>
          </div>
        ))}
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-primary-900">Recent Reports</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">{report.actions}</button>
                    <button className="text-gray-600 hover:text-gray-900">Delete</button>
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

export default Reports;