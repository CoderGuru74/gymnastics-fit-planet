import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Timer, Users, ChevronRight, Play } from 'lucide-react';

const Home = () => {
  // Animation Variants for professional feel
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    },
    hover: { 
      y: -10, 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO SECTION - REFINED */}
      <section className="relative h-screen flex items-center bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gymYellow font-black tracking-[0.3em] uppercase text-sm mb-4 block">
              Established 2023
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none uppercase mb-6 italic">
              LIMITLESS <br/> <span className="text-gymRed">STRENGTH</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 font-medium">
              Join Gymnastics Fit Planet. Experience world-class equipment and a community that pushes you further.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="bg-gymRed text-white px-10 py-5 rounded-sm font-black text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">
                Become a Member
              </Link>
              <button className="flex items-center gap-3 text-white font-bold hover:text-gymYellow transition">
                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center"><Play size={16} fill="white"/></div>
                WATCH TOUR
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US - PROFESSIONAL CARDS */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">
            Why <span className="text-gymRed">Planet?</span>
          </h2>
          <div className="w-24 h-2 bg-gymYellow mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <Dumbbell size={32}/>, title: "Elite Coaching", desc: "Access to world-class trainers who specialize in functional and strength transformations." },
            { icon: <Timer size={32}/>, title: "Next-Gen Tech", desc: "Equipped with the latest Vibration Machines and precision Treadmill technology." },
            { icon: <Users size={32}/>, title: "Power Community", desc: "Work out in an atmosphere charged with energy and collective motivation." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              className="group p-12 bg-white border border-gray-100 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-gymRed transition-colors duration-500 z-0"></div>
              <div className="relative z-10">
                <div className="text-black group-hover:text-white transition-colors duration-500 mb-8">
                  {item.icon}
                </div>
                <h3 className="font-black text-2xl mb-4 uppercase italic">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-gymRed font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight size={14}/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DARK SECTION FOR SERVICES */}
      <section className="bg-black py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-white text-5xl font-black uppercase italic">Signature <span className="text-gymRed">Services</span></h2>
            </div>
            <Link to="/services" className="text-gymYellow border-b-2 border-gymYellow pb-1 font-bold">VIEW ALL SERVICES</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Cardio" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-gymRed font-black mb-2">01</span>
                <h4 className="text-white text-3xl font-black uppercase italic mb-4">Cardio Suite</h4>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Premium treadmills with integrated performance tracking.</p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Strength" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-gymRed font-black mb-2">02</span>
                <h4 className="text-white text-3xl font-black uppercase italic mb-4">Power Rack</h4>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Heavy-duty free weights for ultimate mass gain.</p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Vibration" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-gymRed font-black mb-2">03</span>
                <h4 className="text-white text-3xl font-black uppercase italic mb-4">Vibration Lab</h4>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Scientific recovery and muscle stimulation machines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;