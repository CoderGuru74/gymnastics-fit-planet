import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: 'Main Branch',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-black py-24 px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Get In <span className="text-gymRed">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-medium uppercase text-xs tracking-[0.2em]">
            Reach out to our experts and start your transformation today.
          </p>
        </motion.div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-black uppercase italic mb-6">Contact <span className="text-gymRed">Information</span></h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about our plans or the Vibration Lab? Our staff at the counter are ready to help you across all our locations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg text-gymRed"><Phone size={24}/></div>
              <div>
                <h4 className="font-black uppercase text-sm">Phone</h4>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg text-gymRed"><Mail size={24}/></div>
              <div>
                <h4 className="font-black uppercase text-sm">Email</h4>
                <p className="text-gray-500">info@gymnasticsfitplanet.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg text-gymRed"><MapPin size={24}/></div>
              <div>
                <h4 className="font-black uppercase text-sm">Main Branch</h4>
                <p className="text-gray-500">123 Fitness Ave, Sector 45, New Delhi</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center hover:bg-gymRed transition cursor-pointer"><Instagram size={20}/></div>
            <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center hover:bg-gymRed transition cursor-pointer"><Facebook size={20}/></div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-black p-10 rounded-3xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full border-b-2 border-gray-200 focus:border-gymRed outline-none py-2 transition font-bold"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full border-b-2 border-gray-200 focus:border-gymRed outline-none py-2 transition font-bold"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Select Branch</label>
              <select 
                className="w-full border-b-2 border-gray-200 focus:border-gymRed outline-none py-2 transition font-bold bg-white"
                onChange={(e) => setFormData({...formData, branch: e.target.value})}
              >
                <option>Main Branch</option>
                <option>South Extension</option>
                <option>West Wing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
              <textarea 
                required
                rows="4" 
                className="w-full border-b-2 border-gray-200 focus:border-gymRed outline-none py-2 transition font-bold resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-4 flex items-center justify-center gap-3 font-black uppercase tracking-widest hover:bg-gymRed transition-colors rounded-sm"
            >
              Send Message <Send size={18}/>
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;