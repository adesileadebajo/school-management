import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Academics from './pages/Academics';
import Students from './pages/Students';
import Fees from './pages/Fees';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import SetupAccount from './pages/SetupAccount';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Academics />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/students" element={<Students />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/setup" element={<SetupAccount />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
