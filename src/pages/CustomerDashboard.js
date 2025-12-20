import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CreditCard, Zap, X, QrCode, Store, Upload, CheckCircle } from 'lucide-react';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [showPayModal, setShowPayModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState('choice'); // 'choice' or 'qr'
  const userName = localStorage.getItem('userName') || "Athlete";

  const handleFakePayment = () => {
    // 1. Generate Dummy Credentials
    const generatedId = "GFP-" + Math.floor(1000 + Math.random() * 9000);
    const generatedPass = "GYM" + Math.floor(100 + Math.random() * 900);

    // 2. Save to localStorage for Success Page to read
    localStorage.setItem('tempId', generatedId);
    localStorage.setItem('tempPass', generatedPass);

    // 3. Redirect to Success Page
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-black text-white p-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center shadow-xl border-b-8 border-gymRed">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gymRed rounded-full flex items-center justify-center text-3xl font-black">R</div>
            <div>
              <h1 className="text-3xl font-black uppercase italic">{userName}</h1>
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Membership: Pending Payment</p>
            </div>
          </div>
          <button 
            onClick={() => setShowPayModal(true)}
            className="bg-gymYellow text-black px-8 py-3 rounded-xl font-black uppercase text-sm hover:scale-105 transition-transform"
          >
            Pay Due Bill
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm">
            <Clock className="text-gymRed mb-4" size={32}/>
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Session Time</h3>
            <p className="text-2xl font-black italic uppercase text-black">40 Mins / Day</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm">
            <Zap className="text-gymYellow mb-4" size={32}/>
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Active Machines</h3>
            <p className="text-2xl font-black italic uppercase text-black">Treadmill + Vibro</p>
          </div>
          <div className="bg-gymRed p-8 rounded-3xl text-white shadow-lg">
            <CreditCard className="mb-4" size={32}/>
            <h3 className="text-[10px] font-black uppercase text-red-200 tracking-[0.2em]">Total Due</h3>
            <p className="text-3xl font-black italic uppercase">₹500.00</p>
          </div>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      <AnimatePresence>
        {showPayModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowPayModal(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
              <button onClick={() => { setShowPayModal(false); setPaymentStep('choice'); }} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition"><X size={24}/></button>

              {paymentStep === 'choice' ? (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black uppercase italic">Choose <span className="text-gymRed">Payment</span></h2>
                  <div className="grid gap-4">
                    <button onClick={() => setPaymentStep('qr')} className="flex items-center gap-6 p-6 border-2 border-gray-100 rounded-2xl hover:border-gymRed group transition-all text-left">
                      <QrCode size={40} className="group-hover:text-gymRed" />
                      <div><h4 className="font-black uppercase italic">Online UPI / QR</h4><p className="text-[10px] font-bold text-gray-400 uppercase">Instant Activation</p></div>
                    </button>
                    <button onClick={() => { alert("Visit reception to pay."); setShowPayModal(false); }} className="flex items-center gap-6 p-6 border-2 border-gray-100 rounded-2xl hover:border-black group transition-all text-left">
                      <Store size={40} />
                      <div><h4 className="font-black uppercase italic">Pay at Counter</h4><p className="text-[10px] font-bold text-gray-400 uppercase">Cash or Card</p></div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-black uppercase italic">Scan <span className="text-gymRed"> & Pay</span></h2>
                  <div className="bg-gray-100 p-6 rounded-3xl inline-block border-2 border-black">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GymFitPlanetPay" alt="QR" className="w-48 h-48" />
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center justify-center gap-3 w-full bg-black text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest cursor-pointer hover:bg-gymRed transition">
                      <Upload size={18}/> Upload Screenshot
                      <input type="file" className="hidden" onChange={handleFakePayment} />
                    </label>
                    <button onClick={() => setPaymentStep('choice')} className="text-[10px] font-black uppercase text-gray-400 underline">Go Back</button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerDashboard;