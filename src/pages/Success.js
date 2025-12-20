import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Copy, LogIn, Download, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  
  // Retrieve the dummy credentials generated during the payment process
  const userId = localStorage.getItem('tempId') || "GFP-RAND-123";
  const userPass = localStorage.getItem('tempPass') || "GYM-PASS-456";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="max-w-md w-full bg-white border-4 border-black rounded-[3rem] overflow-hidden shadow-[20px_20px_0px_0px_rgba(34,197,94,1)]"
      >
        {/* Success Header */}
        <div className="bg-green-500 p-10 text-center text-white border-b-4 border-black">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <CheckCircle size={80} className="mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">Payment Verified</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest mt-2 text-white/90">Welcome to Gymnastics Fit Planet</p>
        </div>

        {/* Credentials Section */}
        <div className="p-10 space-y-8">
          <div className="text-center">
            <h3 className="text-xs font-black uppercase text-gray-400 tracking-[0.2em] mb-6 font-bold">Your Login Credentials</h3>
            
            <div className="space-y-4">
              {/* User ID Field */}
              <div className="relative group">
                <p className="text-[9px] font-black text-gray-400 uppercase text-left mb-1 ml-2 font-bold">User ID</p>
                <div className="bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl flex justify-between items-center">
                  <span className="font-black text-xl text-black font-bold">{userId}</span>
                  <button onClick={() => copyToClipboard(userId)} className="text-gray-300 hover:text-gymRed transition">
                    <Copy size={20} />
                  </button>
                </div>
              </div>

              {/* Password Field */}
              <div className="relative group">
                <p className="text-[9px] font-black text-gray-400 uppercase text-left mb-1 ml-2 font-bold">Password</p>
                <div className="bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl flex justify-between items-center">
                  <span className="font-black text-xl text-black font-bold">{userPass}</span>
                  <button onClick={() => copyToClipboard(userPass)} className="text-gray-300 hover:text-gymRed transition">
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Message */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
            <p className="text-[10px] font-bold text-gray-700 leading-relaxed uppercase">
              Please take a screenshot of these details. You will need them to login to your athlete dashboard.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 py-4 border-2 border-black rounded-xl font-black uppercase text-[10px] hover:bg-gray-50 transition font-bold"
            >
              <Download size={14}/> Print PDF
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center justify-center gap-2 py-4 bg-black text-white rounded-xl font-black uppercase text-[10px] hover:bg-gymRed transition font-bold"
            >
              <LogIn size={14}/> Login Now
            </button>
          </div>
        </div>

        {/* PixelNode Branding */}
        <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
            <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest font-bold">
              Designed & Developed by PixelNode Agency
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;