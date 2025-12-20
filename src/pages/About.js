import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1571902953200-c7183246a0bc?q=80&w=1975')] bg-cover bg-center"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-gymYellow font-black tracking-widest uppercase text-sm">ESTD 2023</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic mt-4 tracking-tighter">
            Our <span className="text-gymRed">Legacy</span>
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-6">Born from <span className="text-gymRed">Ambition</span></h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2023, Gymnastics Fit Planet was built on a single mission: to provide a training environment where high-end technology meets raw strength. We aren't just a gym; we are a planet dedicated to your physical evolution.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our signature vibration labs to our elite cardio suites, every inch of our facility is designed to push you beyond your perceived limits.
            </p>
          </div>
          <div className="bg-gray-100 p-2 rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" 
               alt="Gym Interior" 
               className="rounded-xl grayscale hover:grayscale-0 transition duration-700"
             />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gymRed text-white rounded-full flex items-center justify-center mx-auto mb-6"><Trophy size={32}/></div>
            <h3 className="text-2xl font-black uppercase italic mb-2">Excellence</h3>
            <p className="text-gray-500 font-medium">We maintain the highest standards in equipment and cleanliness.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6"><Target size={32}/></div>
            <h3 className="text-2xl font-black uppercase italic mb-2">Focus</h3>
            <p className="text-gray-500 font-medium">Your goals are our priority. We track and optimize your results.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gymYellow text-black rounded-full flex items-center justify-center mx-auto mb-6"><Award size={32}/></div>
            <h3 className="text-2xl font-black uppercase italic mb-2">Integrity</h3>
            <p className="text-gray-500 font-medium">Honest pricing and a transparent community for everyone.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;