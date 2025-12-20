import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, CheckCircle, Clock, Eye, MessageCircle } from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [branches, setBranches] = useState(['Main Branch', 'South Extension', 'West Wing']);
  const [newBranch, setNewBranch] = useState('');

  // 1. MOCK DATA: Using this so the frontend works perfectly without a backend
  useEffect(() => {
    const mockUsers = [
      {
        _id: "1",
        name: "Rahul Singh",
        email: "rahul@pixelnode.com",
        branch: "Main Branch",
        paymentMethod: "Pay at Counter",
        status: "Pending",
        totalPaid: 1500,
        plan: "Monthly + Extra Time"
      },
      {
        _id: "2",
        name: "Anjali Sharma",
        email: "anjali@fitness.com",
        branch: "South Extension",
        paymentMethod: "QR Code Upload",
        status: "Verified",
        totalPaid: 3200,
        plan: "3 Months"
      },
      {
        _id: "3",
        name: "Vikram Goel",
        email: "vikram@gym.com",
        branch: "West Wing",
        paymentMethod: "QR Code Upload",
        status: "Pending",
        totalPaid: 500,
        plan: "Registration Fee Only"
      }
    ];
    setUsers(mockUsers);
  }, []);

  const addBranch = () => {
    if (newBranch.trim()) {
      setBranches([...branches, newBranch]);
      setNewBranch('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">
              Admin <span className="text-gymRed">Dashboard</span>
            </h1>
            <p className="text-gray-500 font-medium text-sm mt-1 uppercase tracking-widest">Gymnastics Fit Planet Management</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border-l-4 border-gymRed flex items-center gap-3">
              <Users size={20} className="text-gray-400"/>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Total Members</p>
                <p className="text-xl font-black">{users.length}</p>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border-l-4 border-gymYellow flex items-center gap-3">
              <Clock size={20} className="text-gray-400"/>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Pending Approvals</p>
                <p className="text-xl font-black">{users.filter(u => u.status === 'Pending').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Management Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-sm mb-10 border border-gray-100"
        >
          <div className="flex items-center gap-2 mb-6 text-gymRed">
            <MapPin size={20} />
            <h2 className="text-xl font-black uppercase italic">Branch Control</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input 
              value={newBranch} 
              onChange={(e) => setNewBranch(e.target.value)}
              className="border-2 border-gray-100 p-4 rounded-xl flex-1 focus:border-gymRed outline-none font-bold transition-all" 
              placeholder="Ex: North Delhi Center" 
            />
            <button 
              onClick={addBranch} 
              className="bg-black text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-gymRed transition-colors"
            >
              Add New Branch
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {branches.map(b => (
              <span key={b} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-xs font-black uppercase border border-gray-200">
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 bg-black text-white flex justify-between items-center">
            <h2 className="font-black uppercase italic tracking-widest text-lg">Pending & Recent Payments</h2>
            <div className="flex gap-2">
                <span className="bg-gymRed/20 text-gymRed border border-gymRed/30 text-[10px] font-black px-3 py-1 rounded-full uppercase">Action Required</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-400 uppercase text-[10px] font-black tracking-[0.2em] border-b">
                  <th className="p-6">Member Info</th>
                  <th className="p-6">Plan Details</th>
                  <th className="p-6">Method</th>
                  <th className="p-6">Status</th>
                  <th className="p-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.map(user => (
                  <tr key={user._id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="font-black text-black uppercase italic text-sm">{user.name}</div>
                      <div className="text-xs text-gray-400 font-medium">{user.email}</div>
                      <div className="text-[10px] mt-1 text-gymRed font-bold uppercase">{user.branch}</div>
                    </td>
                    <td className="p-6">
                      <div className="text-xs font-black text-gray-600 uppercase">{user.plan}</div>
                      <div className="text-lg font-black text-black">₹{user.totalPaid}</div>
                    </td>
                    <td className="p-6">
                      <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border ${user.paymentMethod === 'Pay at Counter' ? 'border-orange-200 text-orange-600 bg-orange-50' : 'border-blue-200 text-blue-600 bg-blue-50'}`}>
                        {user.paymentMethod}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className={`flex items-center gap-2 font-black uppercase text-[10px] ${user.status === 'Verified' ? 'text-green-500' : 'text-gymRed animate-pulse'}`}>
                        <div className={`w-2 h-2 rounded-full ${user.status === 'Verified' ? 'bg-green-500' : 'bg-gymRed'}`}></div>
                        {user.status}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex justify-center gap-2">
                        {user.paymentMethod === 'QR Code Upload' && (
                            <button title="View Screenshot" className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-black hover:text-white transition">
                                <Eye size={18} />
                            </button>
                        )}
                        <button title="Verify Payment" className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                            <CheckCircle size={18} />
                        </button>
                        <button title="Send WhatsApp Reminder" className="p-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                            <MessageCircle size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;