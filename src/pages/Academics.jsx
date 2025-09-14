import React from 'react';

const Academics = () => {
  const stats = [
    { name: 'Total Students', value: '1,234', icon: '👥', change: '+12%' },
    { name: 'Classes', value: '45', icon: '📚', change: '+2' },
    { name: 'Teachers', value: '67', icon: '👩‍🏫', change: '+1' },
    { name: 'Attendance Rate', value: '95%', icon: '📈', change: '+3%' },
  ];

  const features = [
    { title: 'Courses', description: 'Manage courses and subjects', icon: '📖', link: '/courses' },
    { title: 'Attendance', description: 'Track student attendance', icon: '✅', link: '/attendance' },
    { title: 'Grades', description: 'View and manage grades', icon: '📝', link: '/grades' },
    { title: 'Timetable', description: 'Schedule classes and exams', icon: '⏰', link: '/timetable' },
  ];

  const recentClasses = [
    { class: '10A Math', teacher: 'Mr. Smith', time: '9:00 AM', status: 'Ongoing' },
    { class: '11B Science', teacher: 'Ms. Johnson', time: '10:30 AM', status: 'Completed' },
    { class: '9A English', teacher: 'Dr. Lee', time: '11:00 AM', status: 'Upcoming' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Academics Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-primary-900 mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-secondary-100 rounded-full">
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-100 rounded-full mr-3">
                <span className="text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900">{feature.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <button className="text-primary-600 hover:text-primary-900 text-sm font-medium">
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* Recent Classes Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-primary-900">Recent Classes</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentClasses.map((cls, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cls.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.teacher}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    cls.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                    cls.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {cls.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Academics;