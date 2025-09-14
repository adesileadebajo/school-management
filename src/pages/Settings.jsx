import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({ name: 'Admin User', email: 'admin@school.com', password: '' });
  const [schoolSettings, setSchoolSettings] = useState({ theme: 'light', notifications: true, backup: false });

  const [users] = useState([
    { id: 1, name: 'Admin User', email: 'admin@school.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Teacher Smith', email: 'teacher@school.com', role: 'Teacher', status: 'Active' },
    { id: 3, name: 'Student John', email: 'student@school.com', role: 'Student', status: 'Inactive' },
  ]);

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSchoolChange = (e) => {
    const { name, type, checked } = e.target;
    setSchoolSettings({ ...schoolSettings, [name]: type === 'checkbox' ? checked : e.target.value });
  };

  const statusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-2 -mb-px font-medium ${activeTab === 'profile' ? 'border-b-2 border-secondary-500 text-secondary-700' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('school')}
          className={`px-6 py-2 -mb-px font-medium ${activeTab === 'school' ? 'border-b-2 border-secondary-500 text-secondary-700' : 'text-gray-500 hover:text-gray-700'}`}
        >
          School Settings
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-2 -mb-px font-medium ${activeTab === 'users' ? 'border-b-2 border-secondary-500 text-secondary-700' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-6 py-2 -mb-px font-medium ${activeTab === 'backup' ? 'border-b-2 border-secondary-500 text-secondary-700' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Backup
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Leave blank to keep current"
              />
            </div>
            <button className="bg-secondary-500 text-white px-6 py-2 rounded-md hover:bg-secondary-600">
              Update Profile
            </button>
          </form>
        </div>
      )}

      {activeTab === 'school' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">School Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
              <select
                name="theme"
                value={schoolSettings.theme}
                onChange={handleSchoolChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="notifications"
                checked={schoolSettings.notifications}
                onChange={handleSchoolChange}
                className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">Enable Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="backup"
                checked={schoolSettings.backup}
                onChange={handleSchoolChange}
                className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">Auto Backup Daily</label>
            </div>
            <button className="bg-secondary-500 text-white px-6 py-2 rounded-md hover:bg-secondary-600">
              Save Settings
            </button>
          </form>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">User Management</h2>
            <button className="bg-secondary-500 text-white px-4 py-2 rounded-md hover:bg-secondary-600">
              Add User
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-primary-600 hover:text-primary-900">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'backup' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Backup & Export</h2>
          <div className="space-y-4">
            <button className="w-full bg-secondary-500 text-white px-6 py-3 rounded-md hover:bg-secondary-600">
              Download Backup
            </button>
            <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50">
              Export Data (CSV)
            </button>
            <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50">
              Restore from Backup
            </button>
            <p className="text-sm text-gray-500">Last backup: 2024-09-14 07:00 AM</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;