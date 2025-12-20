import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('userRole'); // Check for logged-in user

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b-4 border-gymYellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/GYM_LOGO.png" alt="Logo" className="h-12 w-12 rounded-full border-2 border-gymYellow" />
              <h1 className="text-xl font-black uppercase tracking-tighter hidden sm:block">
                Gymnastics <span className="text-gymRed">Fit Planet</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links - ENSURE CONTACT IS HERE */}
          <div className="hidden md:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link to="/" className="text-gray-800 hover:text-gymRed transition">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-gymRed transition">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-gymRed transition">About Us</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gymRed transition border-b-2 border-transparent hover:border-gymRed">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {!role ? (
              <>
                <Link to="/register" className="hidden lg:block text-[10px] font-black uppercase text-gray-400 hover:text-black transition">Join Now</Link>
                <Link 
                  to="/login" 
                  className="bg-gymRed text-white px-6 py-2 rounded-sm font-black text-xs uppercase hover:bg-black transition-all"
                >
                  Login
                </Link>
              </>
            ) : (
              <button 
                onClick={handleLogout}
                className="bg-black text-white px-6 py-2 rounded-sm font-black text-xs uppercase hover:bg-gymRed transition-all"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;