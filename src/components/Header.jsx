import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 fixed top-0 left-64 right-0 z-10">
      {/* School Logo/Name */}
      <div className="flex items-center">
        <img src="https://picsum.photos/40/40?random=1" alt="School Logo" className="w-10 h-10 rounded mr-3" />
        <h1 className="text-xl font-semibold text-primary-900">Easy School Management</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-600 hover:text-secondary-700">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img src="https://picsum.photos/32/32?random=2" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium text-primary-900">Admin User</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;