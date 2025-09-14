import React, { useState } from 'react';

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', class: '10A', status: 'Active', avatar: 'https://picsum.photos/40/40?random=1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321', class: '10B', status: 'Active', avatar: 'https://picsum.photos/40/40?random=2' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1122334455', class: '9A', status: 'Inactive', avatar: 'https://picsum.photos/40/40?random=3' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1555666777', class: '11A', status: 'Active', avatar: 'https://picsum.photos/40/40?random=4' },
  ]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', class: '', avatar: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarUpload = (e) => {
    setFormData({ ...formData, avatar: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { ...formData, id: students.length + 1, status: 'Active', avatar: formData.avatar || 'https://picsum.photos/40/40?random=5' };
    setStudents([...students, newStudent]);
    setFormData({ name: '', email: '', phone: '', class: '', avatar: '' });
    setIsModalOpen(false);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-900">Students</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search students..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secondary-500 text-white px-6 py-2 rounded-lg hover:bg-secondary-600"
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={student.avatar} alt="" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-primary-600 hover:text-primary-900">Edit</button>
                  <button onClick={() => deleteStudent(student.id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Avatar</label>
                <input
                  type="file"
                  onChange={handleAvatarUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-secondary-500 text-white px-4 py-2 rounded-md hover:bg-secondary-600"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;