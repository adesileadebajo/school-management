import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary-900 h-screen fixed left-0 top-0 p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <div className="text-white text-2xl font-bold">School Management</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="/academics" className="flex items-center text-white bg-secondary-500 rounded-lg p-2">
              <span className="mr-3 text-secondary-400">📚</span>
              Academics
            </a>
          </li>
          <li>
            <a href="/students" className="flex items-center text-white hover:bg-primary-800 rounded-lg p-2">
              <span className="mr-3 text-secondary-400">👥</span>
              Students
            </a>
          </li>
          <li>
            <a href="/fees" className="flex items-center text-white hover:bg-primary-800 rounded-lg p-2">
              <span className="mr-3 text-secondary-400">💰</span>
              Fees
            </a>
          </li>
          <li>
            <a href="/reports" className="flex items-center text-white hover:bg-primary-800 rounded-lg p-2">
              <span className="mr-3 text-secondary-400">📊</span>
              Reports
            </a>
          </li>
          <li>
            <a href="/settings" className="flex items-center text-white hover:bg-primary-800 rounded-lg p-2">
              <span className="mr-3 text-secondary-400">⚙️</span>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;