import React, { useState } from 'react';

const SetupAccount = () => {
  const [activeTab, setActiveTab] = useState('school');
  const [schoolData, setSchoolData] = useState({ name: '', address: '', phone: '', logo: '' });
  const [paymentMethods, setPaymentMethods] = useState([]);

  const handleSchoolChange = (e) => {
    setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
  };

  const handleLogoUpload = (e) => {
    // Placeholder for logo upload
    setSchoolData({ ...schoolData, logo: URL.createObjectURL(e.target.files[0]) });
  };

  const addPaymentMethod = (method) => {
    setPaymentMethods([...paymentMethods, method]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Setup Your Account</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('school')}
          className={`px-6 py-2 -mb-px font-medium ${activeTab === 'school' ? 'border-b-2 border-secondary-500 text-secondary-700' : 'text-gray-500 hover:text-gray-700'}`}
        >
          School Details
        </button>
        <button
          onClick={() => setActiveTab('payment')}
          className={`px-6 py-2 -mb-px font-medium ${activeTab === 'payment' ? 'border-b-2 border-secondary-500 text-secondary-700' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Payment Methods
        </button>
      </div>

      {activeTab === 'school' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">School Information</h2>
          <form className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
              <input
                type="text"
                name="name"
                value={schoolData.name}
                onChange={handleSchoolChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter school name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={schoolData.phone}
                onChange={handleSchoolChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter phone number"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={schoolData.address}
                onChange={handleSchoolChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter school address"
                rows={3}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">School Logo</label>
              <input
                type="file"
                onChange={handleLogoUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {schoolData.logo && (
                <img src={schoolData.logo || 'https://picsum.photos/100/100?random=3'} alt="Logo Preview" className="mt-2 w-24 h-24 rounded object-cover" />
              )}
            </div>
          </form>
          <button className="mt-6 bg-secondary-500 text-white px-6 py-2 rounded-md hover:bg-secondary-600">
            Save School Details
          </button>
        </div>
      )}

      {activeTab === 'payment' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
          <div className="space-y-4 mb-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>{method.type}: **** {method.number}</span>
                <button className="text-red-500">Remove</button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => addPaymentMethod({ type: 'Bank Account', number: '1234' })}
              className="bg-white border border-gray-300 p-4 rounded-md hover:shadow-md"
            >
              <div className="text-2xl mb-2">🏦</div>
              <div className="text-sm font-medium">Add Bank Account</div>
            </button>
            <button
              onClick={() => addPaymentMethod({ type: 'Mobile Money', number: '5678' })}
              className="bg-white border border-gray-300 p-4 rounded-md hover:shadow-md"
            >
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm font-medium">Add Mobile Money</div>
            </button>
            <button
              onClick={() => addPaymentMethod({ type: 'PayPal', number: '9012' })}
              className="bg-white border border-gray-300 p-4 rounded-md hover:shadow-md"
            >
              <div className="text-2xl mb-2">💳</div>
              <div className="text-sm font-medium">Add PayPal</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupAccount;