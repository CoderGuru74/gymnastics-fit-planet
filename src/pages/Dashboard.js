import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import CustomerDashboard from './CustomerDashboard';

const Dashboard = () => {
  const role = localStorage.getItem('userRole');

  if (!role) return <Navigate to="/login" />;

  return (
    <>
      {role === 'admin' ? <AdminDashboard /> : <CustomerDashboard />}
    </>
  );
};

export default Dashboard;