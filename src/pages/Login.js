import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // DUMMY DATA CHECK
    if (isAdmin) {
      if (email === "admin@gym.com" && password === "admin123") {
        localStorage.setItem('userRole', 'admin');
        navigate('/dashboard');
      } else { alert("Wrong Admin Password!"); }
    } else {
      if (email === "user@gym.com" && password === "user123") {
        localStorage.setItem('userRole', 'customer');
        localStorage.setItem('userName', 'Rahul Singh');
        navigate('/dashboard');
      } else { alert("Wrong Member Password!"); }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white border-2 border-black rounded-3xl shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] w-full max-w-md overflow-hidden">
        <div className="flex border-b-2 border-black font-black uppercase text-[10px]">
          <button onClick={() => setIsAdmin(false)} className={`flex-1 py-4 ${!isAdmin ? 'bg-gymRed text-white' : 'bg-white'}`}>Member Login</button>
          <button onClick={() => setIsAdmin(true)} className={`flex-1 py-4 ${isAdmin ? 'bg-black text-white' : 'bg-white'}`}>Admin Portal</button>
        </div>
        <form onSubmit={handleLogin} className="p-10 space-y-6">
          <h2 className="text-2xl font-black uppercase italic text-center">{isAdmin ? "Staff Access" : "Athlete Login"}</h2>
          <input type="email" placeholder="Email (admin@gym.com or user@gym.com)" required className="w-full p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-black font-bold" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password (admin123 or user123)" required className="w-full p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-black font-bold" onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit" className={`w-full py-4 rounded-xl font-black uppercase text-white ${isAdmin ? 'bg-black' : 'bg-gymRed'}`}>Sign In</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;